import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const Container = styled.div``;

export const ModalBody = styled.div`
  font-family: Roboto-Bold sans-serif;
  color: #444444;

  strong {
    font-size: 18px;
    margin-top: 8px;
  }

  p {
    margin: 15px 0;
    font-size: 18px;
    white-space: pre-line;
  }

  a {
    color: #444444;
    text-decoration: underline;
  }

  div {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;

    button {
      margin-top: 15px;
      padding: 6px 12px;
      background: #7540ee;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
    }
  }
`;

export const FormHelp = styled(Form)`
  /* padding: 10px; */

  /* strong {
    font-family: Roboto-Bold sans-serif;
    font-size: 14px;
    color: #444444;
    text-align: left;

    span {
      text-transform: uppercase;
    }
  }

  p {
    font-family: Roboto-Regular sans-serif;
    font-size: 16px;
    color: #666666;
    line-height: 26px;
    text-align: justify;
  }

  div {
    margin-top: 10px;
    padding-left: 0;
  }

  textarea {
    height: 8em;
    padding: 5px;
    font-family: Roboto-Regular sans-serif;
    font-size: 14px;
  }

  button {
    width: 100%;
    padding: 15px;

    span {
      font-family: Roboto-Bold sans-serif;
      font-size: 16px;
      color: #ffffff;
    }
  } */
`;
