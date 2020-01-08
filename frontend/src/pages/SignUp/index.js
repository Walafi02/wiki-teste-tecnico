import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string()
    .email('Insira um email valido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string().required('A Senha é obrigatoria'),
  repassword: Yup.string()
    .required('A Senha de confirmação é obrigatoria')
    .min(6)
    .when('password', {
      is: value => value && value.length > 0,
      then: Yup.string().oneOf([Yup.ref('password'), null]),
    }),
  then: Yup.string().oneOf([Yup.ref('password'), null]),
});

export default function SignUn() {
  const dispatch = useDispatch();

  async function handleSubmit({ name, email, password, repassword }) {
    dispatch(signUpRequest(name, email, password, repassword));
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <h1>Cadastro</h1>
      <Input label="Nome" name="name" type="text" />
      <Input label="E-mail" name="email" type="email" />
      <Input label="Senha" name="password" type="password" />
      <Input label="Confirme a Senha" name="repassword" type="password" />

      <button type="submit">Entrar no sistema</button>
      <Link to="/">Já tenho conta</Link>
    </Form>
  );
}
