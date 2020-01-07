import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 320px;
  background: #fff;
  border-radius: 4px;
  padding: 30px 20px;
  text-align: center;
  background: #fff;

  form {
    display: flex;
    flex-direction: column;
    /* margin-top: 10px; */

    h1 {
      text-transform: uppercase;
      color: #444444;
    }

    label {
      text-align: left;
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
      font-family: Roboto-Bold;
      color: #444444;
      margin-top: 15px;
    }

    span {
      color: #ee4d64;
      align-self: flex-start;
      margin-top: 5px;
      font-weight: bold;
      font-size: 12px;
    }

    input {
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      height: 40px;
      padding: 7px 10px;
      font-size: 12px;
    }

    button {
      margin-top: 15px;
      height: 40px;
      background: #7540ee;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
    }

    a {
      margin-top: 10px;
    }
  }
`;
