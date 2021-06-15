import React from 'react';

import homeAnimationJson from '@assets/ACASO pt01.json';
import PageController from '@/components/PageController';
import Home from '@/components/PageTextAnimated/Home';
import Potency from '@/components/PageTextAnimated/Potency';
import { HOME_POTENCY_BREAK_POINTS } from './constants';
import { HomeToPotencyProps } from './interfaces';

const HomeToPotency: React.FC<HomeToPotencyProps> = ({
  state,
  handleChangePage,
}) => {
  return (
    <PageController
      animationJson={homeAnimationJson}
      breakPoints={HOME_POTENCY_BREAK_POINTS}
      onChangePage={handleChangePage}
    >
      {state.pageState === 'home' ? (
        <Home {...state} />
      ) : (
        <Potency {...state} />
      )}
    </PageController>
  );
};

export default HomeToPotency;
