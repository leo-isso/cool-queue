import * as types from '../types'

const initialState = []

const addCompletedJobSuccess = (state, action) => {
  return [...state, action.payload.item]
}

export default function completedReducer (state = initialState, action) {
  switch (action.type) {
    case types.REMOVE_PENDING_ITEM_SUCCESS:
    case types.ADD_COMPLETED_ITEM_SUCCESS:
    case types.REMOVE_WORKING_ITEM_SUCCESS:
      return addCompletedJobSuccess(state, action)

    default:
      return state
  }
}
