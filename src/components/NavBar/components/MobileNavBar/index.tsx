import React, { useState, useCallback } from 'react';

import { NavBarProps } from './interfaces';
import Main from './MobileNavBar';

const MobileNavBar: React.FC<NavBarProps> = (props) => {
  const [visible, setVisible] = useState(false);

  const onCloseMenu = useCallback(() => setVisible(false), []);

  const onOpenMenu = useCallback(() => setVisible(true), []);

  return (
    <Main
      {...props}
      visible={visible}
      onCloseMenu={onCloseMenu}
      onOpenMenu={onOpenMenu}
    />
  );
};

export default MobileNavBar;
