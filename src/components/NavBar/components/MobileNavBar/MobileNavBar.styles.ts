import styled from 'styled-components';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { BaseButtonStyle } from '@/components/BaseButton/BaseButton.styles';

export const Container = styled.div`
  width: 100%;
  padding: 1.5em 5%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

// Nav

export const LogoNav = styled.div`
  cursor: pointer;

  color: #f2f2f2;
  font-size: 1.2em;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 3em;
  }
`;

// Menu

export const DrawerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  margin-bottom: 3em;
`;

export const CloseIcon = styled(CloseOutlined)`
  font-size: 1em;
  color: #ffffff;

  cursor: pointer;
`;

export const Menu = styled(MenuOutlined)`
  font-size: 1.4em;
  color: #ffffff;
`;

export const ManuContainer = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 0.8em;
  }
`;

export const DrawerFooter = styled.div`
  bottom: 0;
  margin-top: auto;
`;

// Button

export const WhiteButton = styled(BaseButtonStyle)`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 1.18em;

  color: #1b0068;
`;
