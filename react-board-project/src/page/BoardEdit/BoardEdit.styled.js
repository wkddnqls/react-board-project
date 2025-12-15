import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 15px;
  border: 1px solid #bbb;
  border-radius: 4px;
`;

export const Textarea = styled.textarea`
  height: 130px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #bbb;
  border-radius: 4px;
  resize: none;
`;

export const Preview = styled.img`
  width: 100%;
  border-radius: 6px;
  margin-top: 10px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const Button = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background: ${(props) => (props.$cancel ? "#777" : "#2c7fff")};
  color: white;
  border-radius: 6px;
  transition: 0.2s;

  &:hover {
    background: ${(props) => (props.$cancel ? "#5a5a5a" : "#1058cd")};
  }
`;
