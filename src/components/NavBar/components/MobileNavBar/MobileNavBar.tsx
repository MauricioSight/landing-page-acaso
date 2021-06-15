import React from 'react';

import { PageEnum, pageEnum } from '../../interfaces';
import NavItem from '../NavItem';
import NavDrawer from './components/NavDrawer';
import { MobileNavBarMainProps } from './interfaces';
import {
  Container,
  LogoNav,
  ManuContainer,
  Menu,
  WhiteButton,
  DrawerHeader,
  CloseIcon,
  Nav,
  DrawerFooter,
} from './MobileNavBar.styles';

const renderNavItem = (
  page: PageEnum,
  currentPage: PageEnum,
  onNavegate: (goToPage: PageEnum) => void,
) => {
  return (
    <NavItem
      key={page}
      isShowing={currentPage === page}
      onNavegate={() => onNavegate(page)}
      translateTextOff
    >
      {pageEnum[page]}
    </NavItem>
  );
};

const MobileNavBar: React.FC<MobileNavBarMainProps> = ({
  visible,
  currentPage,
  onNavegate,
  onOpenMenu,
  onCloseMenu,
}) => {
  const pages = Object.keys(pageEnum);

  return (
    <Container>
      <LogoNav>ACASO</LogoNav>
      <ManuContainer>
        <WhiteButton>Explore Acaso</WhiteButton>
        <Menu onClick={onOpenMenu} />
        <NavDrawer visible={visible} onClose={onCloseMenu}>
          <DrawerHeader>
            <CloseIcon onClick={onCloseMenu} />
          </DrawerHeader>
          <Nav>
            {pages.map((key, index) =>
              index === 0
                ? null
                : renderNavItem(key as PageEnum, currentPage, onNavegate),
            )}
          </Nav>
          <DrawerFooter>
            <WhiteButton>Explore Acaso</WhiteButton>
          </DrawerFooter>
        </NavDrawer>
      </ManuContainer>
    </Container>
  );
};

export default MobileNavBar;
