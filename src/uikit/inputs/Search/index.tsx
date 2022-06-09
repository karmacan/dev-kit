import React from 'react';
import {styles} from './index.styles';
import {SearchPropsType} from './index.types';
import {Dropdown} from '../Dropdown';
import IconSearch from '@public/icons/icon-search';

export const Search = ({
  className = '',
  style,
  label = '',
  placeholder = '',
  Icon = IconSearch, // as Component
  value = '',
  onChange,
  options,
  onSelect, // option
}: SearchPropsType) => {
  return (
    <>
      <div className={`Search ${className}`} style={style}>
        <Dropdown
          label={label}
          placeholder={placeholder}
          Icon={Icon}
          value={value}
          onChange={onChange}
          searchable
          options={options}
          onSelect={onSelect}
        />
      </div>

      <style jsx>{styles}</style>
      <style jsx global>{`
        .Search {
          .Dropdown {
            position: static;
          }
        }
      `}</style>
    </>
  );
};
