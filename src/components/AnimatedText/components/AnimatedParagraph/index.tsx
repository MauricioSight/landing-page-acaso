import React from 'react';

import { AnimatedParagraphProps } from './interfaces';
import {
  AnimatedContainer,
  AnimatedTextH1,
  AnimatedTextH3,
} from '../../AnimatedText.styles';

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
  title,
  subtitle1,
  subtitle2,
  animationType,
  showDelay = 600,
  showDuration = 1000,
  hideDuration = 1100,
  hideDelay = 200,
}) => {
  const hasBreak: boolean = title?.indexOf('/') !== -1;
  return (
    <AnimatedContainer animationState={animationType}>
      <>
        {title && (
          <AnimatedTextH1
            animationState={animationType}
            animationConfig={{
              showDelay: `${showDelay}ms`,
              hideDelay: `${hideDelay}ms`,
              hideDuration: `${hideDuration}ms`,
              showDuration: `${showDuration}ms`,
            }}
            style={{ textShadow: 'none', fontSize: '3em' }}
          >
            {hasBreak ? (
              <>
                {title.split('/')[0]}
                <br />
                {title.split('/')[1]}
              </>
            ) : (
              title
            )}
          </AnimatedTextH1>
        )}
        {subtitle1 && (
          <AnimatedTextH3
            animationState={animationType}
            animationConfig={{
              showDelay: `${showDelay + 500}ms`,
              hideDelay: `${hideDelay}ms`,
              hideDuration: `${hideDuration}ms`,
              showDuration: `${showDuration}ms`,
            }}
          >
            {subtitle1}
          </AnimatedTextH3>
        )}
        {subtitle2 && (
          <AnimatedTextH3
            animationState={animationType}
            animationConfig={{
              showDelay: `${showDelay + 1000}ms`,
              hideDelay: `${hideDelay}ms`,
              hideDuration: `${hideDuration}ms`,
              showDuration: `${showDuration}ms`,
            }}
          >
            {subtitle2}
          </AnimatedTextH3>
        )}
      </>
    </AnimatedContainer>
  );
};

export default AnimatedParagraph;
