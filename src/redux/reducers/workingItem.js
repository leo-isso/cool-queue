import * as types from '../types'

const initialState = null

export default function workingItemReducer (state = initialState, action) {
  switch (action.type) {
    case types.ADD_WORKING_ITEM_SUCCESS:
      return action.payload.item

    case types.REMOVE_WORKING_ITEM_SUCCESS:
    case types.CLEAR_WORKING_ITEM:
      return null

    case types.UPDATE_WORKING_ITEM:
      return { ...state, ...action.payload }

    default:
      return state
  }
}
