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
import axios from "axios";
const RegisterForm = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);
  
  const checkEmailDuplicate = async () => {
  if (!email) {
    setError("이메일을 입력해주세요.");
    return;
  }

  const res = await axios.get(
    "http://localhost:8888/api/users/check",
    { params: { email } }
  );

  if (res.data) {
    setError("이미 존재하는 이메일입니다.");
    setEmailChecked(false);
  } else {
    setError("사용 가능한 이메일입니다.");
    setEmailChecked(true);
  }
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!emailChecked) {
    setError("이메일 중복확인을 해주세요.");
    return;
  }

  if (password !== confirm) {
    setError("비밀번호가 일치하지 않습니다.");
    return;
  }

  await axios.post("http://localhost:8888/api/users", {
    email,
    password,
  });

  onRegister({ email });
};

  return (
    <FormContainer>
      <FormTitle>회원가입</FormTitle>
      {error && <ErrorText>{error}</ErrorText>}
        <Form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "8px" }}>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailChecked(false); // 이메일 변경 시 다시 중복확인 필요
            }}
            required
          />
          <Button type="button" onClick={checkEmailDuplicate}>
            중복확인
          </Button>
        </div>
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
