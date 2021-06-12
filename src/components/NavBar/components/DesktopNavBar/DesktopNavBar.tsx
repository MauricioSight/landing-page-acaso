import React from 'react';

import NavItem from '../NavItem';
import {
  Container,
  Nav,
  NavLogo,
  ButtonsContainer,
  WhiteButton,
  TransparentButton,
} from './DesktopNavBar.styles';

const DesktopNavBar: React.FC = () => {
  return (
    <Container>
      <Nav>
        <NavLogo>ACASO</NavLogo>
        <NavItem>Sua potência</NavItem>
        <NavItem>Máquina do tempo</NavItem>
        <NavItem>Universo</NavItem>
        <NavItem>Concorrência</NavItem>
      </Nav>
      <ButtonsContainer>
        <TransparentButton>Contato</TransparentButton>
        <WhiteButton>Exprore Acaso</WhiteButton>
      </ButtonsContainer>
    </Container>
  );
};

export default DesktopNavBar;
