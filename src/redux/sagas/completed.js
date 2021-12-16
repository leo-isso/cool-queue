import { put, takeEvery } from 'redux-saga/effects'
import { addCompletedJobSuccess } from '../actions/completed'

import * as types from '../types'

function * addCompletedSaga (action) {
  try {
    yield put(addCompletedJobSuccess(action.payload))
  } catch (error) {
    const { message } = error
    yield put({ type: types.ADD_COMPLETED_ITEM_FAIL, payload: { message } })
  }
}

function * pendingQueueSaga () {
  yield takeEvery(types.ADD_COMPLETED_ITEM, addCompletedSaga)
}

export default pendingQueueSaga
