/* eslint-disable no-unused-expressions */
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import throttle from 'lodash.throttle';

import { usePageController } from '@/contexts/PagesController';
import getLottieOptions from './utils/getLottieOptions';
import { PageControllerProps } from './interfaces';
import Main from './PageController';

const PageController: React.FC<PageControllerProps> = ({
  animationJson,
  breakPoints,
  defaultLottieOptions,
  initialPage,
  onChangePage,
  onNextPage,
  onPrevPage,
  children,
}) => {
  const lottieRef = useRef<any>(null);
  const [currentPage, setcurrentPage] = useState(initialPage || 0);
  const { changeAnimationPage } = usePageController();

  const playSegment = useCallback(
    (direction: 1 | -1) => {
      if (!lottieRef?.current.anim) return;
      const getBrakPoits = () => {
        if (direction === 1) {
          if (currentPage + 1 >= breakPoints.length)
            return { current: null, target: null };
          return {
            current: breakPoints[currentPage + 1][0],
            target: breakPoints[currentPage + 1][1],
          };
        }
        if (currentPage > 0)
          return {
            current: breakPoints[currentPage][1],
            target: breakPoints[currentPage][0],
          };
        return { current: null, target: null };
      };

      const { current, target } = getBrakPoits();
      if (!current) return;

      const {
        anim,
        anim: { currentFrame, firstFrame, segments },
      } = lottieRef?.current;
      if (
        currentFrame + firstFrame > current - 2 &&
        !segments.find((array: number[]) => array[0] === current)
      ) {
        anim.playSegments([current, target], false);
        setcurrentPage(currentPage + direction);
        onChangePage?.(currentPage + direction);
      }
    },
    [currentPage, breakPoints, onChangePage],
  );

  const onCompletedAnimation = () => {
    const {
      anim: { currentFrame, firstFrame },
    } = lottieRef?.current;

    if (
      currentFrame + firstFrame + 1 ===
      breakPoints[breakPoints.length - 1][1]
    ) {
      onNextPage?.();
      changeAnimationPage('next');
    }
    if (currentFrame + firstFrame < 5) {
      onPrevPage?.();
      changeAnimationPage('prev');
    }
  };

  const scrollHandler = useCallback(
    (event: WheelEvent) => {
      if (event.deltaY > 0) {
        playSegment(1);
      } else {
        // playSegment(-1); TO-DO
      }
    },
    [playSegment],
  );

  const throttleScrollHandler = useMemo(
    () => throttle(scrollHandler, 2000, { trailing: false, leading: true }),
    [scrollHandler],
  );

  useEffect(() => {
    document.addEventListener('wheel', throttleScrollHandler);

    return () => document.removeEventListener('wheel', throttleScrollHandler);
  }, [throttleScrollHandler]);

  return (
    <Main
      lottieRef={lottieRef}
      onCompletedAnimation={onCompletedAnimation}
      lottieOptions={getLottieOptions({
        animationJson,
        initialPage,
        breakPoints,
        defaultLottieOptions,
      })}
    >
      {children}
    </Main>
  );
};

export default PageController;
