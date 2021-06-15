/* eslint-disable no-case-declarations */
import {
  PageAnimationEnum,
  PagesControllerReducer,
  PageEnum,
} from '../interfaces';

const pageOrder: PageAnimationEnum[] = [
  'home-potency',
  'time-machine-universe',
  'coincidence-see-more',
];

const getPage = (anmitedPage: PageAnimationEnum, current: PageEnum) => {
  if (anmitedPage.includes('home')) return 'home';
  if (anmitedPage.includes('time-machine')) return 'time-machine';
  if (anmitedPage.includes('coincidence')) return 'coincidence';
  return current;
};

export const pagesControllerReducer: PagesControllerReducer = (
  state,
  action,
) => {
  switch (action.type) {
    case 'set-page':
      return { ...state, currentPage: action.page };
    case 'change-animation-page':
      const animatedPage =
        action.page === 'next'
          ? pageOrder[pageOrder.indexOf(state.currentAnimationPage) + 1]
          : pageOrder[pageOrder.indexOf(state.currentAnimationPage) - 1];
      if (!animatedPage) return state;

      return {
        ...state,
        currentPage: getPage(animatedPage, state.currentPage),
        currentAnimationPage: animatedPage,
      };
    default:
      return state;
  }
};
