import React from 'react';

import {
  DesciptionContainer,
  DesciptionH2,
  DesciptionH3,
} from '@pages/HomeToPotency/HomeToPotency.styles';
import { PotencyPageMainProps } from './interfaces';

const Portency: React.FC<PotencyPageMainProps> = ({ animationState }) => {
  return (
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
  );
};

export default Portency;
