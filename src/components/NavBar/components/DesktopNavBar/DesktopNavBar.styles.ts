import styled from 'styled-components';

import { BaseButtonStyle } from '@/components/BaseButton/BaseButton.styles';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 1em 10%;

  background: rgba(30, 31, 47, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

// Nav

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 5em;
  }
`;

export const NavLogo = styled.div`
  cursor: pointer;

  color: #f2f2f2;
  font-size: 1.2em;
`;

// More information

export const ButtonsContainer = styled.div`
  display: flex;

  & > * + * {
    margin-left: 2em;
  }
`;

// Buttons

export const WhiteButton = styled(BaseButtonStyle)`
  background-color: #ffffff;
  border-radius: 1.18em;

  color: #1b0068;
`;

export const TransparentButton = styled(BaseButtonStyle)`
  background-color: transparent;
  color: #f2f2f2;
`;
