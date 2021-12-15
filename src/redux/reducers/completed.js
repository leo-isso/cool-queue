import * as types from '../types'

const initialState = []

const addCompletedJobSuccess = (state, action) => {
  return [...state, action.payload]
}

export default function completedReducer (state = initialState, action) {
  switch (action.type) {
    case types.ADD_COMPLETED_ITEM_SUCCESS:
      return addCompletedJobSuccess(state, action)

    default:
      return state
  }
}
