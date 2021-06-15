const animationStateEnum = {
  'show-up': 'show-up',
  'show-down': 'show-down',
  'hide-up-vh': 'hide-up-vh',
  'hide-up': 'hide-up',
  'hide-down': 'hide-down',
};

export type AnimationState = keyof typeof animationStateEnum;

export interface AnimationConfig {
  showDelay?: string;
  showDuration?: string;
  hideDelay?: string;
  hideDuration?: string;
}

export interface TextProps {
  animationState?: AnimationState;
  animationConfig?: AnimationConfig;
}
