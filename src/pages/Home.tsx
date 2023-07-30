import React from 'react';
import reactLogo from '../assets/images/react.svg';
import viteLogo from '../assets/images/vite.svg';
import { FormattedMessage } from 'react-intl';

const Home: React.FC = (): JSX.Element => {
  return (
    <section className="container mx-auto flex flex-1 flex-col justify-center items-center gap-y-2">
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        <FormattedMessage id="pages.home.read_the_docs" />
      </p>
    </section>
  );
};

export default Home;
