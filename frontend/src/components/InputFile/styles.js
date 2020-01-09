import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;

  width: 100%;

  span {
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    font-family: Roboto-Bold sans-serif;
    color: #444444;
  }

  label {
    cursor: pointer;

    div {
      display: flex;
      align-items: center;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      height: 40px;
      padding: 7px 10px;
      font-size: 12px;
      background: #fff;
    }

    &:hover {
      opacity: 0.7;
    }

    /* img {
      height: 100px;
      width: 100px;
      border-radius: 50px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    } */

    input {
      display: none;
    }
  }
`;
