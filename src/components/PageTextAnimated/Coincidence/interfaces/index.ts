import { PageState } from '@/pages/CoincidenceToSeeMore/interfaces';
import { AnimationState } from '@components/AnimatedText/interfaces';
import { PageHandleData } from '../../common/interfaces';

export type { PageState };

export type CoincidencePageProps = PageHandleData<AnimationState, PageState>;

export type CoincidencePageMainProps = CoincidencePageProps;
