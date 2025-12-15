import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Info, Avatar,LogoutButton, BoardButton } from "./MyPage.styled";

const MyPage = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    onLogout(null);
  };

  if (!user) return null;

  return (
    <Container>
       <Avatar
        src={user.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
        alt="profile"
      />
      <Title>마이페이지</Title>
      <Info>안녕하세요, {user.email}님!</Info>

      {/* 게시판 이동 버튼 */}
      <BoardButton onClick={() => navigate("/board")}>
        게시판으로 이동
      </BoardButton>

      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </Container>
  );
};

export default MyPage;
