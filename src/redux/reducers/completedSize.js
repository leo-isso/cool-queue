import * as types from '../types'

const initialState = 0

export default function completedSizeReducer (state = initialState, action) {
  switch (action.type) {
    case types.REMOVE_PENDING_ITEM_SUCCESS:
      return state + 1

    default:
      return state
  }
}
