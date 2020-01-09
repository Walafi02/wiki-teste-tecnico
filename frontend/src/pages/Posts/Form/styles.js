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
  }

  form {
    background: #fff;
    border-radius: 4px;
    color: #444444;

    padding: 12px;
    > div {
      display: flex;

      > div {
        display: flex;
        flex-direction: column;
        padding-right: 12px;
      }

      div {
        flex: 1;
      }
    }

    div.buttons {
      display: flex;
      justify-content: flex-end;
      padding-right: 12px;

      button {
        /* margin-top: 15px; */
        height: 35px;
        background: #7540ee;
        color: #fff;
        font-weight: bold;
        border: 0;
        border-radius: 4px;
        font-size: 14px;
        padding: 0 12px;
      }

      a {
        height: 35px;
        background: #7540ee;
        color: #fff;
        font-weight: bold;
        border: 0;
        border-radius: 4px;
        font-size: 14px;
        padding: 0 12px;

        display: flex;
        align-items: center;

        margin-right: 12px;
      }
    }
  }
`;

export const Field = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 10px;
  padding-bottom: 12px;

  label {
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    font-family: Roboto-Bold sans-serif;
    color: #444444;
  }

  span {
    color: #ee4d64;
    align-self: flex-start;
    margin-top: 5px;
    font-weight: bold;
    font-size: 12px;
  }

  input,
  textarea,
  select {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    height: 40px;
    padding: 7px 10px;
    font-size: 12px;
    background: #fff;
  }

  textarea {
    flex: 1;
  }
`;
