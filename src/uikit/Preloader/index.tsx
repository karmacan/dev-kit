import React from 'react';
import {styles} from './index.styles';
import {PreloaderPropsType} from './index.types';
import {Spinner} from './Spinner';

const TbodyPreloaderWrapper = ({children, stretchInTbody}) => {
  return (
    <>
      {stretchInTbody ? (
        <tr>
          <td colSpan='100%'>{children}</td>
        </tr>
      ) : (
        children
      )}
    </>
  );
};

export const Preloader = ({
  className = '',
  style,
  displayed = true,
  stretchInTbody = false,
}: PreloaderPropsType) => {
  return (
    <>
      <TbodyPreloaderWrapper stretchInTbody={stretchInTbody}>
        <div className={`Preloader ${!displayed ? 'invisible' : ''} ${className}`} style={style}>
          <Spinner />
        </div>
      </TbodyPreloaderWrapper>

      <style jsx>{styles}</style>
    </>
  );
};
