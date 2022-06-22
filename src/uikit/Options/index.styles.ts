import css from 'styled-jsx/css';

export const styles = css`
  .Options {
    overflow-y: auto;
    position: absolute;
    top: 100%;
    z-index: 1;
    max-height: 240px;
    min-width: 150px;
    width: 100%;
    margin-top: 4px;
    background: var(--theme-color);
    box-shadow: /*r*/ 0 /*b*/ 2px /*grad*/ 5px /*solid*/ 0 rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
    &.hidden {
      visibility: hidden;
    }
    .option {
      padding: /*y*/ 14px /*x*/ 10px;
      color: var(--bland-color);
      :hover {
        background: var(--light-hover-color);
        cursor: pointer;
      }
    }

    ::-webkit-scrollbar,
    ::-webkit-scrollbar-track,
    ::-webkit-scrollbar-thumb {
      display: none;
    }

    &.scrollable {
      ::-webkit-scrollbar,
      ::-webkit-scrollbar-track,
      ::-webkit-scrollbar-thumb {
        display: block;
      }
    }
  }
`;
