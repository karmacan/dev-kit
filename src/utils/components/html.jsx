import React from 'react';

export const HTML = ({className = '', children}) => (
  <div className={className} dangerouslySetInnerHTML={{__html: children}} />
);
