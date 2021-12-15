import { combineReducers } from 'redux'

import completedReducer from './completed'
import completedSizeReducer from './completedSize'
import emptyReducer from './empty'
import pendingReducer from './pending'
import queue from './queue'
import sizeReducer from './size'

const rootReducer = combineReducers({
  completed: completedReducer,
  completedSize: completedSizeReducer,
  empty: emptyReducer,
  pending: pendingReducer,
  queue,
  size: sizeReducer
})

export default rootReducer
