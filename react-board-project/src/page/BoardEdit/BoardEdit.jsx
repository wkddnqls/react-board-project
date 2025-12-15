import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Title,
  Input,
  Textarea,
  Preview,
  ButtonBox,
  Button,
} from "./BoardEdit.styled";
const BoardEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
const [price, setPrice] = useState(""); // 🔥 가격 상태 추가
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 const [image, setImage] = useState("");
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/api/boards/${id}`);
        const data = res.data;
        setTitle(data.title);
        setContent(data.content);
        setPrice(data.price || "");
        setImage(data.image || "");
      } catch (e) {
        alert("게시글을 불러오지 못했습니다.");
        navigate("/board");
      }
    };
    fetchPost();
  }, [id, navigate]);

  const handleEdit = async () => {
    try {
      await api.put(`/api/boards/${id}`, {
        title,
        content,
        price: Number(price),
        image,
      });
      alert("게시글이 수정되었습니다.");
      navigate(`/board/${id}`);
    } catch (e) {
      alert("게시글 수정 실패");
    }
  };


  return (
    <Container>
      <Title>✏️ 글 수정</Title>
      글 제목
      <Input value={title} onChange={e => setTitle(e.target.value)} />
       글 내용
      <Textarea value={content} onChange={e => setContent(e.target.value)} />
       가격
      <Input 
        placeholder="가격 입력"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      이미지
      <Input
        placeholder="이미지 URL 입력"
        value={image}
        onChange={e => setImage(e.target.value)}
      />

      {image && <Preview src={image} alt="preview" />}

      <ButtonBox>
        <Button onClick={handleEdit}>수정 완료</Button>
        <Button $cancel onClick={() => navigate(-1)}>취소</Button>
      </ButtonBox>
    </Container>
  );
};

export default BoardEditPage;
