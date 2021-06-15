import React from 'react';

import AnimatedParagraph from '@/components/AnimatedText/components/AnimatedParagraph';
import { TimeMachinePageMainProps } from './interfaces';
import { Layer } from '../common/styles';

const TimeMachine: React.FC<TimeMachinePageMainProps> = ({
  history,
  animationState,
}) => {
  return (
    <>
      <Layer>
        <AnimatedParagraph
          animationType={
            !history.includes('time-machine-future') ? 'show-up' : 'hide-up'
          }
          title="Pessoas são como / Máquinas do tempo"
          showDelay={200}
          hideDelay={200}
          hideDuration={1150}
        />
      </Layer>
      {history.includes('time-machine-future') ||
      history.includes('time-machine-needs') ? (
        <Layer>
          <AnimatedParagraph
            animationType={
              !history.includes('time-machine-needs') ? 'show-up' : 'hide-up'
            }
            title="Pessoas podem te ajudar / a se conectar com o futuro"
            showDelay={1150}
            hideDelay={200}
            hideDuration={1150}
          />
        </Layer>
      ) : null}
      {history.includes('time-machine-needs') && (
        <Layer>
          <AnimatedParagraph
            animationType={animationState}
            title="Pessoas te conectam com / com tudo que você precisar"
            showDelay={1150}
            hideDelay={0}
            hideDuration={1150}
          />
        </Layer>
      )}
    </>
  );
};

export default TimeMachine;
