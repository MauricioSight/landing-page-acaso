import styled from 'styled-components';

import { BaseButtonStyle } from '@/components/BaseButton/BaseButton.styles';

export const AnimatedContainer = styled.div`
  transform: translatey(1em);
  opacity: 0;

  animation: show-up 1000ms 2150ms ease forwards;
`;

export const Button = styled(BaseButtonStyle)`
  padding: 0.3em 4em;
  border: 1px solid #fff;
  border-radius: 1.18em;

  background-color: transparent;
  color: #f2f2f2;
`;
