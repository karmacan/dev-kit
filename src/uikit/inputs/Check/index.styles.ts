import css from 'styled-jsx/css';

export const styles = css`
  .Check {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 7px;
    cursor: pointer;
    input[type=checkbox] {
      height: 18px;
      width: 18px;
      cursor: pointer;
    }
  }
`;