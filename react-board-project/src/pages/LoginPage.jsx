// pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = ({ onLogin }) => {
  return <LoginForm onLogin={onLogin} />;
};

export default LoginPage;
