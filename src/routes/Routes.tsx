import React from 'react';

import AppLayout from '@pages/AppLayout';
import { usePageController } from '@/contexts/PagesController';
import { PageAnimationEnum } from '@/contexts/PagesController/interfaces';
import Home from '@/pages/Home';
import TimeMachine from '@pages/TimeMachine';
import Coincidence from '@/pages/Coincidence';

const renderPage = (page: PageAnimationEnum) => {
  switch (page) {
    case 'home_potency':
      return <Home />;
    case 'time-machine_universe':
      return <TimeMachine />;
    case 'coincidence':
      return <Coincidence />;
    default:
      return null;
  }
};

const Routes: React.FC = () => {
  const {
    data: { currentAnimationPage },
  } = usePageController();

  return <AppLayout>{renderPage(currentAnimationPage)}</AppLayout>;
};

export default Routes;
