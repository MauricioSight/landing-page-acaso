import { AnimationState } from '@components/AnimatedText/interfaces';
import {
  PageHandleData,
  PageHandleReducer,
  PageHandleAction,
  PageHandleProps,
} from '@pages/screens/common/interfaces';

const pageState = {
  'coincidence-intro': 'coincidence',
  'coincidence-conection': 'time-machine-future',
  'coincidence-navegate': 'time-machine-future',
  'see-more': 'time-machine-needs',
};

export type PageState = keyof typeof pageState;

export type CoincidencePageData = PageHandleData<AnimationState, PageState>;
export type CoincidencePageAction = PageHandleAction<AnimationState, PageState>;
export type CoincidencePageReducer = PageHandleReducer<
  AnimationState,
  PageState
>;
export type CoincidenceToSeeMoreProps = PageHandleProps<
  AnimationState,
  PageState
>;
