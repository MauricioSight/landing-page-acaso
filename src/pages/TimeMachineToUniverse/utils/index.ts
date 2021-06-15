import { TimeMachinePageReducer } from '../interfaces';

export const pageHandleReducer: TimeMachinePageReducer = (state, action) => {
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
};
