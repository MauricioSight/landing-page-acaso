import React from 'react';

export interface PageControllerProps {
  breakPoints: number[][];
  animationJson: any;
  defaultLottieOptions?: any;
  initialPage?: number;
  onChangePage?: (page: number) => void;
}

export interface PageControllerMainProps {
  lottieRef: React.LegacyRef<any>;
  lottieOptions: any;
}
