import { put, select, takeEvery } from 'redux-saga/effects'

import * as types from '../types'
import createJob from '../../services/createJob'
import updateJob from '../../services/updateJob'
import { decrementSize, incrementSize } from '../actions/size'
import { setEmpty, unsetEmpty } from '../actions/empty'
import { addCompletedJob } from '../actions/completed'

function * addPendingJob (action) {
  try {
    const item = yield createJob(action.payload)
    yield put({ type: types.QUEUE_ADD_PENDING_JOB_SUCCESS, payload: item })
    yield put(incrementSize())
    yield put(unsetEmpty())
  } catch (error) {
    const { message } = error
    yield put({ type: types.QUEUE_ADD_PENDING_JOB_FAIL, payload: { message } })
  }
}

function * removePendingJob (action) {
  try {
    const item = yield updateJob(action.payload, { status: 'cancelled' })
    yield put({ type: types.QUEUE_REMOVE_PENDING_JOB_SUCCESS, payload: item })
    yield put(decrementSize())
    yield put(addCompletedJob(item))
    const size = yield select(state => state.size)
    if (size === 0) {
      yield put(setEmpty())
    }
  } catch (error) {
    const { message } = error
    yield put({ type: types.QUEUE_REMOVE_PENDING_JOB_FAIL, payload: { message } })
  }
}

function * pendingQueueSaga () {
  yield takeEvery(types.QUEUE_ADD_PENDING_JOB, addPendingJob)
  yield takeEvery(types.QUEUE_REMOVE_PENDING_JOB, removePendingJob)
}

export default pendingQueueSaga
