import React from 'react';

import {
  DesciptionContainer,
  DesciptionH2,
} from '@components/AnimatedText/AnimatedText.styles';
import { TimeMachinePageMainProps } from './interfaces';
import { Layer } from '../common/styles';

const TimeMachine: React.FC<TimeMachinePageMainProps> = ({
  history,
  animationState,
}) => {
  return (
    <>
      <Layer>
        <DesciptionContainer
          animationState={
            !history.includes('time-machine-future') ? 'show-up' : 'hide-up'
          }
        >
          <DesciptionH2
            animationState={
              !history.includes('time-machine-future') ? 'show-up' : 'hide-up'
            }
            animationConfig={{
              showDelay: '200ms',
              hideDelay: '200ms',
              hideDuration: '1150ms',
            }}
            style={{ textShadow: 'none', fontSize: '3em' }}
          >
            Pessoas são como
            <br />
            Máquinas do tempo
          </DesciptionH2>
        </DesciptionContainer>
      </Layer>
      {history.includes('time-machine-future') ||
      history.includes('time-machine-needs') ? (
        <Layer>
          <DesciptionContainer
            animationState={
              !history.includes('time-machine-needs') ? 'show-up' : 'hide-up'
            }
          >
            <DesciptionH2
              animationState={
                !history.includes('time-machine-needs') ? 'show-up' : 'hide-up'
              }
              animationConfig={{
                showDelay: '1150ms',
                hideDelay: '200ms',
                hideDuration: '1150ms',
              }}
              style={{ textShadow: 'none', fontSize: '3em' }}
            >
              Pessoas podem te ajudar
              <br />a se conectar com o futuro
            </DesciptionH2>
          </DesciptionContainer>
        </Layer>
      ) : null}
      {history.includes('time-machine-needs') && (
        <Layer>
          <DesciptionContainer animationState={animationState}>
            <DesciptionH2
              animationState={animationState}
              animationConfig={{
                showDelay: '1150ms',
                hideDelay: '0ms',
                hideDuration: '1150ms',
              }}
              style={{ textShadow: 'none', fontSize: '3em' }}
            >
              Pessoas te conectam com
              <br />
              com tudo que você precisar
            </DesciptionH2>
          </DesciptionContainer>
        </Layer>
      )}
    </>
  );
};

export default TimeMachine;
