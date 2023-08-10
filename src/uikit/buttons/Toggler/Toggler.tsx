import React, { memo, useState, useRef, useEffect } from 'react';
import { moveCaretToElement, parseOptions, TOption } from './Toggler.utils';
import styles from './Toggler.module.scss';
import type { FC, CSSProperties, MouseEvent } from 'react';

type TTogglerProps = {
  className?: string;
  style?: CSSProperties;
  orientation?: 'horizontal' | 'vertical';
  selectedOption?: TOption;
  options: TOption[] | string[];
  onSelect?: (option: TOption) => void;
};

export const Toggler = memo(
  ({
    className,
    style,
    orientation = 'horizontal',
    selectedOption = { id: 0 },
    options = [],
    onSelect,
  }: TTogglerProps) => {
    const [_selectedOption, _setSelectedOption] = useState(selectedOption);
    const caretRef = useRef<HTMLDivElement>();

    const caretParent = caretRef?.current?.parentElement;
    const isVertical = orientation !== 'horizontal';

    const handleOptionClick = (ev: MouseEvent, option: TOption) => {
      _setSelectedOption(option);
      moveCaretToElement(
        caretRef?.current,
        ev.target as HTMLElement,
        orientation
      );
      onSelect && onSelect(option);
    };

    // On select option or orientation change
    useEffect(() => {
      const parentElem = caretParent || document.querySelector('#toggler');

      moveCaretToElement(
        caretRef?.current,
        parentElem?.children[_selectedOption.id + 1] as HTMLElement,
        orientation
      );
    }, [_selectedOption, orientation]);

    // On mount
    useEffect(() => {
      const parentElem = caretParent || document.querySelector('#toggler');

      moveCaretToElement(
        caretRef?.current,
        parentElem?.children[_selectedOption.id + 1] as HTMLElement,
        orientation
      );
    }, []);

    return (
      <div
        id="toggler"
        className={`${styles.toggler} ${className} ${
          isVertical ? styles.vertical : ''
        } `}
        style={style}
      >
        <div ref={caretRef} className={`caret ${styles.caret}`} />
        {parseOptions(options).map((option) => (
          <div
            key={option.id}
            className={`card ${styles.card} ${
              option.id === _selectedOption.id ? styles.selected : ''
            }`}
            onClick={(ev) => handleOptionClick(ev, option)}
          >
            {option.icon || null} {option.text}
          </div>
        ))}
      </div>
    );
  }
);
