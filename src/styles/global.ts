import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p {
    margin: 0;
  }

  :root {
    body > #root {
      height: 100vh;
      display: flex;
      background-color: #ffffff;
      text-rendering: optimizedlegibility;
      -webkit-font-smoothing: antialiased;
      font-family: 'Raleway', sans-serif;
      line-height: 1.6;
    }
  }
`;

export default Global;
