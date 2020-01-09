import styled from 'styled-components';

export const Container = styled.div`
  header {
    padding: 3px 0;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 22px;
    }

    div {
      a,
      button {
        color: #fff;
        font-size: 18px;
        font-weight: bold;

        padding: 0 12px;
        background: transparent;
        border: none;
      }
    }
  }
`;
