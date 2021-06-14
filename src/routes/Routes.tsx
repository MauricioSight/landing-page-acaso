import React from 'react';

import AppLayout from '@pages/AppLayout';
import { usePageController } from '@/contexts/PagesController';
import { PageAnimationEnum } from '@/contexts/PagesController/interfaces';
import Home from '@/pages/Home';

const renderPage = (page: PageAnimationEnum) => {
  switch (page) {
    case 'home_potency':
      return <Home />;
    case 'time-machine_universe':
      return <h1>Time machine / universe</h1>;
    case 'competition':
      return <h1>competition</h1>;
    case 'coincidence':
      return <h1>coincidence</h1>;
    case 'more':
      return <h1>more</h1>;
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
