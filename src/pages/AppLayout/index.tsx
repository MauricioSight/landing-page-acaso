import React from 'react';
import Lottie from 'react-lottie';

import Navbar from '@components/NavBar';
import background from '@assets/backgound/BG ACASO pt01 blue.json';
import { Container, BackgoundContainer, AppContainer } from './styles';

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: background,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const AppLayout: React.FC = () => {
  return (
    <Container>
      <BackgoundContainer>
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </BackgoundContainer>
      <AppContainer>
        <Navbar />
      </AppContainer>
    </Container>
  );
};

export default AppLayout;
