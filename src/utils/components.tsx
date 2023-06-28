import React from 'react';
import type {ReactNode} from 'react';

export type THTML = {
  className?: string;
  children?: ReactNode | ReactNode[];
};

export const HTML = ({className = '', children}: THTML) => (
  <div className={className} dangerouslySetInnerHTML={{__html: children as string}} />
);
