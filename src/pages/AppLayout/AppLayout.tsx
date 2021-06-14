import React from 'react';

import Navbar from '@components/NavBar';
import HomeSection from '@pages/Home';
import BackgoundAnimated from '@pages/BackgoundAnimated';
import { Container, BackgoundContainer, AppContainer } from './styles';

const AppLayout: React.FC = () => {
  return (
    <Container>
      <BackgoundContainer>
        <BackgoundAnimated />
      </BackgoundContainer>
      <AppContainer>
        <Navbar />
        <HomeSection />
      </AppContainer>
    </Container>
  );
};

export default AppLayout;
