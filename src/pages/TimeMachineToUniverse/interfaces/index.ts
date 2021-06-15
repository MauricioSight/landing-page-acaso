import { AnimationState } from '@components/AnimatedText/interfaces';

const pageState = {
  'time-machine-intro': 'time-machine-intro',
  'time-machine-future': 'time-machine-future',
  'time-machine-needs': 'time-machine-needs',
  'time-machine-universe-intro': 'universe',
  'universe-galaxy': 'universe-galaxy',
};

export type PageState = keyof typeof pageState;

export interface TimeMachineToUniverseProps {
  animationState: AnimationState;
  pageState: PageState;
  handleChangePage: (page: number) => void;
}
