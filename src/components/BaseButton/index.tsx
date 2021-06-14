import React, { ButtonHTMLAttributes } from 'react';

import { BaseButtonStyle } from './BaseButton.styles';

const BaseButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return <BaseButtonStyle {...rest}>{children}</BaseButtonStyle>;
};

export default BaseButton;
