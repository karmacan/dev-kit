import React from 'react';

export const Devider = ({className='', style}: any) => {
  return (
    <>
      <div className={`Devider ${className}`} style={style} />

      <style jsx>{`
        .Devider {
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
