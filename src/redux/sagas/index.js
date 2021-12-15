import { all } from 'redux-saga/effects'
import pendingSaga from './pending'
import workingJobSaga from './workingJob'

export default function * rootSaga () {
  yield all([
    pendingSaga(),
    workingJobSaga()
  ])
}
