import * as types from '../types'

const initialState = true

export default function emptyReducer (state = initialState, action) {
  switch (action.type) {
    case types.UNSET_EMPTY:
      return false

    case types.SET_EMPTY:
      return true

    default:
      return state
  }
}
