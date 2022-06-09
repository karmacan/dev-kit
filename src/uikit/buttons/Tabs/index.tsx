import React from 'react';
import {styles} from './index.styles';
import {TabsPropsType} from './index.types';
import {moveCaretToElement} from '@src/utils/helpers/dom';
import {useComponentUpdate, useValueDidAssign} from '@src/utils/hooks/lifecycle';
import {isNumber} from '@src/utils/helpers/script';

export const Tabs = ({className = '', style, options, activeOption, onSelect}: TabsPropsType) => {
  const [tabsElement, setTabsElement] = React.useState(null);
  const [activeTabIdx, setActiveTabIdx] = React.useState(0);

  useValueDidAssign(() => {
    moveCaretToElement(tabsElement.children[activeTabIdx], tabsElement);
  }, tabsElement);

  useComponentUpdate(() => {
    if (!options || activeOption === undefined || activeOption < 0 || !tabsElement) return;
    const idx = isNumber(activeOption) ? activeOption : options.find(o => o.key === activeOption).idx;
    moveCaretToElement(tabsElement.children[idx], tabsElement);
    setActiveTabIdx(idx as number);
  });

  const handleTabClick = (ev, option) => {
    moveCaretToElement(ev.target, tabsElement);
    setActiveTabIdx(option.idx);
    onSelect && onSelect(option);
  };

  return (
    <>
      <div ref={setTabsElement} className={`Tabs ${className}`} style={style}>
        {options?.map(option => (
          <div
            key={option.idx}
            className={`tab ${activeTabIdx === option.idx ? 'active' : ''}`}
            onClick={ev => handleTabClick(ev, option)}
          >
            {option?.text}
          </div>
        ))}
      </div>

      <style jsx>{styles}</style>
    </>
  );
};
