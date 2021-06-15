import React from 'react';

import ScrollFooter from '@components/ScrollFooter';
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
        <ScrollFooter />
      </AppContainer>
    </Container>
  );
};

export default AppLayout;
