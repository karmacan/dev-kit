export type HeaderType = {
  text?: string;
  sortKey?: string; // allows sort
};

export type CellType = JSX.Element;

export type TablePropsType = {
  className?: string;
  style?: React.CSSProperties;
  content?: any[];
  headers: string[] | HeaderType[];
  headerCheck?: JSX.Element;
  headerMenu?: JSX.Element;
  rowTemplate: (contentItem: any) => CellType[];
  onClick?: (...args: any[]) => void;
};
