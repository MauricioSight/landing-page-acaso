import React from 'react';

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

const MobileNavBar: React.FC<MobileNavBarMainProps> = ({
  visible,
  onOpenMenu,
  onCloseMenu,
}) => {
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
            <NavItem translateTextOff>ACASO</NavItem>
            <NavItem translateTextOff>Sua potência</NavItem>
            <NavItem translateTextOff>Máquina do tempo</NavItem>
            <NavItem translateTextOff>Universo</NavItem>
            <NavItem translateTextOff>Concorrência</NavItem>
            <NavItem translateTextOff>Contato</NavItem>
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
