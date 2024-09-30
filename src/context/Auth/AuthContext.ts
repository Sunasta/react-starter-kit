import { createContext, useContext } from 'react';

type User = {
  firstname: string;
  name: string;
};

export type Credentials = {
  email: string;
  password: string;
};

interface LoginContextInterface {
  token: string;
  user: User | null;
  loginAction: (data: Credentials) => Promise<void>;
  logOut: () => void;
}

export const AuthContext = createContext<LoginContextInterface>({
  token: '',
  user: null,
  loginAction: async () => {
    throw new Error('loginAction not implemented');
  },
  logOut: () => {
    // Implement log out functionality here
    console.log('User logged out');
  },
});

// This is a hack to get the displayName to show up in the React DevTools.
AuthContext.displayName = 'AuthContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
