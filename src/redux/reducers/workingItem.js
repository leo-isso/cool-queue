import * as types from '../types'

const initialState = null

export default function workingItemReducer (state = initialState, action) {
  switch (action.type) {
    case types.QUEUE_ADD_WORKING_JOB_SUCCESS:
      return action.payload

    case types.CLEAR_WORKING_JOB:
      return null

    default:
      return state
  }
}
