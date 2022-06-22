import css from 'styled-jsx/css';

export const styles = css`
  .Table {
    overflow: hidden;
    width: 100%;
    border-collapse: collapse;
    border-radius: 4px;
    outline: 1px solid var(--table-border-color);

    thead,
    tbody {
      tr {
        :hover {
          background: var(--light-hover-color);
        }
        &:not(tr:last-of-type) {
          td {
            border-bottom: 1px solid var(--table-border-color);
          }
        }
        td {
          padding: /*y*/ 13px /*x*/ 16px;
          font-size: 16px;
          &:not(td:last-of-type) {
            border-right: 1px solid var(--table-border-color);
          }
          &.check-cell,
          &.menu-cell {
            width: 60px;
          }
        }
      }
    }

    thead {
      tr {
        background: var(--light-hover-color);
        border-bottom: 1px solid var(--table-border-color);
        color: var(--font-color);
        font-weight: bold;
        user-select: none;
        td {
          .head-cell {
            display: flex;
            align-items: center;
          }
        }
      }
    }

    tbody {
      &.checked {
        background: var(--light-primary-color);
      }
      tr {
        &.empty-row {
          pointer-events: none;
          user-select: none;
          td {
            padding: /*y*/ 13px /*x*/ 16px;
            text-align: center;
            font-size: 16px;
            font-style: italic;
          }
        }
        td {
          transition: padding 0.1s ease;
          &.collapsed {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            font-size: 0 !important;
            border-bottom-width: 0 !important;
          }
        }
      }
    }
  }
`;
