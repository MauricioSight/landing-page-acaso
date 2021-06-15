import React from 'react';
import { AnimationState } from '../interfaces';
import {
  DesciptionContainer,
  DesciptionH2,
  DesciptionH3,
} from '../AnimatedText.styles';

interface AnimatedParagraphProps {
  animationType: AnimationState;
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  showDelay?: number;
  showDuration?: number;
  hideDelay?: number;
  hideDuration?: number;
}

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
    <DesciptionContainer animationState={animationType}>
      <>
        {title && (
          <DesciptionH2
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
          </DesciptionH2>
        )}
        {subtitle1 && (
          <DesciptionH3
            animationState={animationType}
            animationConfig={{
              showDelay: `${showDelay + 500}ms`,
              hideDelay: `${hideDelay}ms`,
              hideDuration: `${hideDuration}ms`,
              showDuration: `${showDuration}ms`,
            }}
          >
            {subtitle1}
          </DesciptionH3>
        )}
        {subtitle2 && (
          <DesciptionH3
            animationState={animationType}
            animationConfig={{
              showDelay: `${showDelay + 1000}ms`,
              hideDelay: `${hideDelay}ms`,
              hideDuration: `${hideDuration}ms`,
              showDuration: `${showDuration}ms`,
            }}
          >
            {subtitle2}
          </DesciptionH3>
        )}
      </>
    </DesciptionContainer>
  );
};

export default AnimatedParagraph;
