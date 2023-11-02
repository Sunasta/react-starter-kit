import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';
import React from 'react';

const AuthLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AuthLayout;
