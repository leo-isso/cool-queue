import { call, put, takeEvery } from 'redux-saga/effects'

import * as types from '../types'
import createJob from '../../services/createJob'
import updateJob from '../../services/updateJob'

import { addPendingJobSuccess, removePendingJobSuccess } from '../actions/pending'
import { calculateSize } from './helpers'

function * addPendingItem (action) {
  try {
    const item = yield createJob(action.payload)
    const total = yield call(calculateSize, false)
    yield put(addPendingJobSuccess(item, total))
  } catch (error) {
    const { message } = error
    yield put({ type: types.ADD_PENDING_ITEM_FAIL, payload: { message } })
  }
}

function * removePendingItem (action) {
  try {
    const item = yield updateJob(action.payload, { status: 'canceled' })
    const total = yield call(calculateSize, true)
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
