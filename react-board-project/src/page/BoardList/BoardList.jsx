import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Title, WriteButton, List, Item, Empty } from "./BoardList.styled";
import api from "../../api/axios";
const BoardList = () => {
  const [posts, setPosts] = useState([]);
 const [loading, setLoading] = useState(true);
useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/api/boards"); // 서버에서 게시글 가져오기
        setPosts(response.data);
      } catch (error) {
        console.error("게시글 불러오기 실패:", error);
        setPosts([]); // 실패 시 빈 배열
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <Container>Loading...</Container>;

  return (
    <Container>
      <Title>게시판</Title>

      <WriteButton>
        <Link to="/board/write">글쓰기</Link>
      </WriteButton>

      <List>
        {posts.length === 0 && <Empty>작성된 게시글이 없습니다.</Empty>}

        {posts.map(post => (
          <Item key={post.id}>
            <Link to={`/board/${post.id}`}>{post.title}</Link>
            <span>{post.writer}</span>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default BoardList;
