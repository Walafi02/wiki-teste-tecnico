import React, { useEffect, useState } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { Container, Field } from './styles';
import history from '~/services/history';

import {
  createPostRequest,
  updatePostRequest,
} from '~/store/modules/posts/actions';

import InputFile from '~/components/InputFile';

const schema = Yup.object().shape({
  title: Yup.string().required('O Titulo é obrigatorio'),
  type_post_id: Yup.number()
    .required('O tipo de post é obrigatorio')
    .typeError('Selecione um typo para o post'),
  file: Yup.string(),
  content: Yup.string().required('O Conteudo é obrigatorio'),
});

export default function FormPosts({ match }) {
  const dispatch = useDispatch();
  const options = useSelector(state => state.posts.count);
  const { id } = match.params;

  const [selected, setSelected] = useState(null);
  const [file_id, setFileID] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [post, setPost] = useState({
    title: null,
    type_post_id: null,
    content: null,
    file_id: null,
  });

  function handleSubmit({ title, type_post_id, content }) {
    if (id) {
      dispatch(updatePostRequest(id, title, type_post_id, content, file_id));
    } else {
      dispatch(createPostRequest(title, type_post_id, content, file_id));
    }
  }

  useEffect(() => {
    async function getPost() {
      try {
        const { data } = await api.get(`/posts/${id}`);
        setSelected(data.type_post_id);
        if (data.file) {
          setFileName(data.file.name);
          setFileID(data.file.id);
        }
        setPost(data);
      } catch (error) {
        toast.error('Error ao buscar o Post, verifique suas permissões');
        history.push(`/posts`);
      }
    }

    if (id) getPost();
  }, []); // eslint-disable-line

  return (
    <Container className="content">
      <header>
        <strong>{id ? 'Editar' : 'Novo'} Post</strong>
      </header>

      <Form schema={schema} onSubmit={handleSubmit} initialData={post}>
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
                name="type_post_id"
                options={options}
                value={selected}
              />
            </Field>

            <Field>
              <InputFile
                label="Selecione em arquivo"
                name="file_id"
                setFileID={setFileID}
                setFileName={setFileName}
                fileName={fileName}
                fileID={file_id}
              />
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

FormPosts.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
