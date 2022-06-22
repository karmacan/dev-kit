import React from 'react';
import {styles} from './index.styles';
import {OptionsPropsType} from './index.types';
import {useOptionsSearch} from './index.hooks';
import {HTML} from '~src/utils/components/html';
import {MotionToggleHeight} from '~src/utils/components/motions';

const scrollMotionFix = (scrollable, options) => {
  const SCROLLABLE_START_LENGTH = 6;
  return scrollable === undefined
    ? !options || options?.length < SCROLLABLE_START_LENGTH
      ? false
      : true
    : scrollable;
};

export const Options = ({
  orientation = 'left',
  options,
  onSelect,
  areOptionsHidden,
  setAreOptionsHidden,
  value,
  scrollable,
}: OptionsPropsType) => {
  const searchedOptions = useOptionsSearch(options, value);
  scrollable = scrollMotionFix(scrollable, options);

  const handleOptionClick = (ev, option) => {
    ev.stopPropagation();
    onSelect && onSelect(option);
    setAreOptionsHidden(true);
  };

  return (
    <>
      <ul
        className={`Options ${orientation} ${areOptionsHidden ? 'hidden' : ''} ${
          scrollable ? 'scrollable' : ''
        }`}
      >
        <MotionToggleHeight hidden={!areOptionsHidden}>
          {searchedOptions?.length ? (
            searchedOptions.map(option => (
              <li key={option.idx} className='option' onClick={ev => handleOptionClick(ev, option)}>
                <HTML>{option?.text}</HTML>
              </li>
            ))
          ) : (
            <li className='option' style={{userSelect: 'none'}} />
          )}
        </MotionToggleHeight>
      </ul>

      <style jsx>{styles}</style>
      <style jsx global>{`
        .Options {
          b {
            color: var(--dark-bland-color);
          }
          red {
            color: var(--error-color);
          }
        }
      `}</style>
    </>
  );
};
