import { PageEnum, pageEnum } from '@/contexts/PagesController/interfaces';

export { pageEnum };

export type { PageEnum };

export interface NavBarProps {
  currentPage: PageEnum;
  onNavegate: (page: PageEnum) => void;
}
