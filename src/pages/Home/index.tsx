/* eslint-disable no-unused-expressions */
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from 'react';
import throttle from 'lodash.throttle';

import { defaultOptions, HOME_PAGE_BREAK_POINTS } from './constants';
import { AnimationState } from './styles';
import Main from './Home';

const Home: React.FC = () => {
  const lottieRef = useRef<any>(null);
  const [currentPage, setcurrentPage] = useState(0);
  const [animationState, setAnimationState] =
    useState<AnimationState>('first-show');

  const playSegment = useCallback(
    (direction: 1 | -1) => {
      if (!lottieRef?.current.anim) return;
      const getBrakPoits = () => {
        if (direction === 1) {
          if (currentPage + 1 < HOME_PAGE_BREAK_POINTS.length)
            return {
              current: HOME_PAGE_BREAK_POINTS[currentPage + 1][0],
              target: HOME_PAGE_BREAK_POINTS[currentPage + 1][1],
            };
        }
        if (currentPage > 0)
          return {
            current: HOME_PAGE_BREAK_POINTS[currentPage][1],
            target: HOME_PAGE_BREAK_POINTS[currentPage][0],
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
        console.log(currentFrame + firstFrame, current, target, currentPage);
        anim.playSegments([current, target], false);
        setcurrentPage(currentPage + direction);
        if (direction === 1) {
          currentPage === 0 && setAnimationState('hide');
        } else {
          currentPage === 1 && setAnimationState('back-show');
        }
      }
    },
    [currentPage],
  );

  const scrollHandler = useCallback(
    (event: WheelEvent) => {
      if (event.deltaY > 0) {
        playSegment(1);
      } else {
        playSegment(-1);
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
      animationState={animationState}
      lottieOptions={defaultOptions}
    />
  );
};

export default Home;
