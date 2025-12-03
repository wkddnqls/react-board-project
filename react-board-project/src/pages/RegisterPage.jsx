import React from 'react';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const RegisterPage = ({ onRegister }) => {
  return <RegisterForm onRegister={onRegister} />;
};

export default RegisterPage;