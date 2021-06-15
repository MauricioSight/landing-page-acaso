const pageAnimationEnum = {
  'home-potency': 'home-potency',
  'time-machine-universe': 'time-machine-universe',
  'coincidence-see-more': 'coincidence-see-more',
};
export type PageAnimationEnum = keyof typeof pageAnimationEnum;

export const pageEnum = {
  home: 'ACASO',
  potency: 'Sua potência',
  'time-machine': 'Máquina do tempo',
  universe: 'Universo',
  coincidence: 'Concorrência',
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
