import React from 'react';
import {styles} from './index.styles';
import {InputPropsType} from './index.types';

export const Input = ({
  className = '',
  style,
  disabled = false,
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
      <div className={`Input ${disabled ? 'disabled' : ''} ${className}`} style={style}>
        {label && <div className='label'>{label}</div>}
        <div className='input'>
          <input
            type='text'
            className={!onChange ? 'no-caret' : ''}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
          />
          <div className='icon'>
            <Icon doFlipY={doFlipIconY} />
          </div>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
