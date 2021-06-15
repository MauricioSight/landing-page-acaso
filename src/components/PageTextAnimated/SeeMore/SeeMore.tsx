import React from 'react';

import {
  AnimatedContainer,
  AnimatedTextH1,
} from '@/components/AnimatedText/AnimatedText.styles';
import { AnimatedButtonContainer, Button } from './styles';

const SeeMore: React.FC = () => {
  return (
    <AnimatedContainer animationState="show-up">
      <AnimatedTextH1
        animationState="show-up"
        animationConfig={{
          showDelay: '1150ms',
        }}
        style={{ textShadow: 'none', fontSize: '1.6em', marginBottom: 0 }}
      >
        Explore o
      </AnimatedTextH1>
      <AnimatedTextH1
        animationState="show-up"
        animationConfig={{
          showDelay: '1650ms',
        }}
        style={{ fontSize: '7.5em', fontWeight: 800, letterSpacing: 0 }}
      >
        ACASO
      </AnimatedTextH1>
      <AnimatedButtonContainer>
        <Button>Iniciar</Button>
      </AnimatedButtonContainer>
    </AnimatedContainer>
  );
};

export default SeeMore;
