import HomeAnimation from '@assets/ACASO pt01.json';

export const HOME_PAGE_BREAK_POINTS = [
  [0, 425],
  [425, 830],
  [830, 1370],
  [1370, 2350],
];

export const defaultOptions = {
  autoplay: true,
  loop: false,
  assetsPath: 'assets/images/',
  animationData: HomeAnimation,
  initialSegment: HOME_PAGE_BREAK_POINTS[0],
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
