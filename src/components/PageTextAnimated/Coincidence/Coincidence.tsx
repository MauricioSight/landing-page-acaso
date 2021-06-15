import React from 'react';

import AnimatedParagraph from '@/components/AnimatedText/components/AnimatedParagraph';
import { CoincidencePageMainProps } from './interfaces';
import { Layer } from '../common/styles';

const Coincidence: React.FC<CoincidencePageMainProps> = ({
  history,
  animationState,
}) => {
  const coincidenceConection = history.includes('coincidence-conection')
    ? 'hide-up'
    : 'show-up';
  const coincidenceNavegate = history.includes('coincidence-navegate')
    ? 'hide-up'
    : 'show-up';
  return (
    <>
      <Layer>
        <AnimatedParagraph
          animationType={coincidenceConection}
          title="Explore as galáxias / por palavras chaves"
          subtitle1="Seleciona assuntos de interesses para determinados"
          subtitle2="Contextos e encontre as pessoas certas"
          showDelay={0}
          hideDelay={0}
          hideDuration={900}
        />
      </Layer>
      {history.includes('coincidence-conection') ||
      history.includes('coincidence-navegate') ? (
        <Layer>
          <AnimatedParagraph
            animationType={coincidenceNavegate}
            title="Coincidências que / conectam pessoas"
            subtitle1="Ulizamos de critérios óbivios e não óvios a partir de"
            subtitle2="coincidências, para te conctar com inúmeras galáxias"
            showDelay={1150}
            hideDelay={0}
            hideDuration={900}
          />
        </Layer>
      ) : null}
      {history.includes('coincidence-navegate') && (
        <Layer>
          <AnimatedParagraph
            animationType={animationState}
            title="Navegue / por multiversos"
            subtitle1="Encontre círculos em que as conexões são mais"
            subtitle2="fortes e forme comunidades"
            showDelay={1150}
            hideDelay={0}
            hideDuration={900}
          />
        </Layer>
      )}
    </>
  );
};

export default Coincidence;
