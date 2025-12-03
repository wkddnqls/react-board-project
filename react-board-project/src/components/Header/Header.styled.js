import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: auto;
  height: 60px;
  background-color: #ff7f50;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #fff;
`;

export const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;



  &:hover {
    opacity: 0.8;
  }
`;
