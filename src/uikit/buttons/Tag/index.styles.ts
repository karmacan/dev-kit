import css from 'styled-jsx/css';

export const styles = css`
  .Tag {
    --font-size: 16px;
    
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: /*y*/ 7px /*x*/ 8px;
    color: var(--dark-bland-color);
    font-family: 'Montserrat';
    font-size: var(--font-size);
    font-weight: bold;
    user-select: none;
    .amount {
      padding: /*y*/ 2px /*x*/ 4px;
    }
    .circle {
      margin-right: 2px;
      transform: scale(2) translateY(-5%);
    }
    /* type & color */
    &.text {
      &.bland {
        background: var(--theme-color);
        .amount {
          background: var(--light-bland-color);
        }
      }
      &.primary {
        color: var(--primary-color);
        .amount {
          background: var(--secondary-color);
        }
      }
    }
    &.contained {
      &.bland {
        background: var(--light-hover-color);

        .amount {
          background: var(--light-bland-color);
        }
      }
      &.primary {
        background: var(--light-primary-color);
        color: var(--primary-color);
        .amount {
          background: var(--secondary-color);
        }
      }
    }
    /* status */
    &.success {
      background: var(--light-success-color) !important;
      color: var(--success-color);
    }
    &.warning {
      background: var(--light-warning-color) !important;
      color: var(--warning-color);
    }
    &.error {
      background: var(--light-error-color) !important;
      color: var(--error-color);
    }
    /* curvature */
    &.squared {
      border-radius: none;
      .amount {
        border-radius: none;
      }
    }
    &.soft {
      border-radius: 4px;
      .amount {
        border-radius: 4px;
      }
    }
    &.rounded {
      border-radius: 100vh;
      .amount {
        border-radius: 100vh;
      }
    }
    &.round {
      border-radius: 100vh;
      .amount {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--font-size);
        width: var(--font-size);
        padding: var(--font-size);
        border-radius: 50%;
        line-height: var(--font-size);
      }
    }
  }
`;
