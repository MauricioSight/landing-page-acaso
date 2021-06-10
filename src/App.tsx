import React from 'react';
import { Button } from 'antd';

import GlobalStyle from './styles/global';
import 'antd/dist/antd.css';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <div>
      <h1>Landing Page aca.su</h1>
      <Button type="primary">Button</Button>
    </div>
  </>
);

export default App;
