import React from 'react';

import {
  DesciptionContainer,
  DesciptionH3,
} from '@components/AnimatedText/AnimatedText.styles';
import AnimatedParagraph from '@/components/AnimatedText/AnimatedParagraph';
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
        <AnimatedParagraph
          animationType={currentAnimationState}
          title="Construa seu / universo em ACASO"
          subtitle1="Monte galáxias de conexões e se aproxime de pessoas"
          subtitle2="Com potenciais em comum em qualquer assunto."
          showDelay={1150}
          hideDelay={700}
          hideDuration={1150}
        />
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
