import React, { useEffect, useState } from 'react';

import { TimeMachinePageProps, PageState } from './interfaces';
import Main from './TimeMachine';

const TimeMachine: React.FC<TimeMachinePageProps> = ({
  pageState,
  animationState,
}) => {
  const [history, setHistory] = useState<PageState[]>([]);

  useEffect(() => {
    setHistory([...history, pageState]);
  }, [pageState]);

  return <Main history={history} animationState={animationState} />;
};

export default TimeMachine;
