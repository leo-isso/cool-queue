import { all } from 'redux-saga/effects'

import completedSaga from './completed'
import pendingSaga from './pending'
import workingItemSaga from './workingItem'

export default function * rootSaga () {
  yield all([
    completedSaga(),
    pendingSaga(),
    workingItemSaga()
  ])
}
