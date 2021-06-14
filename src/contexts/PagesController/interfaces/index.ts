const pageAnimationEnum = {
  home_potency: 'home-potency',
  'time-machine_universe': 'time-machine_universe',
  competition: 'competition',
  coincidence: 'coincidence',
  more: 'more',
};
export type PageAnimationEnum = keyof typeof pageAnimationEnum;

const pageEnum = {
  home: 'home',
  potency: 'potency',
  'time-machine': 'time-machine',
  competition: 'competition',
  coincidence: 'coincidence',
  more: 'more',
};
export type PageEnum = keyof typeof pageEnum;

export interface PagesControllerProps {
  initialPage: PageAnimationEnum;
}

export interface PagesControllerContextData {
  data: PagesControllerData;
  setPage: (page: PageEnum) => void;
  changeAnimationPage: (event: 'next' | 'prev') => void;
}

export interface PagesControllerData {
  currentAnimationPage: PageAnimationEnum;
  currentPage: PageEnum;
}

export type ControllerAction =
  | { type: 'set-page'; page: PageEnum }
  | { type: 'change-animation-page'; page: 'next' | 'prev' };

export type PagesControllerReducer = (
  prevState: PagesControllerData,
  action: ControllerAction,
) => PagesControllerData;
