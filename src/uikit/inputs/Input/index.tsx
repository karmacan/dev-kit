import React from 'react';
import {styles} from './index.styles';
import {InputPropsType} from './index.types';

export const Input = ({
  className = '',
  style,
  label = '',
  placeholder = '',
  // icon = <IconSearch /> // as Element
  Icon = () => <></>,
  doFlipIconY = false,
  value = '',
  onChange,
}: InputPropsType) => {
  const handleInputChange = ev => {
    onChange(ev.target.value);
  };

  return (
    <>
      <div className={`Input ${className}`} style={style}>
        {label && <div className='label'>{label}</div>}
        <div className='input'>
          <input
            type='text'
            className={!onChange ? 'no-caret' : ''}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
          />
          <Icon doFlipY={doFlipIconY} />
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
