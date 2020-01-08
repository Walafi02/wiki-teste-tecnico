import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { singOut } from '../../store/modules/auth/actions';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import Tables from '~/components/Table';
import { requestPosts } from '~/store/modules/posts/actions';

export default function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPosts());
  }, []); // eslint-disable-line

  return (
    <Container className="content">
      <header>
        <strong>Últimos Posts</strong>
        <Link to="/posts/new">Criar Post</Link>
      </header>

      <Tables />
    </Container>
  );
}
