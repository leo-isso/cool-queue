import * as types from '../types'

const initialState = 0

export default function sizeReducer (state = initialState, action) {
  switch (action.type) {
    case types.ADD_PENDING_ITEM_SUCCESS:
      return state + 1

    case types.REMOVE_PENDING_ITEM_SUCCESS:
    case types.REMOVE_WORKING_ITEM_SUCCESS:
      return state - 1

    default:
      return state
  }
}
