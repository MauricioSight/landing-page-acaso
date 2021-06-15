import React from 'react';

import {
  DesciptionContainer,
  DesciptionH2,
} from '@/components/AnimatedText/AnimatedText.styles';
import { AnimatedContainer, Button } from './styles';

const SeeMore: React.FC = () => {
  return (
    <DesciptionContainer animationState="show-up">
      <DesciptionH2
        animationState="show-up"
        animationConfig={{
          showDelay: '1150ms',
        }}
        style={{ textShadow: 'none', fontSize: '1.6em', marginBottom: 0 }}
      >
        Explore o
      </DesciptionH2>
      <DesciptionH2
        animationState="show-up"
        animationConfig={{
          showDelay: '1650ms',
        }}
        style={{ fontSize: '7.5em', fontWeight: 800, letterSpacing: 0 }}
      >
        ACASO
      </DesciptionH2>
      <AnimatedContainer>
        <Button>Iniciar</Button>
      </AnimatedContainer>
    </DesciptionContainer>
  );
};

export default SeeMore;
