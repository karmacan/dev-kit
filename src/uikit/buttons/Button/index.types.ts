export type ButtonPropsType = {
  children?: React.ReactNode; // inner text or content
  className?: string;
  style?: React.CSSProperties;
  type?: 'contained' | 'bordered' | 'text';
  color?: 'primary';
  selectable?: boolean; // do remain active state after click
  hidden?: boolean;
  onClick?: (...args: any[]) => void;
};
