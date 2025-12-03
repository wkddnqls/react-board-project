import React, { useState } from "react";
import {
  FormContainer,
  FormTitle,
  Form,
  Input,
  Button,
  ErrorText,
  FooterText,
  StyledLink
} from "./RegisterForm.styled";

const RegisterForm = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    const userData = { email };
    localStorage.setItem("user", JSON.stringify(userData));
    onRegister(userData);
  };

  return (
    <FormContainer>
      <FormTitle>회원가입</FormTitle>
      {error && <ErrorText>{error}</ErrorText>}
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
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <Button type="submit">회원가입</Button>
      </Form>
      <FooterText>
        이미 계정이 있나요?
        <StyledLink to="/">로그인</StyledLink>
      </FooterText>
    </FormContainer>
  );
};

export default RegisterForm;
