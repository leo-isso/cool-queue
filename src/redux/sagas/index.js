import { all } from 'redux-saga/effects'

import completedSaga from './completed'
import pendingSaga from './pending'
import workingJobSaga from './workingJob'

export default function * rootSaga () {
  yield all([
    completedSaga(),
    pendingSaga(),
    workingJobSaga()
  ])
}
