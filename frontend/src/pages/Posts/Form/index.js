import React from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Field } from './styles';

export default function FormPosts() {
  const options = useSelector(state => state.posts.count);

  function handleSubmit() {}
  return (
    <Container className="content">
      <header>
        <strong>Novo Post</strong>
      </header>

      <Form onSubmit={handleSubmit}>
        <div>
          <div>
            <Field>
              <Input
                label="Titulo"
                name="title"
                type="text"
                placeholder="exemplo@email.com"
              />
            </Field>

            <Field>
              <Select
                label="Selecione tipo de post"
                name="type"
                options={options}
              />
            </Field>

            <Field>
              <Input label="arquivo" name="file" type="file" />
            </Field>
          </div>
          <div>
            <Field>
              <Input multiline label="Conteúdo" name="content" />
            </Field>
          </div>
        </div>
        <div className="buttons">
          <Link to="/posts">Cancelar</Link>
          <button type="submit">Salvar</button>
        </div>
      </Form>
    </Container>
  );
}
