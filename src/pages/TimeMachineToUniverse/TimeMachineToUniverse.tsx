import React from 'react';

import MachineAnimationJson from '@assets/ACASO pt02.json';
import PageController from '@/components/PageController';
import { TIME_MACHINE_PAGE_BREAK_POINTS } from './constants';

const TimeMachineToUniverse: React.FC = () => {
  return (
    <PageController
      animationJson={MachineAnimationJson}
      breakPoints={TIME_MACHINE_PAGE_BREAK_POINTS}
    >
      {}
    </PageController>
  );
};

export default TimeMachineToUniverse;
