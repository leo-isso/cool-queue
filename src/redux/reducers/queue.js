import * as types from '../types'

const initialState = {
  pending: [],
  completed: [],
  size: 0,
  empty: true,
  working_item: null
}

const queueAddPendingJobSuccess = (state, action) => ({
  ...state,
  pending: [...state.pending, action.payload],
  size: state.pending.length + 1,
  empty: false
})

const queueRemovePendingJobSuccess = (state, action) => ({
  ...state,
  pending: state.pending.filter((item) => item.id !== action.payload.id),
  completed: [...state.completed, action.payload],
  size: state.pending.length - 1,
  empty: state.pending.length - 1 === 0
})

export default function queueReducer (state = initialState, action) {
  switch (action.type) {
    case types.QUEUE_ADD_PENDING_JOB_SUCCESS:
      return queueAddPendingJobSuccess(state, action)

    case types.QUEUE_REMOVE_PENDING_JOB_SUCCESS:
      return queueRemovePendingJobSuccess(state, action)

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
