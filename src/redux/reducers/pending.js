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
    case types.ADD_PENDING_ITEM_SUCCESS:
      return addPendingJobSuccess(state, action)

    case types.REMOVE_PENDING_ITEM_SUCCESS:
      return removePendingJobSuccess(state, action)

    case types.ADD_PENDING_ITEM_TO_WORKING:
      return removePendingJobSuccess(state, action)

    default:
      return state
  }
}
