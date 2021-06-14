import React from 'react';
import { useMediaQuery } from 'react-responsive';

import MobileNavBar from './components/MobileNavBar';
import DesktopNavBar from './components/DesktopNavBar';
import { Container } from './NavBar.styles';

const NavBar: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ query: '(max-width: 973px)' });

  return (
    <Container>{isMobile ? <MobileNavBar /> : <DesktopNavBar />}</Container>
  );
};

export default NavBar;
