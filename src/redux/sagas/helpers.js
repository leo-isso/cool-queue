import { select } from 'redux-saga/effects'

export function * calculateSize (subtract = false) {
  const { pending, working_item: workingItem } = yield select((state) => state)
  const total = pending.length + (subtract ? -1 : 1) + (workingItem ? 1 : 0)
  return total
}
