import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg?react';
import ThemeSwitch from './ThemeSwitch';
import LanguageSwitch from './LanguageSwitch';
import { FormattedMessage } from 'react-intl';

interface NavbarLinksProps {
  path: string;
  icon?: React.Component;
  text: string | React.ReactNode;
}

const NavBarLinks: NavbarLinksProps[] = [
  {
    path: '/',
    text: <FormattedMessage id="header.home" />,
  },
  {
    path: '/contact',
    text: <FormattedMessage id="header.contact" />,
  },
];

const MainNavbar = () => {
  const navbarLinks = NavBarLinks.map((link) => {
    return (
      <NavLink
        key={link.path}
        to={link.path}
        end
        className={(props: { isActive: boolean }): string => `${props.isActive && 'active'}`}
      >
        {link.text}
      </NavLink>
    );
  });

  return (
    <nav className="grid grid-cols-3 gap-8">
      <div className="flex items-center">
        <NavLink to="/" className="flex items-center">
          <Logo className="text-black dark:text-white" />
          <strong className="text-black">SUNASTA</strong>
        </NavLink>
      </div>
      <div className="flex gap-5 justify-center items-center">{navbarLinks}</div>
      <div className="flex gap-5 justify-end items-center">
        <LanguageSwitch />
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default MainNavbar;
