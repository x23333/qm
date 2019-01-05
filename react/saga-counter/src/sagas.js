import {put, takeEvery,all} from 'redux-saga/effects';

const dealy = (ms) => new Promise(res => setTimeout(res,ms))

export function* helloSaga() {
  console.log("lllllllllll")
}

export function* incrementASYNC() {
  yield dealy(1000);
  yield put({type: 'INCREMENT'});
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC',incrementASYNC);
}

export default function* rootSaga() {
  yield all(
    helloSaga(),
    watchIncrementAsync()
  )
}

