import { call, put, select, takeEvery } from 'redux-saga/effects'

import * as types from '../types'
import updateJob from '../../services/updateJob'
import inProgressJob from '../../services/inProgressJob'
import inProgressJobSpy from '../../services/inProgressJobSpy'
import { addCompletedJob } from '../actions/completed'
import { addWorkingItemSuccess, clearWorkingItem, removeWorkingItemSuccess } from '../actions/workingItem'

const spy = inProgressJobSpy

function * addWorkingItem (action) {
  try {
    const item = yield updateJob(action.payload, { status: 'working' })
    yield put(addWorkingItemSuccess(item))
    yield call(inProgressJob, item, spy)
    const finishedItem = yield updateJob(item, { status: 'finished' })
    yield put(addCompletedJob(finishedItem))
    const { pending, working_item: workingItem } = yield select((state) => state)
    const total = pending.length - 1 + (workingItem ? 1 : 0)
    yield put(clearWorkingItem(total))
  } catch (error) {
    const { message } = error
    yield put({ type: types.ADD_WORKING_ITEM_FAIL, payload: { message } })
  }
}

function * removeWorkingItem (action) {
  try {
    yield spy.stopInterval()
    const item = yield updateJob(action.payload, { status: 'cancelled' })
    const { pending, working_item: workingItem } = yield select((state) => state)
    const total = pending.length - 1 + (workingItem ? 1 : 0)
    yield put(removeWorkingItemSuccess(item, total))
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
