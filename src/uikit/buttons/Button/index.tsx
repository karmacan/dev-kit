import React from 'react';
import {styles} from './index.styles';
import {ButtonPropsType} from './index.types';

export const Button = ({
  children,
  className = '',
  style,
  type = 'contained',
  color = 'primary',
  selectable = false,
  hidden = false,
  onClick,
}: ButtonPropsType) => {
  const [isSelected, setIsSelected] = React.useState(false);

  const handleButtonClick = () => {
    onClick && onClick();
    setIsSelected(!isSelected);
  };

  return (
    <>
      <div
        className={`Button ${type} ${color} ${
          selectable && isSelected ? 'selected' : ''
        } ${className} ${hidden ? 'hidden' : ''}`}
        style={style}
        onClick={handleButtonClick}
      >
        {children}
      </div>

      <style jsx>{styles}</style>
      <style jsx global>{`
        .Button {
          &.text {
            &.primary {
              :active * {
                color: var(--dark-primary-color) !important;
              }
            }
          }
          &.hidden {
            visibility: hidden;
          }
        }
      `}</style>
    </>
  );
};
