import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  width: 50%;
  max-width: 720px;
  margin: 80px auto;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  background-color: #fff;
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #ff7f50;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #ff5722;
  }
`;

export const FooterText = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
`;

export const StyledLink = styled(Link)`
  color: #ff7f50;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;
