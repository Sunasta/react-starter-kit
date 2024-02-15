import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import reactLogo from '@/assets/images/react.svg';
import viteLogo from '@/assets/images/vite.svg';

const Home = (): ReactElement | null => {
  return (
    <section className="container mx-auto flex flex-1 flex-col justify-center items-center gap-y-2">
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react h-24 w-24" alt="React logo" />
        </a>
      </div>
      <h1 className='text-5xl font-bold'>Vite + React</h1>
      <p className="read-the-docs">
        <FormattedMessage id="pages.home.read_the_docs" />
      </p>
    </section>
  );
};

export default Home;
