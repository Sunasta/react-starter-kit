import { useAuth } from '@/context/Auth';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Account = () => {
  const auth = useAuth();

  if (auth.token) {
    return (
      <Button asChild>
        <Link to="/dashboard">Dashboard</Link>
      </Button>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-2 w-fit justify-end md:w-full">
      <Button variant="ghost" asChild>
        <Link to="/login">Se connecter</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link to="/register">S'inscrire</Link>
      </Button>
    </div>
  );
};

export default Account;
