import { all } from 'redux-saga/effects'
import pendingQueueSaga from './pendingQueue'

export default function * rootSaga () {
  yield all([
    pendingQueueSaga()
  ])
}
