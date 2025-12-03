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
  margin-bottom: 1.2rem;
  font-size: 1.8rem;
  color: #333;
  text-align: center;
`;

export const WriteButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  a {
    background: #4caf50;
    padding: 10px 16px;
    color: #fff;
    border-radius: 6px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      background: #3e9e41;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  padding: 12px 14px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;

  a {
    font-weight: bold;
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    font-size: 0.9rem;
    color: #777;
  }
`;

export const Empty = styled.p`
  text-align: center;
  margin: 2rem 0;
  color: #888;
`;
