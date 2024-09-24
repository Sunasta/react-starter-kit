import { Component, ReactElement, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import useWindowSize from '@/hooks/useWindowSize';
import { cn } from '@/lib/utils';

/** Components */ 
import HeaderLogo from './HeaderLogo';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/components/ui/navigation-menu';
import ThemeSwitch from '@/components/ThemeSwitch';
import LanguageSwitch from '@/components/LanguageSwitch';
import Account from '@/components/Account';
import { Separator } from '@/components/ui/separator';
import { Popover, PopoverContent } from './ui/popover';
import { PopoverTrigger } from '@radix-ui/react-popover';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

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

const Header = (): ReactElement => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width !== undefined && windowSize.width <= 768;

  return (
    <header className="flex justify-between md:grid md:grid-cols-[1fr_auto_1fr] w-full container mx-auto py-2">
      <HeaderLogo />
      <MainNav isMobile={isMobile} />
      {/* SecondaryNav will either be displayed in the Header or included inside HamburgerMenu */}
      {!isMobile && <SecondaryNav isMobile={isMobile} />}
    </header>
  );
};

const MainNav = ({ isMobile }: { isMobile: boolean }): ReactElement => {
  const navLinks: ReactElement<NavbarLinksProps>[] = NavLinks.map((link) => (
    <NavigationMenuItem key={link.path}>
      <NavLink
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
  ));

  return (
    <div className="flex">
      {isMobile ? (
        <HamburgerMenu links={navLinks} />
      ) : (
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col md:flex-row md:gap-8">
            {navLinks}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );
};

interface HamburgerMenuProps {
  links: ReactElement<NavbarLinksProps>[];
}

const HamburgerMenu = ({ links }: HamburgerMenuProps): ReactElement => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="md:hidden" aria-label="Toggle Menu">
          <Menu className="w-6 h-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start" className="w-64 p-4">
        {/* Navigation Links */}
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col gap-2">
            {links}
          </NavigationMenuList>
        </NavigationMenu>

        {/* SecondaryNav inside the burger menu */}
        <div className="mt-4">
          <SecondaryNav isMobile={true} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

const SecondaryNav = ({ isMobile }: { isMobile: boolean }): ReactElement => {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-end md:items-center">
      <Account />
      {
        isMobile ? (
          <Separator orientation="horizontal" className="my-2" />
        ) : (
          <Separator orientation="vertical" className="h-6 mx-2" />
        )
      }
      <LanguageSwitch />
      <ThemeSwitch />
    </div>
  );
};

export default Header;
