import { put, takeEvery } from 'redux-saga/effects'

import * as types from '../types'
import createJob from '../../services/createJob'
import updateJob from '../../services/updateJob'

function * queueAddPendingJob (action) {
  try {
    const item = yield createJob(action.payload)
    yield put({ type: types.QUEUE_ADD_PENDING_JOB_SUCCESS, payload: item })
  } catch (error) {
    const { message } = error
    yield put({ type: types.QUEUE_ADD_PENDING_JOB_FAIL, payload: { message } })
  }
}

function * queueRemovePendingJob (action) {
  try {
    const item = yield updateJob(action.payload, { status: 'cancelled' })
    yield put({ type: types.QUEUE_REMOVE_PENDING_JOB_SUCCESS, payload: item })
  } catch (error) {
    const { message } = error
    yield put({ type: types.QUEUE_REMOVE_PENDING_JOB_FAIL, payload: { message } })
  }
}

function * pendingQueueSaga () {
  yield takeEvery(types.QUEUE_ADD_PENDING_JOB, queueAddPendingJob)
  yield takeEvery(types.QUEUE_REMOVE_PENDING_JOB, queueRemovePendingJob)
}

export default pendingQueueSaga
