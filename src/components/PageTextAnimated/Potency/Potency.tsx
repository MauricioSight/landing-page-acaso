import React from 'react';

import AnimatedParagraph from '@/components/AnimatedText/components/AnimatedParagraph';
import { PotencyPageMainProps } from './interfaces';

const Portency: React.FC<PotencyPageMainProps> = ({ animationState }) => {
  return (
    <AnimatedParagraph
      animationType={animationState}
      title="Não importa onde, / Importa com quem"
      subtitle1="Independente do lugar, sua potência máxima é atingida"
      subtitle2="Quando você está com pessoas certas."
      showDelay={2500}
      hideDelay={5500}
      hideDuration={1150}
    />
  );
};

export default Portency;
