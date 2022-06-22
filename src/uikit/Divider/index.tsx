import React from 'react';

export const Divider = ({className='', style}: any) => {
  return (
    <>
      <div className={`Divider ${className}`} style={style} />

      <style jsx>{`
        .Divider {
          height: 1px;
          width: 100%;
          background: var(--bland-color);


          &.hidden {
            visibility: hidden;
          }
        }
      `}</style>
    </>
  );
};
