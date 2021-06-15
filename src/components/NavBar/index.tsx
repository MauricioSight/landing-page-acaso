import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { usePageController } from '@/contexts/PagesController';
import MobileNavBar from './components/MobileNavBar';
import DesktopNavBar from './components/DesktopNavBar';
import { Container } from './NavBar.styles';

const NavBar: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ query: '(max-width: 973px)' });
  const { data } = usePageController();

  return (
    <Container>
      {isMobile ? (
        <MobileNavBar currentPage={data.currentPage} onNavegate={() => null} />
      ) : (
        <DesktopNavBar currentPage={data.currentPage} onNavegate={() => null} />
      )}
    </Container>
  );
};

export default NavBar;
