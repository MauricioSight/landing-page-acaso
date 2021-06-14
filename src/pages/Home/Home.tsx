import React from 'react';
import Lottie from 'react-lottie';

import { HomePageProps } from './interfaces/indext';
import {
  Container,
  SecondLayer,
  DesciptionContainer,
  DesciptionH1,
  DesciptionH2,
  DesciptionH3,
  DesciptionH4,
} from './styles';

const Home: React.FC<HomePageProps> = ({
  lottieRef,
  lottieOptions,
  animationState,
}) => {
  return (
    <Container>
      <Lottie ref={lottieRef} options={lottieOptions} isClickToPauseDisabled />
      <SecondLayer>
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
      </SecondLayer>
    </Container>
  );
};

export default Home;
