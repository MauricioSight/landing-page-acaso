/* eslint-disable no-unused-expressions */
import React, { useCallback, useState } from 'react';

import { usePageController } from '@/contexts/PagesController';
import { PageStatus } from './interfaces';
import { AnimationState } from './HomeToPotency.styles';
import Main from './HomeToPotency';

const HomeToPotency: React.FC = () => {
  const [animationState, setAnimationState] =
    useState<AnimationState>('show-up');
  const [pageStatus, setPageStatus] = useState<PageStatus>('home');
  const { setPage } = usePageController();

  const handleChangePage = useCallback((page: number) => {
    switch (page) {
      case 0:
        setAnimationState('show-up');
        break;
      case 1:
        setAnimationState('hide-up');
        break;
      case 3:
        setAnimationState('show-up');
        setPageStatus('potency');
        setPage('potency');
        break;
      case 4:
        setAnimationState('hide-down');
        break;
      default:
    }
  }, []);

  return (
    <Main
      animationState={animationState}
      pageStatus={pageStatus}
      handleChangePage={handleChangePage}
    />
  );
};

export default HomeToPotency;
