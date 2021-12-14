import { put, takeEvery } from 'redux-saga/effects'

import * as types from '../types'
import updateJob from '../../services/updateJob'

function * queueAddWorkingJob (action) {
  try {
    const item = yield updateJob(action.payload, { status: 'working' })
    yield put({ type: types.QUEUE_ADD_WORKING_JOB_SUCCESS, payload: item })
  } catch (error) {
    const { message } = error
    yield put({ type: types.QUEUE_ADD_WORKING_JOB_FAIL, payload: { message } })
  }
}

function * queueRemoveWorkingJob (action) {
  try {
    const item = yield updateJob(action.payload, { status: 'cancelled' })
    yield put({ type: types.QUEUE_REMOVE_WORKING_JOB_SUCCESS, payload: item })
  } catch (error) {
    const { message } = error
    yield put({
      type: types.QUEUE_REMOVE_WORKING_JOB_FAIL,
      payload: { message }
    })
  }
}

function * workingJobSaga () {
  yield takeEvery(types.QUEUE_ADD_WORKING_JOB, queueAddWorkingJob)
  yield takeEvery(types.QUEUE_REMOVE_WORKING_JOB, queueRemoveWorkingJob)
}

export default workingJobSaga
