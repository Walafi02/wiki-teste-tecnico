import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { singOut } from '../../store/modules/auth/actions';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import Table from '~/components/Table';
import Pagination from '~/components/Pagination';
import { requestPosts, setTypePostId } from '~/store/modules/posts/actions';

export default function Posts() {
  const dispatch = useDispatch();
  const type_post_id = useSelector(state => state.posts.type_post_id);

  useEffect(() => {
    dispatch(requestPosts());
  }, []); // eslint-disable-line

  function handleClear() {
    dispatch(requestPosts());
  }

  function handleNewPost() {
    dispatch(setTypePostId(null));
  }

  return (
    <Container className="content">
      <header>
        <strong>Últimos Posts</strong>

        <div>
          {type_post_id && (
            <button type="button" onClick={handleClear}>
              Limpar Filtro
            </button>
          )}
          <Link to="/posts/new" onClick={handleNewPost}>
            Criar Post
          </Link>
        </div>
      </header>

      <Table />
      <Pagination />
    </Container>
  );
}
