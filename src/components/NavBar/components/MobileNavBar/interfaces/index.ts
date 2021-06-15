import { NavBarProps } from '../../../interfaces';

export type { NavBarProps };

export interface MobileNavBarMainProps extends NavBarProps {
  visible: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
}
