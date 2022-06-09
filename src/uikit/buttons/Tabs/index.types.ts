import { OptionType } from "@src/utils/types";

export type TabsPropsType = {
  className?: string;
  style?: React.CSSProperties;
  options: OptionType[];
  activeOption?: number | string; // idx | key
  onSelect?: (option?: OptionType, ...args: any[]) => void;
}