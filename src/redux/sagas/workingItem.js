import { call, put, takeEvery } from 'redux-saga/effects'

import * as types from '../types'
import updateJob from '../../services/updateJob'
import inProgressJob from '../../services/inProgressJob'
import inProgressJobSpy from '../../services/inProgressJobSpy'
import { addCompletedJob } from '../actions/completed'
import { addWorkingItemSuccess, clearWorkingItem } from '../actions/workingItem'
import { decrementSize } from '../actions/size'

const spy = inProgressJobSpy

function * addWorkingItem (action) {
  try {
    const item = yield updateJob(action.payload, { status: 'working' })
    yield put(addWorkingItemSuccess(item))
    yield call(inProgressJob, item, spy)
    const finishedItem = yield updateJob(action.payload, { status: 'finished' })
    yield put(clearWorkingItem())
    yield put(addCompletedJob(finishedItem))
  } catch (error) {
    const { message } = error
    yield put({ type: types.ADD_WORKING_ITEM_FAIL, payload: { message } })
  }
}

function * removeWorkingItem (action) {
  try {
    yield spy.stopInterval()
    const item = yield updateJob(action.payload, { status: 'cancelled' })
    yield put(clearWorkingItem())
    yield put(decrementSize())
    yield put(addCompletedJob(item))
  } catch (error) {
    const { message } = error
    yield put({
      type: types.REMOVE_WORKING_ITEM_FAIL,
      payload: { message }
    })
  }
}

function * workingItemSaga () {
  yield takeEvery(types.ADD_WORKING_ITEM, addWorkingItem)
  yield takeEvery(types.REMOVE_WORKING_ITEM, removeWorkingItem)
}

export default workingItemSaga
