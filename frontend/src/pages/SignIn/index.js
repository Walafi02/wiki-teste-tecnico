import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email valido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string().required('A Senha é obrigatoria'),
});

export default function SignIn() {
  async function handleSubmit({ email, password }) {
    // console.log({ email, password });
    // dispatch(signInRequest(email, password));
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <h1>Login</h1>
      <Input
        label="E-mail"
        name="email"
        type="email"
        placeholder="exemplo@email.com"
      />
      <Input
        label="Senha"
        name="password"
        type="password"
        placeholder="********"
      />

      <button type="submit">Entrar no sistema</button>
      <Link to="/new">Cadastra-se</Link>
    </Form>
  );
}
