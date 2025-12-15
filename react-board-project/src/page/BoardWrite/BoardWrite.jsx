import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  Input,
  Textarea,
  Preview,
  ButtonBox,
  Button,
} from "./BoardWrite.styled";
import api from "../../api/axios";

const BoardWritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || !storedUser.email) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    setUser(storedUser);
  }, [navigate]);

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    try {
      await api.post("/api/boards", {
        title,
        content,
        image: imageUrl || null,
        price: price ? Number(price) : null,
        writerEmail: user.email,
      });

      navigate("/board");
    } catch (e) {
      console.error(e);
      alert("게시글 등록 실패");
    }
  };

  if (!user) return null; // 로그인 체크 완료 전에는 화면 렌더링 방지

  return (
    <Container>
      <Title>📌 글쓰기</Title>

      <Input
        placeholder="제목"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <Textarea
        placeholder="내용"
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <Input
        placeholder="가격 입력 (원)"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <Input
        placeholder="이미지 URL 입력 (선택)"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
      />

      {imageUrl && <Preview src={imageUrl} alt="preview" />}

      <ButtonBox>
        <Button onClick={handleSubmit}>등록</Button>
        <Button onClick={() => navigate("/board")}>게시판 목록으로</Button>
      </ButtonBox>
    </Container>
  );
};

export default BoardWritePage;
