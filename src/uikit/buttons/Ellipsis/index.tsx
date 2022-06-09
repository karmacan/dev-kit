import React from 'react';
import {styles} from './index.styles';
import {EllipsisPropsType} from './index.types';
import IconEllipsis from '@public/icons/icon-ellipsis';
import {Options} from '@src/uikit/ui/Options';
import {useElementOutsideClick} from '@src/utils/hooks/dom';

export const Ellipsis = ({className = '', style, options, orientation = 'right'}: EllipsisPropsType) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const [ellipsisElement, setEllipsisElement] = React.useState(null);

  useElementOutsideClick(ellipsisElement, () => setIsSelected(false));

  const handleEllipsisClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <>
      <div
        ref={setEllipsisElement}
        className={`Ellipsis ${isSelected ? 'selected' : ''} ${className}`}
        style={style}
        onClick={handleEllipsisClick}
      >
        <IconEllipsis />
        <Options
          orientation={orientation}
          options={options}
          areOptionsHidden={!isSelected}
          setAreOptionsHidden={() => setIsSelected(false)}
        />
      </div>

      <style jsx>{styles}</style>
      <style jsx global>{`
        .Ellipsis {
          transition: background 0.2s ease;
          svg path {
            transition: fill 0.1s ease;
          }
          &.selected {
            background: var(--light-primary-color);
            svg path {
              fill: var(--primary-color);
            }
          }
        }
      `}</style>
    </>
  );
};
