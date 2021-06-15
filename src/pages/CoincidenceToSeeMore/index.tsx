import React, { useCallback, useReducer } from 'react';

import { pageHandleReducer } from '@pages/screens/common/utils';
import { CoincidencePageReducer } from './interfaces';
import Main from './CoincidenceToSeeMore';

const CoincidenceToSeeMore: React.FC = () => {
  const [state, dispatch] = useReducer<CoincidencePageReducer>(
    pageHandleReducer,
    {
      animationState: 'show-up',
      pageState: 'coincidence-intro',
      history: ['coincidence-intro'],
    },
  );

  const handleChangePage = useCallback((page: number) => {
    switch (page) {
      case 1:
        dispatch({
          type: 'update-page',
          page: 'coincidence-conection',
        });
        break;
      case 2:
        dispatch({
          type: 'update-page',
          page: 'coincidence-navegate',
        });
        break;
      case 3:
        dispatch({
          type: 'update-page-animation',
          page: 'see-more',
          animation: 'hide-up',
        });
        break;
      default:
    }
  }, []);

  return <Main state={state} handleChangePage={handleChangePage} />;
};

export default CoincidenceToSeeMore;
