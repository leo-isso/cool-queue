import * as types from '../types'

const initialState = null

const addWorkingItem = (state, action) => {
  return action.payload
}

export default function workingItemReducer (state = initialState, action) {
  switch (action.type) {
    case types.QUEUE_ADD_WORKING_JOB:
      return addWorkingItem(state, action)

    default:
      return state
  }
}
