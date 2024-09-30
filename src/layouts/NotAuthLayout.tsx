import { useAuth } from '@/context/Auth';
import { Navigate, Outlet } from 'react-router-dom';

const NotAuthLayout = () => {
  const auth = useAuth();

  if (auth.token) {
    return <Navigate replace to="/dashboard" />;
  }

  return <Outlet />;
};

export default NotAuthLayout;
