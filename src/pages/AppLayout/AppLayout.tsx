import React from 'react';

import Navbar from '@components/NavBar';
import BackgoundAnimated from '@pages/BackgoundAnimated';
import { Container, BackgoundContainer, AppContainer } from './styles';

const AppLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <BackgoundContainer>
        <BackgoundAnimated />
      </BackgoundContainer>
      <AppContainer>
        <Navbar />
        {children}
      </AppContainer>
    </Container>
  );
};

export default AppLayout;
