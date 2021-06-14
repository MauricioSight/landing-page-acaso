/* eslint-disable no-unused-expressions */
import React from 'react';

import { HomePageProps } from './interfaces';
import Main from './Home';

const Home: React.FC<HomePageProps> = ({ animationState }) => {
  return <Main animationState={animationState} />;
};

export default Home;
