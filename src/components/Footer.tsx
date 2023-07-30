const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-black">
      <div className="container mx-auto py-8 border-t-2">
        <nav>
          <li>
            <a href="https://github.com/Sunasta/react-starter-kit" target="_blank" rel="noopener noreferrer">
              Starter Kit React
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              lien 2
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              lien 3
            </a>
          </li>
        </nav>
        <p className="text-center border-y-2 p-2 mt-10">&copy; {new Date().getFullYear()} Sunsasta, SARL.</p>
      </div>
    </footer>
  );
};

export default Footer;
