import React from 'react';
import {styles} from './index.styles';
import {TablePropsType} from './index.types';
import {HTML} from '~src/utils/components/html';
import {IconAngle} from '~src/uikit/assets/svg/IconAngle';
import {flipIcon} from '~src/utils/helpers/dom';
import {sortArray} from '~src/utils/helpers/sorters';
import {isObject} from '~src/utils/helpers/script';
import {useValueDidUpdate} from '~src/utils/hooks/lifecycle';
import {Preloader} from '~src/uikit/Preloader';

export const Table = ({
  className = '',
  style,
  content, // for row template
  headers,
  headerCheck,
  headerMenu, // ellipsis
  rowTemplate,
  onClick, // row
}: TablePropsType) => {
  const [contentState, setContentState] = React.useState<any>(null);
  const [showPreloader, setShowPreloader] = React.useState(false);

  useValueDidUpdate(() => {
    setContentState(content);
    // Toggle preloader
    setShowPreloader(true);
    setTimeout(() => setShowPreloader(false), 500);
  }, content);

  const handleRowClick = row => {
    onClick && onClick(row);
  };

  const handleSortClick = (ev, sortKey) => {
    const svgElement = ev.target.tagName !== 'svg' ? ev.target.closest('svg') : ev.target;
    const isUp = svgElement.classList.contains('flipped');
    flipIcon(svgElement, isUp);
    const sortedContent = sortArray(content, isUp, sortKey);
    setContentState([...sortedContent]);
  };

  return (
    <>
      <table className={`Table ${className}`} style={style}>
        <thead>
          <tr>
            {headerCheck && <td className='check-cell'>{headerCheck}</td>}
            {headers?.map((header, i) => {
              const title = isObject(header) ? header.text : header;
              const sortKey = isObject(header) ? header.sortKey : undefined;
              return (
                <td key={i}>
                  <div className='head-cell'>
                    <HTML>{title}</HTML>
                    {sortKey && (
                      <IconAngle
                        className='push-right'
                        style={{cursor: 'pointer'}}
                        onClick={ev => handleSortClick(ev, sortKey)}
                      />
                    )}
                  </div>
                </td>
              );
            })}
            {headerMenu && <td className='menu-cell'>{headerMenu}</td>}
          </tr>
        </thead>
        <tbody>
          <Preloader stretchInTbody displayed={showPreloader} style={{padding: '10px'}} />
          {!contentState?.length ? (
            <tr className='empty-row'>
              <td colSpan='100%' className={showPreloader ? 'collapsed' : ''}>
                {'Поля отсутствуют'}
              </td>
            </tr>
          ) : (
            contentState?.map((item, i) => (
              <tr key={i} onClick={() => handleRowClick(item)}>
                {rowTemplate(item).map((cell, i) => (
                  <td key={i} className={showPreloader ? 'collapsed' : ''}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <style jsx>{styles}</style>
      <style jsx global>{`
        .Table {
          thead tr td .head-cell grey {
            display: block;
            color: var(--bland-color);
          }
          tbody tr td.collapsed * {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
