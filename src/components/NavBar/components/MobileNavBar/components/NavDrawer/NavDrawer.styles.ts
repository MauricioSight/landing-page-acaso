import styled from 'styled-components';
import { Drawer as DrawerAntd } from 'antd';

export const Drawer = styled(DrawerAntd)`
  .ant-drawer-content-wrapper {
    backdrop-filter: blur(10px);
  }

  .ant-drawer-content {
    background: rgba(30, 31, 47, 0.3);
  }

  .ant-drawer-body {
    padding: 2em 1.5em;
    overflow: hidden;

    display: flex;
    flex-direction: column;
  }
`;
