import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Table() {
  const posts = useSelector(state => state.posts.posts);

  return (
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
        {posts.map(post => (
          <tr>
            <td>{post.id}</td>
            <td>{post.type.title}</td>
            <td>{post.title}</td>
            <td>1</td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
