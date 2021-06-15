import React from 'react';

import { PagesControllerProvider } from '@/contexts/PagesController';
import Routes from './Routes';

const routes: React.FC = () => {
  return (
    <PagesControllerProvider initialPage="time-machine-universe">
      <Routes />
    </PagesControllerProvider>
  );
};

export default routes;
