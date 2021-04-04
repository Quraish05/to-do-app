// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { LOGIN_ACTION } from './constants';

import { postRequest } from 'utils/request';
import history from 'utils/history';

var dayjs = require('dayjs');
var duration = require('dayjs/plugin/duration');
dayjs.extend(duration);

export function* loginSaga({ email, password }) {
  try {
    const response = yield call(postRequest, `https://reqres.in/api/login`, {
      email: email,
      password: password,
    });
    console.log(`RES of loginSaga`, response);

    if (response) {
      localStorage.setItem('token', response.token);
      history.push('/tasks');
    }
  } catch (err) {
    console.log(err);
  }
}

export default function* watchAll() {
  yield takeLatest(LOGIN_ACTION, loginSaga);
}
