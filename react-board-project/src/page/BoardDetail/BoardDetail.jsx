import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  Container,
  Title,
  Writer,
  Price,
  Content,
  Image,
  DateText,
  ButtonGroup,
  Button,
  EditLink
} from "./BoardDetail.styled";

import api from "../../api/axios";



const BoardDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [post, setPost] = useState(null);

 useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/api/boards/${id}`);
        setPost(res.data);
      } catch (e) {
        alert("게시글을 불러오지 못했습니다.");
        navigate("/board");
      }
    };
    fetchPost();
  }, [id, navigate]);

  const handleDelete = async () => {
    try {
      await api.delete(`/api/boards/${id}`);
      alert("게시글이 삭제되었습니다.");
      navigate("/board");
    } catch (e) {
      alert("게시글 삭제 실패");
    }
  };

  if (!post) return <p>게시글을 불러오는 중...</p>;

  return (
    <Container>
      <Title>글 제목 : {post.title}</Title>
      <Writer>작성자: {post.writer}</Writer>

      {post.price && <Price>가격: {post.price}원</Price>}

      <Content>내용 : {post.content}</Content>
       <Content>이미지</Content>
      {post.image && <Image src={post.image} alt="게시글 이미지" />}

      <DateText>작성시간: {post.createdAt}</DateText>

      <ButtonGroup>
        {user.email === post.writerEmail && (
          <>
            <EditLink onClick={() => navigate(`/board/${id}/edit`)}>수정</EditLink>
            <Button $danger onClick={handleDelete}>삭제</Button>
          </>
        )}
        <Button onClick={() => navigate("/board")}>목록으로</Button>
      </ButtonGroup>
    </Container>
  );
};

export default BoardDetailPage;
