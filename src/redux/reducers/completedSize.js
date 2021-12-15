import * as types from '../types'

const initialState = 0

export default function completedSizeReducer (state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT_SIZE:
      return state + 1

    case types.DECREMENT_SIZE:
      return state - 1

    default:
      return state
  }
}
