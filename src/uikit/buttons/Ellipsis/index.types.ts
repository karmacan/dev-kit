import {OptionType} from '@src/utils/types';

export type EllipsisPropsType = {
  orientation?: 'left' | 'right'; // from children
  className?: string;
  style?: React.CSSProperties;
  options?: OptionType[];
};
