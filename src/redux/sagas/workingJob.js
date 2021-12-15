import { call, put, takeEvery } from 'redux-saga/effects'

import * as types from '../types'
import updateJob from '../../services/updateJob'
import inProgressJob from '../../services/inProgressJob'
import inProgressJobSpy from '../../services/inProgressJobSpy'

const spy = inProgressJobSpy

function * queueAddWorkingJob (action) {
  try {
    const item = yield updateJob(action.payload, { status: 'working' })
    yield put({ type: types.QUEUE_ADD_WORKING_JOB_SUCCESS, payload: item })
    yield call(inProgressJob, item, spy)
    const finishedItem = yield updateJob(action.payload, { status: 'finished' })
    yield put({ type: types.QUEUE_ADD_COMPLETED_JOB, payload: finishedItem })
  } catch (error) {
    const { message } = error
    yield put({ type: types.QUEUE_ADD_WORKING_JOB_FAIL, payload: { message } })
  }
}

function * queueRemoveWorkingJob (action) {
  try {
    yield spy.stopInterval()
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
