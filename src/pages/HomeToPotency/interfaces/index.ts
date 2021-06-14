import { AnimationState } from '../HomeToPotency.styles';

const pageStatus = {
  home: 'home',
  potency: 'potency',
};

export type PageStatus = keyof typeof pageStatus;

export interface HomeToPotencyProps {
  animationState: AnimationState;
  pageStatus: PageStatus;
  handleChangePage: (page: number) => void;
}
