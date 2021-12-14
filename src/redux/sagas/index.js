import { all } from 'redux-saga/effects'
import pendingQueueSaga from './pendingQueue'
import workingJobSaga from './workingJob'

export default function * rootSaga () {
  yield all([
    pendingQueueSaga(),
    workingJobSaga()
  ])
}
