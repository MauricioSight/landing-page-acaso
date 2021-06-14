/* eslint-disable no-unused-expressions */
import React, { useCallback, useState } from 'react';

import { PageStatus } from './interfaces';
import { AnimationState } from './Home.styles';
import Main from './Home';

const Home: React.FC = () => {
  const [animationState, setAnimationState] =
    useState<AnimationState>('show-up');
  const [pageStatus, setPageStatus] = useState<PageStatus>('first-text');

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
        setPageStatus('second-text');
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

export default Home;
