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
  size: state.pending.length,
  empty: state.pending.length === 0
})

const queueAddWorkingJobSuccess = (state, action) => ({
  ...state,
  pending: state.pending.filter((item) => item.id !== action.payload.id),
  working_item: action.payload
})

const queueRemoveWorkingJobSuccess = (state, action) => ({
  ...state,
  working_item: null,
  completed: [...state.completed, action.payload]
})

const queueAddCompletedJobSuccess = (state, action) => ({
  ...state,
  working_item: null,
  completed: [...state.completed, action.payload]
})

export default function queueReducer (state = initialState, action) {
  switch (action.type) {
    case types.QUEUE_ADD_PENDING_JOB_SUCCESS:
      return queueAddPendingJobSuccess(state, action)

    case types.QUEUE_REMOVE_PENDING_JOB_SUCCESS:
      return queueRemovePendingJobSuccess(state, action)

    case types.QUEUE_ADD_WORKING_JOB_SUCCESS:
      return queueAddWorkingJobSuccess(state, action)

    case types.QUEUE_REMOVE_WORKING_JOB_SUCCESS:
      return queueRemoveWorkingJobSuccess(state, action)

    case types.QUEUE_ADD_COMPLETED_JOB:
      return queueAddCompletedJobSuccess(state, action)
    default:
      return state
  }
}
