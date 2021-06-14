import React from 'react';

export interface BasePageControllProps {
  breakPoints: number[][];
  animationJson: any;
  defaultLottieOptions?: any;
  initialPage?: number;
  onChangePage?: (page: number) => void;
}

export interface BasePageMainProps {
  lottieRef: React.LegacyRef<any>;
  lottieOptions: any;
}
