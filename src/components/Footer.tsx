import Github from '../assets/images/github.svg?react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-black">
      <div className="container mx-auto py-8 px-0 border-t">
        <nav className='flex flex-col gap-8 w-full dark:text-white'>
          <ul className='flex flex-col items-center'>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Lien 1
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Lien 2
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Lien 3
              </a>
            </li>
          </ul>
          <ul className='flex justify-center'>
            <a href="https://github.com/Sunasta/react-starter-kit" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 inline-block mr-2" />
            </a>
          </ul>
        </nav>
        <p className="text-center p-2 mt-2">&copy; {new Date().getFullYear()} Sunsasta, SARL.</p>
      </div>
    </footer>
  );
};

export default Footer;
