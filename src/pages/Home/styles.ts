import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: relative;
  overflow: hidden;
`;

export const SecondLayer = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
`;

// Text

const animationStateEnum = {
  'first-show': 'first-show',
  hide: 'hide',
  'back-show': 'back-show',
};

export type AnimationState = keyof typeof animationStateEnum;

interface TextProps {
  animationState?: AnimationState;
}

export const DesciptionContainer = styled.div<TextProps>`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 8em;

  & > * {
    ${({ animationState }) => {
      switch (animationState) {
        case 'first-show':
          return 'transform: translatey(1em); opacity: 0;';
        case 'hide':
          return 'transform: translatey(0em); opacity: 1;';
        case 'back-show':
          return 'transform: translatey(-100vh); opacity: 1;';
        default:
          return 'transform: translatey(1em); opacity: 0;';
      }
    }}
  }

  @keyframes show-text {
    from {
      transform: translatey(0.7em);
      opacity: 0;
    }
    to {
      transform: translatey(0em);
      opacity: 1;
    }
  }

  @keyframes hide-text {
    from {
      transform: translatey(0em);
    }
    to {
      transform: translatey(-100vh);
    }
  }

  @keyframes return-text {
    from {
      transform: translatey(-100vh);
    }
    to {
      transform: translatey(0em);
    }
  }
`;

export const DesciptionH1 = styled.div<TextProps>`
  text-align: center;
  color: #ffffff;
  font-size: 2em;

  ${({ animationState }) => {
    switch (animationState) {
      case 'first-show':
        return 'animation: show-text 1000ms 100ms ease forwards;';
      case 'hide':
        return 'animation: hide-text 4000ms 2000ms ease-in-out forwards;';
      case 'back-show':
        return 'animation: return-text 4000ms 1150ms ease-in-out forwards;';
      default:
        return 'animation: show-text 1000ms 100ms ease forwards;';
    }
  }}
`;

export const DesciptionH2 = styled.div<TextProps>`
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 0px 0px 6px #ffffff;
  font-size: 3.5em;

  ${({ animationState }) => {
    switch (animationState) {
      case 'first-show':
        return 'animation: show-text 1000ms 600ms ease forwards;';
      case 'hide':
        return 'animation: hide-text 4000ms 2100ms ease-in-out forwards;';
      case 'back-show':
        return 'animation: return-text 4000ms 1050ms ease-in-out forwards;';
      default:
        return 'animation: show-text 1000ms 600ms ease forwards;';
    }
  }}

  margin-bottom: 0.7em;
`;

export const DesciptionH3 = styled.div<TextProps>`
  text-align: center;
  color: #ffffff;
  font-size: 0.8em;

  ${({ animationState }) => {
    switch (animationState) {
      case 'first-show':
        return 'animation: show-text 1000ms 1100ms ease forwards;';
      case 'hide':
        return 'animation: hide-text 4000ms 2150ms ease-in-out forwards;';
      case 'back-show':
        return 'animation: return-text 4000ms 1000ms ease-in-out forwards;';
      default:
        return 'animation: show-text 1000ms 1100ms ease forwards;';
    }
  }}
`;

export const DesciptionH4 = styled.div<TextProps>`
  text-align: center;
  color: #ffffff;
  font-size: 0.8em;

  ${({ animationState }) => {
    switch (animationState) {
      case 'first-show':
        return 'animation: show-text 1000ms 1600ms ease forwards;';
      case 'hide':
        return 'animation: hide-text 4000ms 2150ms ease-in-out forwards;';
      case 'back-show':
        return 'animation: return-text 4000ms 1000ms ease-in-out forwards;';
      default:
        return 'animation: show-text 1000ms 1600ms ease forwards;';
    }
  }}
`;
