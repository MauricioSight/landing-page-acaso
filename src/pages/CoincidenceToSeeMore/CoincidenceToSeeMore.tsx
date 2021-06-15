import React from 'react';

import Coincidence from '@pages/screens/Coincidence';
import SeeMore from '@pages/screens/SeeMore';
import CoincidenceAnimationJson from '@assets/ACASO pt03.json';
import PageController from '@components/PageController';
import { COINCIDENCE_PAGE_BREAK_POINTS } from './constants';
import { CoincidenceToSeeMoreProps } from './interfaces';

const CoincidenceToSeeMore: React.FC<CoincidenceToSeeMoreProps> = ({
  state,
  handleChangePage,
}) => {
  return (
    <PageController
      animationJson={CoincidenceAnimationJson}
      breakPoints={COINCIDENCE_PAGE_BREAK_POINTS}
      onChangePage={handleChangePage}
    >
      <Coincidence {...state} />
      {state.pageState.includes('see-more') && <SeeMore />}
    </PageController>
  );
};

export default CoincidenceToSeeMore;
