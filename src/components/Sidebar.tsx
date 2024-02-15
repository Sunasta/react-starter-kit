import { Component, ReactElement, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

interface SidebarLinksProps {
  path: string;
  icon?: Component;
  text: string | ReactNode;
}

const SidebarLinks: SidebarLinksProps[] = [
  {
    path: '/dashboard',
    text: <FormattedMessage id="pages.dashboard" />,
  },
  {
    path: '/users',
    text: <FormattedMessage id="pages.users" />,
  },
];

const Sidebar = (): ReactElement => {
  const sidebarLinks = SidebarLinks.map((link) => {
    return (
      <NavLink
        key={link.path}
        to={link.path}
        end
        className={(props: { isActive: boolean }): string => `${props.isActive && 'font-bold bg-primary dark:bg-primary text-white pointer-events-none'} p-3 rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white`}
      >
        {link.text}
      </NavLink>
    );
  });

  return (
    <div className="flex flex-col bg-gray w-64 min-h-screen border-r">
      <div className='flex flex-col flex-grow gap-y-2 p-4'>{sidebarLinks}</div>
    </div >
  );
};

export default Sidebar;
