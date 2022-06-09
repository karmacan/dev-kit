export type TagPropsType = {
  children?: React.ReactNode; // inner text or content
  className?: string;
  style?: React.CSSProperties;
  type?: 'text' | 'contained';
  color?: 'bland' | 'primary';
  status?: 'success' | 'warning' | 'error';
  curvature?: 'squared' | 'soft' | 'rounded' | 'round';
  amount?: number; // for label
}