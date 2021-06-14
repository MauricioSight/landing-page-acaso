import React from 'react';

import CoincidenceAnimationJson from '@assets/ACASO pt03.json';
import PageController from '@/components/PageController';
import { COINCIDENCE_PAGE_BREAK_POINTS } from './constants';

const Coincidence: React.FC = () => {
  return (
    <PageController
      animationJson={CoincidenceAnimationJson}
      breakPoints={COINCIDENCE_PAGE_BREAK_POINTS}
    >
      {}
    </PageController>
  );
};

export default Coincidence;
