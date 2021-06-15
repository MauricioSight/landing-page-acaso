import React from 'react';

import { NavBarProps, PageEnum, pageEnum } from '../../interfaces';
import NavItem from '../NavItem';
import {
  Container,
  Nav,
  NavLogo,
  ButtonsContainer,
  WhiteButton,
  TransparentButton,
} from './DesktopNavBar.styles';

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
    >
      {pageEnum[page]}
    </NavItem>
  );
};

const DesktopNavBar: React.FC<NavBarProps> = ({ currentPage, onNavegate }) => {
  const pages = Object.keys(pageEnum);

  return (
    <Container>
      <Nav>
        <NavLogo>ACASO</NavLogo>
        {pages.map((key, index) =>
          index === 0
            ? null
            : renderNavItem(key as PageEnum, currentPage, onNavegate),
        )}
      </Nav>
      <ButtonsContainer>
        <TransparentButton>Contato</TransparentButton>
        <WhiteButton>Exprore Acaso</WhiteButton>
      </ButtonsContainer>
    </Container>
  );
};

export default DesktopNavBar;
