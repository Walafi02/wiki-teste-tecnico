import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  > strong {
    font-size: 34px;
  }

  nav {
    display: flex;

    div.post {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 12px;

      strong {
        font-size: 22px;
      }

      span {
        font-size: 18px;
      }
    }
  }
  div.side {
    span {
      font-size: 18px;
      font-weight: bold;
      margin-right: 10px;
    }

    button {
      color: #fff;
      font-size: 18px;
      font-weight: bold;

      padding: 4px 12px;
      border: none;
      background: transparent;
    }
  }
`;
