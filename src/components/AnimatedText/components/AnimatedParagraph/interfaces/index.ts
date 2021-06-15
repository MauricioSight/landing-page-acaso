import { AnimationState } from '../../../interfaces';

export interface AnimatedParagraphProps {
  animationType: AnimationState;
  title?: string;
  subtitle1?: string;
  subtitle2?: string;
  showDelay?: number;
  showDuration?: number;
  hideDelay?: number;
  hideDuration?: number;
}
