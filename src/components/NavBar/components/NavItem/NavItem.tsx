import React from 'react';

import { NavItemProps } from './interfaces';
import { Container } from './NavItem.styles';

const NavItem: React.FC<NavItemProps> = ({ children, onNavegate, ...rest }) => {
  return (
    <Container onClick={() => onNavegate?.()} {...rest}>
      {children}
    </Container>
  );
};

export default NavItem;
