import { Component, ReactElement, ReactNode, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { cn } from '@/lib/utils';

import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/components/ui/navigation-menu';
import ThemeSwitch from '@/components/ThemeSwitch';
import LanguageSwitch from '@/components/LanguageSwitch';
import Account from '@/components/Account';
import { Separator } from '@/components/ui/separator';
import HeaderLogo from './HeaderLogo';

const Header = (): ReactElement => {
  return (
    <header className="grid md:grid-cols-[1fr_auto_1fr] w-full container mx-auto py-2">
      <HeaderLogo />
      <MainNav />
      <SecondaryNav />
    </header>
  );
};

interface NavbarLinksProps {
  path: string;
  icon?: Component;
  text: string | ReactNode;
}

const NavLinks: NavbarLinksProps[] = [
  {
    path: '/',
    text: <FormattedMessage id="pages.home" />,
  },
  {
    path: '/about',
    text: <FormattedMessage id="pages.about" />,
  },
  {
    path: '/contact',
    text: <FormattedMessage id="pages.contact" />,
  }
];

const MainNav = (): ReactElement => {
  const navLinks = NavLinks.map((link) => {
    return (
      <NavigationMenuItem>
        <NavLink
          key={link.path}
          to={link.path}
          end
          className={({ isActive }): string => cn(
            'text-sm font-medium p-3 rounded-lg transition-all hover:drop-shadow-xl',
            isActive && 'underline underline-offset-8 decoration-primary pointer-events-none'
          )}
        >
          {link.text}
        </NavLink>
      </NavigationMenuItem>
    );
  });

  return (
    <div className='flex'>
      <NavigationMenu>
        <NavigationMenuList className='flex flex-col md:flex-row md:gap-8'>
          {navLinks}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const SecondaryNav = (): ReactElement => {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-end md:items-center">
      <Account />
      {
        windowSize.innerWidth > 768 ?
          <Separator orientation='vertical' className='h-6 mx-2' /> :
          <Separator orientation='horizontal' />
      }
      <LanguageSwitch />
      <ThemeSwitch />
    </div>
  );
}

export default Header;
