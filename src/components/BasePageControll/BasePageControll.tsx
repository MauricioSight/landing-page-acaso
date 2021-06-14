import React from 'react';
import Lottie from 'react-lottie';

import { BasePageMainProps } from './interfaces';
import { Container, SecondLayer } from './BasePageControll.styles';

const BasePageControll: React.FC<BasePageMainProps> = ({
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

export default BasePageControll;
