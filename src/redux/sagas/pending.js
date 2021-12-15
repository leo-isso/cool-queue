import { put, select, takeEvery } from 'redux-saga/effects'

import * as types from '../types'
import createJob from '../../services/createJob'
import updateJob from '../../services/updateJob'
import { decrementSize, incrementSize } from '../actions/size'
import { setEmpty, unsetEmpty } from '../actions/empty'
import { addCompletedJob } from '../actions/completed'

function * addPendingItem (action) {
  try {
    const item = yield createJob(action.payload)
    yield put({ type: types.ADD_PENDING_ITEM_SUCCESS, payload: item })
    yield put(incrementSize())
    yield put(unsetEmpty())
  } catch (error) {
    const { message } = error
    yield put({ type: types.ADD_PENDING_ITEM_FAIL, payload: { message } })
  }
}

function * removePendingItem (action) {
  try {
    const item = yield updateJob(action.payload, { status: 'cancelled' })
    yield put({ type: types.REMOVE_PENDING_ITEM_SUCCESS, payload: item })
    yield put(decrementSize())
    yield put(addCompletedJob(item))
    const size = yield select((state) => state.size)
    if (size === 0) {
      yield put(setEmpty())
    }
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
