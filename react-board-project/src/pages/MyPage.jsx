
import React from 'react';
import MyPage from '../components/MyPage/Mypage';

const MyPage1 = ({ user, onLogout }) => {
  return <MyPage user={user} onLogout={onLogout} />;
};

export default MyPage1;
