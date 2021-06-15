export interface PageHandleProps<AnimationState, PageState> {
  state: PageHandleData<AnimationState, PageState>;
  handleChangePage: (page: number) => void;
}

export interface PageHandleData<AnimationState, PageState> {
  animationState: AnimationState;
  pageState: PageState;
  history: PageState[];
}

export type PageHandleAction<AnimationState, PageState> =
  | { type: 'update-page'; page: PageState }
  | { type: 'update-animation'; animation: AnimationState }
  | {
      type: 'update-page-animation';
      page: PageState;
      animation: AnimationState;
    };

export type PageHandleReducer<AnimationState, PageState> = (
  prevState: PageHandleData<AnimationState, PageState>,
  action: PageHandleAction<AnimationState, PageState>,
) => PageHandleData<AnimationState, PageState>;
