import { AnimationState } from '@components/AnimatedText/interfaces';
import {
  PageHandleData,
  PageHandleReducer,
  PageHandleAction,
  PageHandleProps,
} from '@/components/PageTextAnimated/common/interfaces';

const pageState = {
  home: 'home',
  potency: 'potency',
};

export type PageState = keyof typeof pageState;

export type HomeToPotencyPageData = PageHandleData<AnimationState, PageState>;
export type HomeToPotencyPageAction = PageHandleAction<
  AnimationState,
  PageState
>;
export type HomeToPotencyPageReducer = PageHandleReducer<
  AnimationState,
  PageState
>;
export type HomeToPotencyProps = PageHandleProps<AnimationState, PageState>;
