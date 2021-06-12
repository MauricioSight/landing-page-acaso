import styled from 'styled-components';

import { NavItemProps } from './interfaces';

export const Container = styled.div<NavItemProps>`
  --margin-left-circle: -1.5em;
  --translate-right-text: 1.5em;

  outline: none;
  text-decoration: none;
  list-style-type: none;
  cursor: pointer;

  color: #f2f2f2;
  font-size: 0.78em;

  display: block;
  position: relative;

  transition: transform 350ms ease-in-out, opacity 200ms linear;

  ::before {
    content: '';

    position: absolute;
    top: 30%;
    left: var(--margin-left-circle);
    padding: 0.3em 0.3em 0 0;

    box-shadow: 0px 0px 0.18em #e73e77;
    border: 0.18em solid #e93f78;
    border-radius: 50%;

    margin-right: 0.3em;

    transition: transform 350ms ease-in-out;
    transform: scale(0);
  }

  :hover,
  :focus {
    ::before {
      transform: scale(1);
    }
    transform: translateX(var(--translate-right-text));
  }

  :active {
    opacity: 0.7;
  }

  ${({ isShowing }) =>
    isShowing &&
    '::before { transform: scale(1); } transform: translateX(1.5em);'}

  ${({ translateTextOff }) =>
    translateTextOff && 'transform: translateX(var(--translate-right-text));'}
`;
