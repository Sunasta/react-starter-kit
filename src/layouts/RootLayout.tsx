import { Footer, Header } from '@/components';
import type { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const RootLayout = (): ReactElement => {
  return (
    <div id="RootLayout" className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex flex-col flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
