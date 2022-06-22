import React from 'react';

export const IconEllipsis = ({background, color, size = 22}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={size}
      width={size}
      fill={background ? background : 'none'}
      viewBox='0 0 4 16'
    >
      <path
        fill={color ? color : '#696E86'}
        d='M0 8c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zM0 14c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2zM0 2c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2-2 .897-2 2z'
      ></path>
    </svg>
  );
}