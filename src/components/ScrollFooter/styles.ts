import styled from 'styled-components';
import { CaretDownOutlined } from '@ant-design/icons';

interface HiddeScroll {
  isHiddenScroll?: boolean;
}

export const Container = styled.div`
  z-index: 20;
  position: absolute;
  overflow: hidden;

  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes scroll-down {
    0% {
      transform: translatey(0em);
    }
    10% {
      transform: translatey(0.3em);
    }
    25% {
      transform: translatey(0em);
    }
    100% {
      transform: translatey(0em);
    }
  }

  @keyframes scroll-down-hidde {
    0% {
    }
    100% {
      transform: translatey(100vh);
    }
  }
`;

export const AnimatedContainer = styled.div<HiddeScroll>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 0.8em;

  animation: scroll-down 10000ms infinite;
  ${({ isHiddenScroll }) =>
    isHiddenScroll && 'animation: scroll-down-hidde 5s forwards;'}

  & > * + * {
    margin-left: 0.3em;
  }
`;

export const Title = styled.p`
  font-size: 0.7em;
  font-weight: 600;
  color: #fff;
`;

export const Icon = styled(CaretDownOutlined)`
  font-size: 0.8em;
  color: #fff;
`;
