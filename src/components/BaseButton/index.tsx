import React from 'react';

import { BaseButtonStyle } from './BaseButton.styles';

const BaseButton: React.FC = ({ children }) => {
  return <BaseButtonStyle>{children}</BaseButtonStyle>;
};

export default BaseButton;
