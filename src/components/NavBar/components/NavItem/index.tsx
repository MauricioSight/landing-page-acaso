import React from 'react';

import { NavItemProps } from './interfaces';
import Main from './NavItem';

const NavItem: React.FC<NavItemProps> = (props) => {
  return <Main {...props} />;
};

export default NavItem;
