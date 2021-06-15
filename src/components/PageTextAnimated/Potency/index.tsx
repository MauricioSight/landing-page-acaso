import React from 'react';

import { PotencyPageProps } from './interfaces';
import Main from './Potency';

const Potency: React.FC<PotencyPageProps> = ({ animationState }) => {
  return <Main animationState={animationState} />;
};

export default Potency;
