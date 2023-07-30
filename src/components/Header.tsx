import MainNavbar from './navbars/MainNavbar';

const Header: React.FC = () => {
  return (
    <header>
      <div className="w-full container mx-auto py-5 border-b-2">
        <MainNavbar />
      </div>
    </header>
  );
};

export default Header;
