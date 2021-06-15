import { AnimationState } from '@components/AnimatedText/interfaces';
import {
  PageHandleData,
  PageHandleReducer,
  PageHandleAction,
  PageHandleProps,
} from '@/components/PageTextAnimated/common/interfaces';

const pageState = {
  'time-machine-intro': 'time-machine-intro',
  'time-machine-future': 'time-machine-future',
  'time-machine-needs': 'time-machine-needs',
  'time-machine-universe-intro': 'universe',
  'universe-galaxy': 'universe-galaxy',
};

export type PageState = keyof typeof pageState;

export type TimeMachinePageData = PageHandleData<AnimationState, PageState>;
export type TimeMachinePageAction = PageHandleAction<AnimationState, PageState>;
export type TimeMachinePageReducer = PageHandleReducer<
  AnimationState,
  PageState
>;
export type TimeMachineToUniverseProps = PageHandleProps<
  AnimationState,
  PageState
>;
