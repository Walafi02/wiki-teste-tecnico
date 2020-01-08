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

    /* + th {
      text-align: center;
    } */
  }

  tbody td {
    text-align: left;
    padding: 12px;

    /* + td {
      text-align: center;
    } */
  }

  tbody tr:hover {
    background: #f5f5f5;
  }

  tbody tr.empty-row:hover {
    background: none;
  }
`;
