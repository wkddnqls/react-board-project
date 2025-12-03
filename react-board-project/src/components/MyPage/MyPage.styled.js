// src/pages/MyPage.styled.jsx
import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
`;

export const Info = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #555;
`;

export const LogoutButton = styled.button`
  padding: 0.75rem 1.5rem;
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
export const BoardButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 1rem;

  &:hover {
    background-color: #3e9e41;
  }
`;