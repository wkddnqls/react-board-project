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

const LoginForm = ({ onLogin }) => {

 const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   
const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email };
    localStorage.setItem("user", JSON.stringify(userData));
    onLogin(userData); 
     navigate("/mypage");
  } 
    

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
