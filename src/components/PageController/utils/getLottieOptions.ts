/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

interface GetLottieOptions {
  animationJson: any;
  breakPoints: number[][];
  initialPage?: number;
  defaultLottieOptions?: any;
}

const getLottieOptions = ({
  animationJson,
  breakPoints,
  initialPage = 0,
  defaultLottieOptions,
}: GetLottieOptions): any => {
  return {
    autoplay: true,
    loop: false,
    assetsPath: 'assets/images/',
    animationData: animationJson,
    initialSegment: breakPoints[initialPage],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    ...defaultLottieOptions,
  };
};

export default getLottieOptions;
