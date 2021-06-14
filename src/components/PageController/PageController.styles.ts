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
