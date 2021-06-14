import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import 'antd/dist/antd.css';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
);

export default App;
