import React from 'react';

import AppLayout from '@pages/AppLayout';
import { usePageController } from '@/contexts/PagesController';
import { PageAnimationEnum } from '@/contexts/PagesController/interfaces';
import HomeToPotency from '@/pages/HomeToPotency';
import TimeMachineToUniverse from '@/pages/TimeMachineToUniverse';
import CoincidenceToSeeMore from '@/pages/CoincidenceToSeeMore';

const renderPage = (page: PageAnimationEnum) => {
  switch (page) {
    case 'home-potency':
      return <HomeToPotency />;
    case 'time-machine-universe':
      return <TimeMachineToUniverse />;
    case 'coincidence-see-more':
      return <CoincidenceToSeeMore />;
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
