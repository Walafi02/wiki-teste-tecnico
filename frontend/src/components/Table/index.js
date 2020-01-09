import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePostRequest } from '../../store/modules/posts/actions';

import { Container, Empt } from './styles';

import ReactModal from '~/components/ReactModal';

export default function Table() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const type_post_id_selected = useSelector(state => state.posts.type_post_id);
  const currentPage = useSelector(state => state.posts.currentPage);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [post, setPost] = useState(null);

  function closeModal() {
    setModalIsOpen(false);
  }

  function openModal(item) {
    setPost(item);
    setModalIsOpen(true);
  }

  function handleDelete(id, type_post_id) {
    dispatch(
      deletePostRequest(
        id,
        type_post_id,
        posts.length,
        currentPage,
        type_post_id_selected
      )
    );
  }

  return (
    <>
      <ReactModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        post={post}
      />
      {posts.length > 0 ? (
        <Container>
          <thead>
            <tr>
              <th>Id</th>
              <th>Tipo</th>
              <th>Título</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {posts.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.type.title}</td>
                <td>{p.title}</td>
                <td className="actions">
                  <button type="button" onClick={() => openModal(p)}>
                    Ver
                  </button>
                  <Link to={`/posts/edit/${p.id}`}>Editar</Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(p.id, p.type.id)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Container>
      ) : (
        <Empt>Sem Posts na Lista</Empt>
      )}
    </>
  );
}
