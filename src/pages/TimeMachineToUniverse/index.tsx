import React, { useCallback, useReducer } from 'react';

import { usePageController } from '@/contexts/PagesController';
import { pageHandleReducer } from './utils';
import Main from './TimeMachineToUniverse';

const TimeMachineToUniverse: React.FC = () => {
  const [state, dispatch] = useReducer(pageHandleReducer, {
    animationState: 'show-up',
    pageState: 'time-machine-intro',
    history: ['time-machine-intro'],
  });

  const { setPage } = usePageController();

  const handleChangePage = useCallback(
    (page: number) => {
      switch (page) {
        case 1:
          dispatch({
            type: 'update-page',
            page: 'time-machine-future',
          });
          break;
        case 2:
          dispatch({
            type: 'update-page',
            page: 'time-machine-needs',
          });
          break;
        case 4:
          dispatch({
            type: 'update-page-animation',
            page: 'time-machine-universe-intro',
            animation: 'hide-down',
          });
          setPage('universe');
          break;
        case 5:
          dispatch({
            type: 'update-page-animation',
            page: 'universe-galaxy',
            animation: 'show-up',
          });
          break;
        case 6:
          dispatch({
            type: 'update-animation',
            animation: 'hide-up-vh',
          });
          break;
        default:
      }
    },
    [setPage],
  );

  return <Main state={state} handleChangePage={handleChangePage} />;
};

export default TimeMachineToUniverse;
