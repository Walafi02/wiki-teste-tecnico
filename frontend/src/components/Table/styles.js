import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  color: #444444;

  tr {
    display: grid;
    grid-template-columns: 1fr 2fr 4fr 3fr;
  }

  thead th {
    text-align: left;
    padding: 12px;
  }

  tbody td {
    text-align: left;
    padding: 12px;

    display: flex;
    align-items: center;
  }

  td.actions {
    display: flex;
    align-items: center;
    button,
    a {
      background: red;
      padding: 6px 12px;
      margin: 5px;
      font-size: 12px;
      color: #444444;
      background: transparent;
      /* border: none; */
      border: 1px solid transparent;

      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
      }
    }
  }

  tbody tr:hover {
    background: #f5f5f5;
  }

  tbody tr.empty-row:hover {
    background: none;
  }
`;

export const Empt = styled.h1`
  text-align: center;
  color: #fff;
`;
