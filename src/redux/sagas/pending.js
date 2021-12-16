import { put, select, takeEvery } from 'redux-saga/effects'

import * as types from '../types'
import createJob from '../../services/createJob'
import updateJob from '../../services/updateJob'

import { addPendingJobSuccess, removePendingJobSuccess } from '../actions/pending'

function * addPendingItem (action) {
  try {
    const item = yield createJob(action.payload)
    const { pending, working_item: workingItem } = yield select((state) => state)
    const total = pending.length + 1 + (workingItem ? 1 : 0)
    yield put(addPendingJobSuccess(item, total))
  } catch (error) {
    const { message } = error
    yield put({ type: types.ADD_PENDING_ITEM_FAIL, payload: { message } })
  }
}

function * removePendingItem (action) {
  try {
    const item = yield updateJob(action.payload, { status: 'cancelled' })
    const { pending, working_item: workingItem } = yield select((state) => state)
    const total = pending.length - 1 + (workingItem ? 1 : 0)
    yield put(removePendingJobSuccess(item, total))
  } catch (error) {
    const { message } = error
    yield put({
      type: types.REMOVE_PENDING_ITEM_FAIL,
      payload: { message }
    })
  }
}

function * pendingQueueSaga () {
  yield takeEvery(types.ADD_PENDING_ITEM, addPendingItem)
  yield takeEvery(types.REMOVE_PENDING_ITEM, removePendingItem)
}

export default pendingQueueSaga
