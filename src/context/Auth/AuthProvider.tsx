import { AuthContext, type Credentials } from '@/context/Auth';
import errorHandler from '@/utils/errorHandler';
import { type ReactNode, useState } from 'react';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('site') || '');

  const loginAction = async (payload: Credentials) => {
    try {
      const response = await fetch('your-api-endpoint/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw errorHandler("Erreur lors de la tentative d'authentification");
      }
      const res = await response.json();
      if (!res.ok) {
        throw errorHandler(res.message);
      }
      setUser(res.data.user);
      setToken(res.token);
      localStorage.setItem('site', res.token);
    } catch (err) {
      throw errorHandler(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('site');
  };

  return <AuthContext.Provider value={{ token, user, loginAction, logOut }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
