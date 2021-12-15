import { put, takeEvery } from 'redux-saga/effects'

import * as types from '../types'
import { incrementCompletedSize } from '../actions/completedSize'

function * addCompletedSaga (action) {
  try {
    yield put({ type: types.QUEUE_ADD_COMPLETED_JOB_SUCCESS, payload: action.payload })
    yield put(incrementCompletedSize())
  } catch (error) {
    const { message } = error
    yield put({ type: types.QUEUE_ADD_COMPLETED_JOB_FAIL, payload: { message } })
  }
}

function * pendingQueueSaga () {
  yield takeEvery(types.QUEUE_ADD_COMPLETED_JOB, addCompletedSaga)
}

export default pendingQueueSaga
