import styled from 'styled-components';

import { TextProps } from './interfaces';

export const AnimatedContainer = styled.div<TextProps>`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 8em;

  & > * {
    ${({ animationState }) => {
      switch (animationState) {
        case 'show-up':
          return 'transform: translatey(1em); opacity: 0;';
        case 'show-down':
          return 'transform: translatey(-100vh); opacity: 1;';
        case 'hide-up-vh':
          return 'transform: translatey(0em); opacity: 1;';
        case 'hide-up':
          return 'transform: translatey(0em); opacity: 1;';
        case 'hide-down':
          return 'transform: translatey(0em); opacity: 1;';
        default:
          return 'transform: translatey(1em); opacity: 0;';
      }
    }}
  }

  @keyframes show-up {
    from {
      transform: translatey(0.7em);
      opacity: 0;
    }
    to {
      transform: translatey(0em);
      opacity: 1;
    }
  }

  @keyframes show-down {
    from {
      transform: translatey(-100vh);
    }
    to {
      transform: translatey(0);
    }
  }

  @keyframes hide-up-vh {
    from {
      transform: translatey(0em);
    }
    to {
      transform: translatey(-100vh);
    }
  }

  @keyframes hide-up {
    from {
      transform: translatey(0em);
      opacity: 1;
    }
    to {
      transform: translatey(-0.7em);
      opacity: 0;
    }
  }

  @keyframes hide-down {
    from {
      transform: translatey(0em);
      opacity: 1;
    }
    to {
      transform: translatey(0.7em);
      opacity: 0;
    }
  }
`;

export const AnimatedTextH1 = styled.p<TextProps>`
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  text-shadow: 0px 0px 6px #ffffff;
  font-size: 3.5em;

  ${({ animationState, animationConfig }) => {
    switch (animationState) {
      case 'show-up':
        return `animation: show-up
          ${animationConfig?.showDuration || '1000ms'}
          ${animationConfig?.showDelay || '600ms'}
          ease forwards;`;
      case 'show-down':
        return `animation: show-up
          ${animationConfig?.showDuration || '1000ms'}
          ${animationConfig?.showDelay || '600ms'}
          ease forwards;`;
      case 'hide-up-vh':
        return `animation: hide-up-vh
          ${animationConfig?.hideDuration || '4000ms'}
          ${animationConfig?.hideDelay || '2100ms'}
          ease-in-out forwards;`;
      case 'hide-up':
        return `animation: hide-up
          ${animationConfig?.hideDuration || '1000ms'}
          ${animationConfig?.hideDelay || '1050ms'}
          ease-in-out forwards;`;
      case 'hide-down':
        return `animation: hide-down
          ${animationConfig?.hideDuration || '1000ms'}
          ${animationConfig?.hideDelay || '1050ms'}
          ease-in-out forwards;`;
      default:
        return `animation: show-up
          ${animationConfig?.showDuration || '1000ms'}
          ${animationConfig?.showDelay || '600ms'}
          ease forwards;`;
    }
  }}

  margin-bottom: 0.7em;
`;

export const AnimatedTextH2 = styled.p<TextProps>`
  text-align: center;
  color: #ffffff;
  font-size: 2em;

  ${({ animationState, animationConfig }) => {
    switch (animationState) {
      case 'show-up':
        return `animation: show-up
          ${animationConfig?.showDuration || '1000ms'}
          ${animationConfig?.showDelay || '100ms'}
          ease forwards;`;
      case 'show-down':
        return `animation: show-up
        ${animationConfig?.showDuration || '1000ms'}
        ${animationConfig?.showDelay || '100ms'}
        ease forwards;`;
      case 'hide-up-vh':
        return `animation: hide-up-vh
          ${animationConfig?.hideDuration || '4000ms'}
          ${animationConfig?.hideDelay || '2000ms'}
          ease-in-out forwards;`;
      case 'hide-up':
        return `animation: hide-up
          ${animationConfig?.hideDuration || '1000ms'}
          ${animationConfig?.hideDelay || '1150ms'}
          ease-in-out forwards;`;
      case 'hide-down':
        return `animation: hide-down
          ${animationConfig?.hideDuration || '1000ms'}
          ${animationConfig?.hideDelay || '1150ms'}
          ease-in-out forwards;`;
      default:
        return `animation: show-up
          ${animationConfig?.showDuration || '1000ms'}
          ${animationConfig?.showDelay || '100ms'}
          ease forwards;`;
    }
  }}
`;

export const AnimatedTextH3 = styled.p<TextProps>`
  text-align: center;
  color: #ffffff;
  font-size: 0.8em;

  ${({ animationState, animationConfig }) => {
    switch (animationState) {
      case 'show-up':
        return `animation: show-up
          ${animationConfig?.showDuration || '1000ms'}
          ${animationConfig?.showDelay || '1100ms'}
          ease forwards;`;
      case 'show-down':
        return `animation: show-up
          ${animationConfig?.showDuration || '1000ms'}
          ${animationConfig?.showDelay || '1100ms'}
          ease forwards;`;
      case 'hide-up-vh':
        return `animation: hide-up-vh
          ${animationConfig?.hideDuration || '4000ms'}
          ${animationConfig?.hideDelay || '2150ms'}
          ease-in-out forwards;`;
      case 'hide-up':
        return `animation: hide-up
          ${animationConfig?.hideDuration || '1000ms'}
          ${animationConfig?.hideDelay || '1000ms'}
          ease-in-out forwards;`;
      case 'hide-down':
        return `animation: hide-down
          ${animationConfig?.hideDuration || '1000ms'}
          ${animationConfig?.hideDelay || '1000ms'}
          ease-in-out forwards;`;
      default:
        return `animation: show-up
          ${animationConfig?.showDuration || '1000ms'}
          ${animationConfig?.showDelay || '1100ms'}
          ease forwards;`;
    }
  }}
`;

export const AnimatedTextH4 = styled.p<TextProps>`
  text-align: center;
  color: #ffffff;
  font-size: 0.8em;

  ${({ animationState, animationConfig }) => {
    switch (animationState) {
      case 'show-up':
        return `animation: show-up
          ${animationConfig?.showDuration || '1000ms'}
          ${animationConfig?.showDelay || '1600ms'}
          ease forwards;`;
      case 'show-down':
        return `animation: show-up
          ${animationConfig?.showDuration || '1000ms'}
          ${animationConfig?.showDelay || '1600ms'}
          ease forwards;`;
      case 'hide-up-vh':
        return `animation: hide-up-vh
          ${animationConfig?.hideDuration || '4000ms'}
          ${animationConfig?.hideDelay || '2150ms'}
          ease-in-out forwards;`;
      case 'hide-up':
        return `animation: hide-up
          ${animationConfig?.hideDuration || '1000ms'}
          ${animationConfig?.hideDelay || '1000ms'}
          ease-in-out forwards;`;
      case 'hide-down':
        return `animation: hide-down
          ${animationConfig?.hideDuration || '1000ms'}
          ${animationConfig?.hideDelay || '1000ms'}
          ease-in-out forwards;`;
      default:
        return `animation: show-up
          ${animationConfig?.showDuration || '1000ms'}
          ${animationConfig?.showDelay || '1600ms'}
          ease forwards;`;
    }
  }}
`;
