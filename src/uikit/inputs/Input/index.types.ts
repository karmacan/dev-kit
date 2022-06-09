export type InputPropsType = {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  placeholder?: string;
  Icon?: React.FunctionComponent<any>;
  doFlipIconY?: boolean; // for dropdown
  value?: string;
  onChange?: (value?: string) => void;
};
