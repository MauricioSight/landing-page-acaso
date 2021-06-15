import React from 'react';

import {
  DesciptionContainer,
  DesciptionH1,
  DesciptionH2,
  DesciptionH3,
  DesciptionH4,
} from '@components/AnimatedText/AnimatedText.styles';
import { HomePageMainProps } from './interfaces';

const Home: React.FC<HomePageMainProps> = ({ animationState }) => {
  return (
    <DesciptionContainer animationState={animationState}>
      <DesciptionH1 animationState={animationState}>
        Se conecte com
      </DesciptionH1>
      <DesciptionH2 animationState={animationState}>
        Pessoas certas por Acaso
      </DesciptionH2>
      <DesciptionH3 animationState={animationState}>
        Uma plataforma que te ajuda a encontrar quem te permite
      </DesciptionH3>
      <DesciptionH4 animationState={animationState}>
        Chegar na sua melhor versão
      </DesciptionH4>
    </DesciptionContainer>
  );
};

export default Home;
