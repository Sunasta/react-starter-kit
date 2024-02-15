import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '@/context/Auth';

const NotAuthLayout = () => {

  const auth = useAuth();

  if (auth.token) {
    return <Navigate replace to="/dashboard" />;
  }

  return <Outlet />;
}

export default NotAuthLayout;