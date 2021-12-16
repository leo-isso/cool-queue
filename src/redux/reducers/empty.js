import * as types from '../types'

const initialState = true

export default function emptyReducer (state = initialState, action) {
  switch (action.type) {
    case types.ADD_PENDING_ITEM_SUCCESS:
    case types.REMOVE_PENDING_ITEM_SUCCESS:
    case types.CLEAR_WORKING_ITEM:
      return action.payload.total === 0

    default:
      return state
  }
}
