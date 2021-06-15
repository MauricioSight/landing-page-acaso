import React from 'react';

import { TimeMachinePageProps } from './interfaces';
import Main from './TimeMachine';

const TimeMachine: React.FC<TimeMachinePageProps> = (props) => {
  return <Main {...props} />;
};

export default TimeMachine;
