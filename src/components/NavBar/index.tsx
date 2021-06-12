import React from 'react';
import { useMediaQuery } from 'react-responsive';

import MobileNavBar from './components/MobileNavBar';
import DesktopNavBar from './components/DesktopNavBar';

const NavBar: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ query: '(max-width: 973px)' });

  if (isMobile) return <MobileNavBar />;
  return <DesktopNavBar />;
};

export default NavBar;
