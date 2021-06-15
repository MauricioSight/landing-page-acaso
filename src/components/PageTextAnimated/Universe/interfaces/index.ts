import { PageState } from '@/pages/TimeMachineToUniverse/interfaces';
import { AnimationState } from '@components/AnimatedText/interfaces';
import { PageHandleData } from '../../common/interfaces';

export type { PageState };

export type UniversePageProps = PageHandleData<AnimationState, PageState>;

export type UniversePageMainProps = UniversePageProps;
