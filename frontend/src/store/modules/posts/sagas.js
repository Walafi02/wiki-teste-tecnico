import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  requestPosts,
  successPosts,
  addCountPosts,
  delCountPosts,
  setCurrentPage,
  setLoading,
  setTotalPages,
  setTypePostId,
} from './actions';

import api from '~/services/api';
import history from '../../../services/history';

export function* reqPosts({ payload }) {
  const { page, type_post_id } = payload;
  yield put(setLoading(true));
  yield put(setCurrentPage(page));
  try {
    const { data } = yield call(
      api.get,
      `posts?page=${payload.page}${
        type_post_id ? `&type_post_id=${type_post_id}` : ''
      }`,
      {}
    );

    yield put(successPosts(data.docs));
    yield put(setTotalPages(data.pages));
    yield put(setTypePostId(type_post_id));
  } catch (error) {
    toast.error('Falha ao buscar posts!');
  } finally {
    yield put(setLoading(false));
  }
}

export function* createPostRequest({ payload }) {
  try {
    yield call(api.post, 'posts', payload);
    yield put(addCountPosts(payload.type_post_id));
    history.push('/posts');
    toast.success('Sucesso ao criar posts!');
  } catch (error) {
    toast.error('Falha ao buscar posts!');
  }
}

export function* updatePostRequest({ payload }) {
  const { id, title, type_post_id, content, file_id, oldType } = payload;
  try {
    yield call(api.put, `posts/${id}`, {
      title,
      type_post_id,
      content,
      file_id,
    });

    if (oldType !== type_post_id) {
      yield put(addCountPosts(type_post_id));
      yield put(delCountPosts(oldType));
    }

    history.push('/posts');
    toast.success('Sucesso ao editar posts!');
  } catch (error) {
    toast.error('Falha ao buscar posts!');
  }
}

export function* deletePostRequest({ payload }) {
  const {
    id,
    type_post_id,
    count,
    currentPage,
    type_post_id_selected,
  } = payload;
  try {
    yield call(api.delete, `posts/${id}`);
    yield put(delCountPosts(type_post_id));
    yield put(
      requestPosts(
        count === 1 && currentPage > 1 ? currentPage - 1 : currentPage,
        type_post_id_selected
      )
    );
  } catch (error) {
    toast.error('Falha ao buscar posts!');
  }
}

export default all([
  takeLatest('@post/REQUEST_POST', reqPosts),
  takeLatest('@post/CREATE_POST_REQUEST', createPostRequest),
  takeLatest('@post/UPDATE_POST_REQUEST', updatePostRequest),
  takeLatest('@post/DELETE_POST_REQUEST', deletePostRequest),
]);
