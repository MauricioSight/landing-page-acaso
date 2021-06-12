import styled from 'styled-components';

export const BaseButtonStyle = styled.button`
  outline: none;
  cursor: pointer;

  border: 0;
  padding: 0.3em 1em;
  font-size: 0.78em;
  font-weight: 600;

  transition: transform 350ms ease-in-out, opacity 500ms ease-in-out;
  transform: scale(0.9);
  opacity: 1;

  :hover,
  :focus {
    transform: scale(1);
  }
`;
