import { all } from 'redux-saga/effects'
import pendingQueueSaga from './pending/queueAddPendingItem'

export default function * rootSaga () {
  yield all([
    pendingQueueSaga()
  ])
}
