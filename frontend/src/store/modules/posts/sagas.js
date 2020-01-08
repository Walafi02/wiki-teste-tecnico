import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { successPosts } from './actions';

import api from '~/services/api';

export function* requestPosts() {
  try {
    const { data } = yield call(api.get, 'posts', {});
    yield put(successPosts(data.docs));
  } catch (error) {
    toast.error('Falha ao buscar posts!');
  }
}

export default all([takeLatest('@post/REQUEST_POST', requestPosts)]);
