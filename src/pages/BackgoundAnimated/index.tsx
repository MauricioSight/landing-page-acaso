import React from 'react';
import Lottie from 'react-lottie';

import background from '@assets/background.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: background,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const BackgoundAnimated: React.FC = () => {
  return <Lottie options={defaultOptions} height="100%" width="100%" />;
};

export default BackgoundAnimated;
