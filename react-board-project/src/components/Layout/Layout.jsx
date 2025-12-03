import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ paddingBottom: '60px' }}> {/* Footer 높이만큼 패딩 */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
