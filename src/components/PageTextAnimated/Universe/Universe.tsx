import React from 'react';

import {
  DesciptionContainer,
  DesciptionH2,
  DesciptionH3,
} from '@components/AnimatedText/AnimatedText.styles';
import { UniversePageMainProps } from './interfaces';
import { Layer } from '../common/styles';

const Universe: React.FC<UniversePageMainProps> = ({
  history,
  animationState,
}) => {
  const currentAnimationState = history.includes('universe-galaxy')
    ? 'hide-up'
    : 'show-up';
  return (
    <>
      <Layer>
        <DesciptionContainer animationState={currentAnimationState}>
          <DesciptionH2
            animationState={currentAnimationState}
            animationConfig={{
              showDelay: '1150ms',
              hideDelay: '700ms',
              hideDuration: '1150ms',
            }}
            style={{ textShadow: 'none', fontSize: '3em', marginBottom: 0 }}
          >
            Construa seu
            <br />
            universo em ACASO
          </DesciptionH2>
          <DesciptionH3
            animationState={currentAnimationState}
            animationConfig={{
              showDelay: '1650ms',
              hideDelay: '700ms',
              hideDuration: '1150ms',
            }}
          >
            Monte galáxias de conexões e se aproxime de pessoas
          </DesciptionH3>
          <DesciptionH3
            animationState={currentAnimationState}
            animationConfig={{
              showDelay: '2150ms',
              hideDelay: '700ms',
              hideDuration: '1150ms',
            }}
          >
            Com potenciais em comum em qualquer assunto.
          </DesciptionH3>
        </DesciptionContainer>
      </Layer>
      {history.includes('universe-galaxy') && (
        <Layer>
          <DesciptionContainer animationState={animationState}>
            <DesciptionH3
              animationState={animationState}
              animationConfig={{
                showDelay: '8150ms',
                hideDelay: '100ms',
                hideDuration: '2150ms',
              }}
              style={{ fontSize: '0.9em' }}
            >
              As cores ao redor do perfil
            </DesciptionH3>
            <DesciptionH3
              animationState={animationState}
              animationConfig={{
                showDelay: '8650ms',
                hideDelay: '100ms',
                hideDuration: '2150ms',
              }}
              style={{ fontSize: '0.9em' }}
            >
              simboliza as galaxias a qual
            </DesciptionH3>
            <DesciptionH3
              animationState={animationState}
              animationConfig={{
                showDelay: '9150ms',
                hideDelay: '100ms',
                hideDuration: '2150ms',
              }}
              style={{ marginBottom: '9.5em', fontSize: '0.9em' }}
            >
              está inserido
            </DesciptionH3>
          </DesciptionContainer>
        </Layer>
      )}
    </>
  );
};

export default Universe;
