import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer, Logo, Nav, NavLink, NavLinks } from './Header.styled';
import { ROUTES } from '../../routes/routePaths';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <HeaderContainer>
      <Logo to={ROUTES.HOME}>당근마켓 SPA</Logo>
      <Nav>
        <NavLinks>
          <NavLink to={ROUTES.HOME} className={isActive(ROUTES.HOME)}>홈</NavLink>
          <NavLink to={ROUTES.BOARD} className={isActive(ROUTES.BOARD)}>상품 목록</NavLink>
          <NavLink to="/mypage" className={isActive('/mypage')}>마이페이지</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
