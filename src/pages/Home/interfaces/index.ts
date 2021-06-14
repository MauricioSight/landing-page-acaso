import { AnimationState } from '../Home.styles';

const pageStatus = {
  'first-text': 'first-text',
  'second-text': 'second-text',
};

export type PageStatus = keyof typeof pageStatus;

export interface HomePageProps {
  animationState: AnimationState;
  pageStatus: PageStatus;
  handleChangePage: (page: number) => void;
}
