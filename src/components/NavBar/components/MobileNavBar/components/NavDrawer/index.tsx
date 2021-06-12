import React from 'react';

import { NavDrawerProps } from './interfaces';
import { Drawer } from './NavDrawer.styles';

const NavDrawer: React.FC<NavDrawerProps> = ({
  visible,
  onClose,
  children,
}) => {
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      {children}
    </Drawer>
  );
};

export default NavDrawer;
