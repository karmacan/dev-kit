export type CheckPropsType = {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  onCheck?: (...args: any[]) => void;
};
