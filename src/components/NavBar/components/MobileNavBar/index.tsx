import React, { useState, useCallback } from 'react';

import Main from './MobileNavBar';

const MobileNavBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const onCloseMenu = useCallback(() => setVisible(false), []);

  const onOpenMenu = useCallback(() => setVisible(true), []);

  return (
    <Main visible={visible} onCloseMenu={onCloseMenu} onOpenMenu={onOpenMenu} />
  );
};

export default MobileNavBar;
