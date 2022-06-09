import React from 'react';
import {styles} from './index.styles';
import {TagPropsType} from './index.types';

export const Tag = ({
  children,
  className = '',
  style,
  type = 'contained',
  color = 'bland',
  status,
  curvature = 'soft',
  amount,
}: TagPropsType) => {
  if (status) curvature = 'round';

  return (
    <>
      <div className={`Tag ${type} ${color} ${status} ${curvature} ${className}`} style={style}>
        {children}
        {amount ? <div className='amount'>{amount}</div> : null}
        {status ? <div className='circle'>&bull;</div> : null}
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
