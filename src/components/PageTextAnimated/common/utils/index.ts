import {
  PageHandleAction,
  PageHandleData,
} from '@/components/PageTextAnimated/common/interfaces';

export function pageHandleReducer<T, J>(
  state: PageHandleData<T, J>,
  action: PageHandleAction<T, J>,
): PageHandleData<T, J> {
  switch (action.type) {
    case 'update-page':
      return {
        ...state,
        pageState: action.page,
        history: [...state.history, action.page],
      };
    case 'update-animation':
      return {
        ...state,
        animationState: action.animation,
      };
    case 'update-page-animation':
      return {
        ...state,
        pageState: action.page,
        history: [...state.history, action.page],
        animationState: action.animation,
      };
    default:
      return state;
  }
}
