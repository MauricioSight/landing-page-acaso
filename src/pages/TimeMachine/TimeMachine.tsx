import React from 'react';

import MachineAnimationJson from '@assets/ACASO pt02.json';
import BasePageControll from '@/components/BasePageControll';
import { TIME_MACHINE_PAGE_BREAK_POINTS } from './constants';
// import { Container } from './styles';

const TimeMachine: React.FC = () => {
  return (
    <BasePageControll
      animationJson={MachineAnimationJson}
      breakPoints={TIME_MACHINE_PAGE_BREAK_POINTS}
    >
      {}
    </BasePageControll>
  );
};

export default TimeMachine;
