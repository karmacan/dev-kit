import {OptionType} from '@src/utils/types';

export type SearchPropsType = {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  placeholder?: string;
  Icon?: React.FunctionComponent<any>;
  value?: string;
  onChange?: (value?: string) => void;
  options?: OptionType[];
  onSelect?: (...args: any[]) => void;
};
