import css from 'styled-jsx/css';

export const styles = css`
  .Button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: fit-content;
    width: fit-content;
    padding: /*y*/ 9px /*x*/ 20px;
    background: var(--bland-color);
    border-radius: 5px;
    color: #fff;
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    text-transform: uppercase;

    transition: all .1s ease;
    
    /* type & color */
    &.contained {
      &.primary {
        background: var(--primary-color);
        :active {
          background: var(--dark-primary-color);
        }
      }
    }
    &.bordered {
      &.primary {
        background: #fff;
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
        :active, &.selected {
          background: var(--light-primary-color);
          border: 2px solid var(--light-primary-color);
        }
      }
      
    }
    &.text {
      background: transparent;
      &.primary {
        color: var(--primary-color);
        :active {
          color: var(--dark-primary-color);
        }
      }
    }
    
  }
`;
