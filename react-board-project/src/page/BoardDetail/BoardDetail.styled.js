import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 3rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #222;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Writer = styled.p`
  color: #666;
  margin-bottom: 8px;
  font-size: 15px;
`;

export const Price = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #2d8d2d;
  margin: 10px 0;
`;

export const Content = styled.p`
  font-size: 18px;
  color: #222;
  line-height: 1.6;
  white-space: pre-wrap;    /* 줄바꿈 유지 */
  word-break: break-all;    /* 긴 글도 줄바꿈 */
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin: 1rem 0;
`;

export const DateText = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1.5rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  transition: 0.2s;
  color: #fff;
  background: ${props => props.$danger ? "#e64343" : "#2c7fff"};

  &:hover {
    background: ${props => props.$danger ? "#c62828" : "#1058cd"};
  }
`;

export const EditLink = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  background: #4caf50;
  color: white;
  transition: 0.2s;

  &:hover {
    background: #3a963b;
  }
`;
