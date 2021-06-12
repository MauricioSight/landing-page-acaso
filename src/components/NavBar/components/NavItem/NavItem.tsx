import React from 'react';

import { NavItemProps } from './interfaces';
import { Container } from './NavItem.styles';

const NavItem: React.FC<NavItemProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default NavItem;
