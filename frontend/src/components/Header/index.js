import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { singOut } from '../../store/modules/auth/actions';
import { requestPosts } from '../../store/modules/posts/actions';
import { Container } from './styles';

export default function Header() {
  const postsCount = useSelector(state => state.posts.count);
  const type_post_id = useSelector(state => state.posts.type_post_id);

  const dispatch = useDispatch();

  function handleExit() {
    dispatch(singOut());
  }

  function handleFind(id) {
    dispatch(requestPosts(1, id));
  }

  return (
    <Container className="content">
      <Link to="/posts">
        <strong className="logo">Wiki</strong>
      </Link>

      <nav>
        {postsCount.map(post => (
          <button
            type="button"
            className={`${
              type_post_id && type_post_id === post.id ? 'active' : ''
            }`}
            key={post.id}
            onClick={() => handleFind(post.id)}
          >
            <strong>{post.count}</strong>
            <span>{post.title}</span>
          </button>
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
