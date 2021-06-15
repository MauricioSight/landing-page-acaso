import React, {
  createContext,
  useContext,
  useCallback,
  useReducer,
} from 'react';

import {
  PagesControllerContextData,
  PagesControllerData,
  PageEnum,
  PagesControllerProps,
} from './interfaces';
import { pagesControllerReducer } from './utils';

const PageControllerContext = createContext<PagesControllerContextData>(
  {} as PagesControllerContextData,
);

export const PagesControllerProvider: React.FC<PagesControllerProps> = ({
  initialPage,
  children,
}) => {
  const [state, dispatch] = useReducer(pagesControllerReducer, {
    currentAnimationPage: initialPage,
  } as PagesControllerData);

  const setPage = useCallback((page: PageEnum) => {
    dispatch({ type: 'set-page', page });
  }, []);

  const changeAnimationPage = useCallback((page: 'next' | 'prev') => {
    dispatch({ type: 'change-animation-page', page });
  }, []);

  return (
    <PageControllerContext.Provider
      value={{ data: state, setPage, changeAnimationPage }}
    >
      {children}
    </PageControllerContext.Provider>
  );
};

export function usePageController(): PagesControllerContextData {
  const context = useContext(PageControllerContext);

  if (!context) {
    throw new Error(
      'usePageController must be used whithin an PagesController',
    );
  }

  return context;
}
