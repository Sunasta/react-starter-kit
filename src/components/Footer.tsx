import type { ReactNode } from 'react';
import Github from '../assets/images/github.svg?react';

const Footer = (): ReactNode => {
  return (
    <footer className="w-full text-black">
      <div className="container mx-auto py-8 px-0 border-t">
        <nav className="flex flex-col gap-8 w-full dark:text-white">
          <ul className="flex justify-center">
            <a href="https://github.com/Sunasta/react-starter-kit" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 inline-block mr-2" />
            </a>
          </ul>
        </nav>
        <p className="text-center dark:text-white p-2 mt-2">&copy; {new Date().getFullYear()} Sunsasta, SARL.</p>
      </div>
    </footer>
  );
};

export default Footer;
