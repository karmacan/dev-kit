import React from 'react';
import {styles} from './index.styles';
import {DropdownPropsType} from './index.types';
import {useElementOutsideClick} from '~src/utils/hooks/dom';
import {Input} from '~src/uikit/inputs/Input';
import {IconAngle} from '~src/uikit/assets/svg/IconAngle';
import {Options} from '~src/uikit/Options';

export const Dropdown = ({
  className = '',
  style,
  disabled = false,
  label = '',
  placeholder = '',
  Icon = IconAngle,
  value = '',
  onChange, // for Search
  searchable = false, // for Search
  options,
  onSelect, // option
}: DropdownPropsType) => {
  const [areOptionsHidden, setAreOptionsHidden] = React.useState(true);
  const [dropdownElement, setDropdownElement] = React.useState(null);

  useElementOutsideClick(dropdownElement, () => setAreOptionsHidden(true));

  return (
    <>
      <div
        ref={setDropdownElement}
        className={`Dropdown ${disabled ? 'disabled' : ''} ${className}`}
        style={style}
        onClick={() => setAreOptionsHidden(false)}
      >
        <Input
          disabled={disabled}
          label={label}
          placeholder={placeholder}
          Icon={Icon}
          doFlipIconY={Icon.name === 'IconAngle' ? !areOptionsHidden : false}
          value={value}
          onChange={onChange ? onChange : undefined} // if onChange is undefined will be no caret
        />
        <Options
          options={options}
          onSelect={onSelect}
          areOptionsHidden={areOptionsHidden}
          setAreOptionsHidden={setAreOptionsHidden}
          value={searchable ? value : undefined} // for filter filter
        />
      </div>

      <style jsx>{styles}</style>
      <style jsx>{`
        .Dropdown {
          width: ${searchable ? '100%' : 'fit-content'};
        }
      `}</style>
    </>
  );
};
