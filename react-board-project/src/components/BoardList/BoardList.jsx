import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Title, WriteButton, List, Item, Empty } from "./BoardList.styled";
const BoardList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(stored);
  }, []);

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
