import React from 'react';

import TimeMachine from '@pages/screens/TimeMachine';
import Universe from '@pages/screens/Universe';
import MachineAnimationJson from '@assets/ACASO pt02.json';
import PageController from '@/components/PageController';
import { TIME_MACHINE_PAGE_BREAK_POINTS } from './constants';
import { TimeMachineToUniverseProps } from './interfaces';

const TimeMachineToUniverse: React.FC<TimeMachineToUniverseProps> = ({
  state,
  handleChangePage,
}) => {
  return (
    <PageController
      animationJson={MachineAnimationJson}
      breakPoints={TIME_MACHINE_PAGE_BREAK_POINTS}
      onChangePage={handleChangePage}
    >
      {state.pageState.includes('time-machine') && <TimeMachine {...state} />}
      {state.pageState.includes('universe') && <Universe {...state} />}
    </PageController>
  );
};

export default TimeMachineToUniverse;
