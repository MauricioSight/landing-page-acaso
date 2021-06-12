import React from 'react';

import AppLayout from './pages/AppLayout';
import GlobalStyle from './styles/global';
import 'antd/dist/antd.css';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppLayout />
  </>
);

export default App;
