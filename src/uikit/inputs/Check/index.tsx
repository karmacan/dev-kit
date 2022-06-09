import React from 'react';
import {styles} from './index.styles';
import {CheckPropsType} from './index.types';

export const Check = ({className='', style, checked = false, onCheck}: CheckPropsType) => {
  const handleCheckClick = (ev) => {
    const checkElement = ev.target.tagName === 'INPUT' ? ev.target.parentElement : ev.target;
    onCheck(checkElement, !checked);
  }
  
  return (
    <>
      <div className={`Check ${className}`} style={style} onClick={handleCheckClick}>
        <input type="checkbox" checked={checked} onChange={() => {}} />
      </div>

      <style jsx>{styles}</style>
    </>
  );
}