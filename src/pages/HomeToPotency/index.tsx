import React, { useCallback, useReducer } from 'react';

import { usePageController } from '@/contexts/PagesController';
import { pageHandleReducer } from '@/components/PageTextAnimated/common/utils';
import { HomeToPotencyPageReducer } from './interfaces';
import Main from './HomeToPotency';

const HomeToPotency: React.FC = () => {
  const [state, dispatch] = useReducer<HomeToPotencyPageReducer>(
    pageHandleReducer,
    {
      animationState: 'show-up',
      pageState: 'home',
      history: ['home'],
    },
  );
  const { setPage } = usePageController();

  const handleChangePage = useCallback(
    (page: number) => {
      switch (page) {
        case 1:
          dispatch({
            type: 'update-animation',
            animation: 'hide-up-vh',
          });
          setPage('potency');
          break;
        case 3:
          dispatch({
            type: 'update-page-animation',
            page: 'potency',
            animation: 'show-up',
          });
          break;
        case 4:
          dispatch({
            type: 'update-animation',
            animation: 'hide-up',
          });
          break;
        default:
      }
    },
    [setPage],
  );

  return <Main state={state} handleChangePage={handleChangePage} />;
};

export default HomeToPotency;
