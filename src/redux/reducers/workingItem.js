import * as types from '../types'

const initialState = null

export default function workingItemReducer (state = initialState, action) {
  switch (action.type) {
    case types.ADD_WORKING_ITEM_SUCCESS:
      return action.payload

    case types.CLEAR_WORKING_ITEM:
      return null

    default:
      return state
  }
}
