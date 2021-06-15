import React from 'react';

import {
  AnimatedContainer,
  AnimatedTextH1,
  AnimatedTextH2,
  AnimatedTextH3,
  AnimatedTextH4,
} from '@components/AnimatedText/AnimatedText.styles';
import { HomePageMainProps } from './interfaces';

const Home: React.FC<HomePageMainProps> = ({ animationState }) => {
  return (
    <AnimatedContainer animationState={animationState}>
      <AnimatedTextH2 animationState={animationState}>
        Se conecte com
      </AnimatedTextH2>
      <AnimatedTextH1 animationState={animationState}>
        Pessoas certas por Acaso
      </AnimatedTextH1>
      <AnimatedTextH3 animationState={animationState}>
        Uma plataforma que te ajuda a encontrar quem te permite
      </AnimatedTextH3>
      <AnimatedTextH4 animationState={animationState}>
        Chegar na sua melhor versão
      </AnimatedTextH4>
    </AnimatedContainer>
  );
};

export default Home;
