import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <div id="MainLayout" className="flex flex-col min-h-screen items">
      <Header />
      <main className="flex flex-col flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
