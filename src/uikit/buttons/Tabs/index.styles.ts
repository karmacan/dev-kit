import css from 'styled-jsx/css';

export const styles = css`
  .Tabs {
    --caret-left: inherit;
    --caret-width: 0;
    
    position: relative;
    display: flex;
    gap: 24px;
    border-bottom: 3px solid var(--bland-color);
    .tab {
      height: 100%;
      padding-bottom: 8px;
      color: var(--dark-bland-color);
      font-family: 'Montserrat';
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      &.active {
        color: var(--primary-color);
      }
    }
    :after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: var(--caret-left);
      height: 3px;
      width: var(--caret-width);
      border-bottom: 3px solid var(--primary-color);
      transition: left .5s ease;
    }
  }
`;