// src/components/RegisterForm/RegisterForm.styled.jsx
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
`;

export const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 5px #ff7f50;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: #ff7f50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #ff6333;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
`;

export const FooterText = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #666;
`;

export const StyledLink = styled(Link)`
  margin-left: 0.3rem;
  color: #ff7f50;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
