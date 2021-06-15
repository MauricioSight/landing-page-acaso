import { PageState } from '@/pages/TimeMachineToUniverse/interfaces';
import { AnimationState } from '@components/AnimatedText/interfaces';

export type { PageState };

export interface UniversePageProps {
  animationState: AnimationState;
  pageState: PageState;
  history: PageState[];
}

export type UniversePageMainProps = UniversePageProps;
