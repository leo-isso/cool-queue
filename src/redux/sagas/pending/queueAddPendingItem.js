import { put, takeEvery } from 'redux-saga/effects'

import * as types from '../../types'
import createJob from '../../../services/createJob'

function * queueAddPendingJob (action) {
  try {
    const item = yield createJob(action.payload)
    console.log(item)
  } catch (error) {
    const { message } = error
    yield put({ type: types.QUEUE_ADD_PENDING_JOB_FAIL, payload: { message } })
  }
}

function * pendingQueueSaga () {
  yield takeEvery(types.QUEUE_ADD_PENDING_JOB, queueAddPendingJob)
}

export default pendingQueueSaga
