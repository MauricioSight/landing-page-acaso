import React from 'react';

import CoincidenceAnimationJson from '@assets/ACASO pt03.json';
import BasePageControll from '@/components/BasePageControll';
import { COINCIDENCE_PAGE_BREAK_POINTS } from './constants';
// import { Container } from './styles';

const Coincidence: React.FC = () => {
  return (
    <BasePageControll
      animationJson={CoincidenceAnimationJson}
      breakPoints={COINCIDENCE_PAGE_BREAK_POINTS}
    >
      {}
    </BasePageControll>
  );
};

export default Coincidence;
