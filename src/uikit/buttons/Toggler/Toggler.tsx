import React, { memo, useRef, useEffect } from 'react';
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

export const Toggler: FC<TTogglerProps> = memo(
  ({
    className,
    style,
    orientation = 'horizontal',
    selectedOption = { id: 0 },
    options = [],
    onSelect,
  }) => {
    // const [selectedOption, setSelectedOption] = useState(selectedOption);
    const caretRef = useRef<HTMLDivElement>();

    const caretParent = caretRef && caretRef.current?.parentElement;
    const isVertical = orientation !== 'horizontal';

    const handleOptionClick = (ev: MouseEvent, option: TOption) => {
      moveCaretToElement(
        caretRef?.current,
        ev.target as HTMLElement,
        orientation
      );
      onSelect && onSelect(option);
      // setSelectedOption(option);
    };

    // On select option change
    useEffect(() => {
      moveCaretToElement(
        caretRef?.current,
        caretParent &&
          (caretParent.children[selectedOption.id + 1] as HTMLElement),
        orientation
      );
    }, [selectedOption]);

    // On mount
    useEffect(() => {
      moveCaretToElement(
        caretRef?.current,
        caretRef?.current!.nextElementSibling as HTMLElement,
        orientation
      );
    }, []);

    return (
      <div
        className={`${styles.toggler} ${className} ${
          isVertical ? styles.vertical : ''
        }`}
        style={style}
      >
        <div ref={caretRef} className={styles.caret} />
        {parseOptions(options).map((option) => (
          <div
            key={option.id}
            className={`${styles.card} ${
              option.id === selectedOption.id ? styles.selected : ''
            }`}
            onClick={(ev) => handleOptionClick(ev, option)}
          >
            {option.text}
          </div>
        ))}
      </div>
    );
  }
);
