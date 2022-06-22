import { OptionType } from "~src/utils/types";

export type OptionsPropsType = {
  orientation?: 'left' | 'right'; // of parent
  options?: OptionType[];
  onSelect?: (...args: any[]) => void;
  areOptionsHidden?: boolean;
  setAreOptionsHidden?: (...args: any[]) => void;
  value?: string;
  scrollable?: boolean;
}