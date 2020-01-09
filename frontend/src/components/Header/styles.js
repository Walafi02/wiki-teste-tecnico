import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  a {
    transition: all 0.3s ease;

    > strong {
      font-size: 34px;
      color: #fff;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  nav {
    display: flex;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 12px;
      background: transparent;
      border: none;
      border-bottom: 3px solid transparent;

      color: #fff;
      transition: all 0.3s ease;

      strong {
        font-size: 22px;
      }

      span {
        font-size: 18px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }

    button.active {
      border-bottom: 3px solid #fff;
      transform: scale(1.1);
    }

    /* button.active {
    } */
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
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
