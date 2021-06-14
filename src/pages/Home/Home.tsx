import React from 'react';

import homeAnimationJson from '@assets/ACASO pt01.json';
import BasePageControll from '@/components/BasePageControll';
import { HOME_PAGE_BREAK_POINTS } from './constants';
import { HomePageProps } from './interfaces';
import {
  DesciptionContainer,
  DesciptionH1,
  DesciptionH2,
  DesciptionH3,
  DesciptionH4,
} from './Home.styles';

const Home: React.FC<HomePageProps> = ({
  animationState,
  pageStatus,
  handleChangePage,
}) => {
  return (
    <BasePageControll
      animationJson={homeAnimationJson}
      breakPoints={HOME_PAGE_BREAK_POINTS}
      onChangePage={handleChangePage}
    >
      {pageStatus === 'first-text' ? (
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
      ) : (
        <DesciptionContainer animationState={animationState}>
          <DesciptionH2
            animationState={animationState}
            animationConfig={{
              showDelay: '2500ms',
              hideDelay: '5500ms',
              hideDuration: '1150ms',
            }}
            style={{ textShadow: 'none', fontSize: '3em' }}
          >
            Não importa onde,
            <br />
            Importa com quem
          </DesciptionH2>
          <DesciptionH3
            animationState={animationState}
            animationConfig={{
              showDelay: '3000ms',
              hideDelay: '5500ms',
              hideDuration: '1150ms',
            }}
          >
            Independente do lugar, sua potência máxima é atingida
          </DesciptionH3>
          <DesciptionH3
            animationState={animationState}
            animationConfig={{
              showDelay: '3500ms',
              hideDelay: '5500ms',
              hideDuration: '1150ms',
            }}
          >
            Quando você está com pessoas certas.
          </DesciptionH3>
        </DesciptionContainer>
      )}
    </BasePageControll>
  );
};

export default Home;
