import css from 'styled-jsx/css';

export const styles = css`
  .Input {
    display: inline;
    width: fit-content;
    font-family: 'Montserrat';
    .label {
      margin-bottom: 8px;
      color: var(--dark-bland-color);
      font-size: 14px;
      font-weight: bold;
      user-select: none;
    }
    :hover .input {
      border: 2px solid var(--hover-color);
    }
    .input {
      position: relative;
      z-index: 0;
      display: inline-flex;
      align-items: center;
      width: 100%;
      padding: 8px;
      background: var(--theme-color);
      border: 2px solid var(--bland-color);
      border-radius: 5px;
      &:focus-within {
        border: 2px solid var(--primary-color);
      }
      input {
        width: 100%;
        border: none;
        outline: none;
        color: var(--font-color);
        font-family: 'Montserrat';
        font-size: 14px;
        &.no-caret {
          caret-color: transparent;
          cursor: pointer;
        }
        ::placeholder {
          color: var(--bland-color);
        }
      }
    }
  }
`;
