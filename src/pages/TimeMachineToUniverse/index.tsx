import React, { useCallback, useState } from 'react';

import { AnimationState } from '@/components/AnimatedText/interfaces';
import { usePageController } from '@/contexts/PagesController';
import { PageState } from './interfaces';
import Main from './TimeMachineToUniverse';

const TimeMachineToUniverse: React.FC = () => {
  const [animationState, setAnimationState] =
    useState<AnimationState>('show-up');
  const [pageState, setPageState] = useState<PageState>('time-machine-intro');
  const { setPage } = usePageController();

  const handleChangePage = useCallback(
    (page: number) => {
      switch (page) {
        case 0:
          setAnimationState('show-up');
          break;
        case 1:
          setPageState('time-machine-future');
          break;
        case 2:
          setPageState('time-machine-needs');
          break;
        case 4:
          setPage('universe');
          setAnimationState('hide-down');
          setPageState('time-machine-universe-intro');
          break;
        case 5:
          setPageState('universe-galaxy');
          break;
        case 6:
          setAnimationState('show-up');
          break;
        default:
      }
    },
    [setPage],
  );

  return (
    <Main
      animationState={animationState}
      pageState={pageState}
      handleChangePage={handleChangePage}
    />
  );
};

export default TimeMachineToUniverse;
