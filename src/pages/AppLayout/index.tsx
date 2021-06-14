import React from 'react';

import Main from './AppLayout';

const AppLayout: React.FC = ({ children }) => {
  return <Main>{children}</Main>;
};

export default AppLayout;
