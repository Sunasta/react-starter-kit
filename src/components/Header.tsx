import MainNavbar from './navbars/MainNavbar';

const Header: React.FC = () => {
  return (
    <header>
      <div className="w-full container mx-auto py-5 px-0">
        <MainNavbar />
      </div>
    </header>
  );
};

export default Header;
