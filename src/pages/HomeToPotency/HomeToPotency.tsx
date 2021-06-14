import React from 'react';

import homeAnimationJson from '@assets/ACASO pt01.json';
import PageController from '@/components/PageController';
import Home from '@pages/screens/Home';
import Potency from '@pages/screens/Potency';
import { HOME_POTENCY_BREAK_POINTS } from './constants';
import { HomeToPotencyProps } from './interfaces';

const HomeToPotency: React.FC<HomeToPotencyProps> = ({
  animationState,
  pageStatus,
  handleChangePage,
}) => {
  return (
    <PageController
      animationJson={homeAnimationJson}
      breakPoints={HOME_POTENCY_BREAK_POINTS}
      onChangePage={handleChangePage}
    >
      {pageStatus === 'home' ? (
        <Home animationState={animationState} />
      ) : (
        <Potency animationState={animationState} />
      )}
    </PageController>
  );
};

export default HomeToPotency;
