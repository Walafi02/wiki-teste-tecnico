import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { singOut } from '../../store/modules/auth/actions';
import { Container } from './styles';

export default function Header() {
  const postsCount = useSelector(state => state.posts.count);
  const dispatch = useDispatch();

  function handleExit() {
    dispatch(singOut());
  }

  return (
    <Container className="content">
      <strong className="logo">Wiki</strong>

      <nav>
        {postsCount.map(post => (
          <div className="post" key={post.id}>
            <strong>{post.count}</strong>
            <span>{post.title}</span>
          </div>
        ))}
      </nav>

      <div className="side">
        <span className="name">Walafi Ferreira</span>
        <button type="button" onClick={handleExit}>
          Sair
        </button>
      </div>
    </Container>
  );
}
