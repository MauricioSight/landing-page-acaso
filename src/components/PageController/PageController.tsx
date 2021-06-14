import React from 'react';
import Lottie from 'react-lottie';

import { PageControllerMainProps } from './interfaces';
import { Container, SecondLayer } from './PageController.styles';

const PageController: React.FC<PageControllerMainProps> = ({
  lottieRef,
  lottieOptions,
  children,
}) => {
  return (
    <Container>
      <Lottie ref={lottieRef} options={lottieOptions} isClickToPauseDisabled />
      <SecondLayer>{children}</SecondLayer>
    </Container>
  );
};

export default PageController;
