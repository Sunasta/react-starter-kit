import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/Auth";
import Logo from '@/assets/images/logo.svg?react';

const HeaderLogo = (): ReactElement => {
  const auth = useAuth();
  const setLogoUrl = auth.token ? '/dashboard' : '/';
  return (
    <Link to={setLogoUrl} className="flex items-center gap-2">
      <Logo className="dark:text-white w-8 h-8" />
      <strong className="dark:text-white">SUNASTA</strong>
    </Link>
  );
}

export default HeaderLogo;