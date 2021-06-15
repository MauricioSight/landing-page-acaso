import { PageState } from '@/pages/TimeMachineToUniverse/interfaces';
import { AnimationState } from '@components/AnimatedText/interfaces';

export type { PageState };

export interface TimeMachinePageProps {
  animationState: AnimationState;
  pageState: PageState;
}

export interface TimeMachinePageMainProps {
  animationState: AnimationState;
  history: PageState[];
}
