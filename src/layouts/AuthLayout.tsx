import { AuthHeader } from '@/components';
import Sidebar from '@/components/Sidebar';
import { useAuth } from '@/context/Auth';
import type { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = (): ReactElement => {
  const auth = useAuth();

  if (auth.token) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div id="AuthLayout" className="flex flex-col min-h-screen">
      <AuthHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AuthLayout;
