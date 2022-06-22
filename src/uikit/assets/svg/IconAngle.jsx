import React from 'react';

export const IconAngle = ({className = '', style, doFlipY = false, background, color, onClick}) => {
  return (
    <>
      <svg
        className={`${className} ${doFlipY ? 'flipped' : ''}`}
        style={style}
        xmlns='http://www.w3.org/2000/svg'
        width='15'
        height='15'
        fill={background ? background : 'none'}
        viewBox='0 0 17 11'
        onClick={onClick}
      >
        <path
          stroke={color ? color : '#9099AC'}
          strokeLinecap='round'
          strokeWidth='2'
          d='M15.5 1.375l-7.25 7.25L1 1.375'
        ></path>
      </svg>

      <style jsx>{`
        svg {
          transition: transform 0.1s ease;
          &.flipped {
            transform: scale(-1, -1);
          }
        }
      `}</style>
    </>
  );
};
