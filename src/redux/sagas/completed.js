import { put, takeEvery } from 'redux-saga/effects'

import * as types from '../types'
import { incrementCompletedSize } from '../actions/completedSize'

function * addCompletedSaga (action) {
  try {
    yield put({ type: types.ADD_COMPLETED_ITEM_SUCCESS, payload: action.payload })
    yield put(incrementCompletedSize())
  } catch (error) {
    const { message } = error
    yield put({ type: types.ADD_COMPLETED_ITEM_FAIL, payload: { message } })
  }
}

function * pendingQueueSaga () {
  yield takeEvery(types.ADD_COMPLETED_ITEM, addCompletedSaga)
}

export default pendingQueueSaga
