import * as types from '../types'

const initialState = []

const addPendingJobSuccess = (state, action) => {
  return [...state, action.payload]
}

const removePendingJobSuccess = (state, action) => {
  return state.filter((item) => item.id !== action.payload.id)
}

export default function pendingReducer (state = initialState, action) {
  switch (action.type) {
    case types.QUEUE_ADD_PENDING_JOB_SUCCESS:
      return addPendingJobSuccess(state, action)

    case types.QUEUE_REMOVE_PENDING_JOB_SUCCESS:
      return removePendingJobSuccess(state, action)

    default:
      return state
  }
}