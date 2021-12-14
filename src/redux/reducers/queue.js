import * as types from '../types'

const initialState = {
  pending: [],
  completed: [],
  size: 0,
  empty: true,
  working_item: null
}

export default function queueReducer (state = initialState, action) {
  switch (action.type) {
    case types.QUEUE_ADD_PENDING_JOB:
      return {
        ...state,
        pending: [...state.pending, action.payload],
        size: state.pending.length,
        empty: false
      }
    case types.QUEUE_REMOVE_PENDING_JOB:
      return {
        ...state,
        pending: state.pending.filter(item => item.id !== action.payload.id),
        completed: [...state.completed, action.payload],
        size: state.pending.length,
        empty: state.pending.length === 0
      }
    case types.QUEUE_ADD_WORKING_JOB:
      return {
        ...state,
        working_item: action.payload
      }
    case types.QUEUE_ADD_COMPLETED_JOB:
      return {
        ...state,
        working_item: null
      }
    default:
      return state
  }
}
