import {OptionType} from '@src/utils/types';

export type DropdownPropsType = {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  placeholder?: string;
  Icon?: React.FunctionComponent<any>;
  value?: string;
  onChange?: (value?: string) => void; // for search
  searchable?: boolean; // for search
  options?: OptionType[];
  onSelect?: (...args: any[]) => void;
};
