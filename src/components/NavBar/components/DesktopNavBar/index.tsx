import React from 'react';

import { NavBarProps } from '../../interfaces';
import Main from './DesktopNavBar';

const DesktopNavBar: React.FC<NavBarProps> = (props) => {
  return <Main {...props} />;
};

export default DesktopNavBar;
