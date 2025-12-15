import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  FormTitle,
  Form,
  Input,
  Button,
  FooterText,
  StyledLink
} from './LoginForm.styled';
import api from "../../api/axios"; 
const LoginForm = ({ onLogin }) => {

 const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ⭐ 서버로 로그인 요청
      const res = await api.post("/api/users/login", {
        email,
        password,
      });

      // 로그인 성공
    
      onLogin(res.data);
      navigate("/mypage");
    } catch (err) {
      alert("이메일 또는 비밀번호가 틀렸습니다.");
    }
  };

    

  return (
    <FormContainer>
      <FormTitle>로그인</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">로그인</Button>
      </Form>
      <FooterText>
        아직 계정이 없나요?
        <StyledLink to="/register">회원가입</StyledLink>
      </FooterText>
    </FormContainer>
  );
};

export default LoginForm;
