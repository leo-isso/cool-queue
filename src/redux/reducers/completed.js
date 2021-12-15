import * as types from '../types'

const initialState = []

const addCompletedJobSuccess = (state, action) => {
  return [...state, action.payload]
}

export default function completedReducer (state = initialState, action) {
  switch (action.type) {
    case types.QUEUE_ADD_COMPLETED_JOB:
      return addCompletedJobSuccess(state, action)

    default:
      return state
  }
}
