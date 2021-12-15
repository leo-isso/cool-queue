import * as types from '../types'

const initialState = {
  pending: [],
  completed: [],
  size: 0,
  empty: true,
  working_item: null
}

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

const queuUpdateWorkingJob = (state, action) => ({
  ...state,
  working_item: { ...state.working_item, ...action.payload }
})

export default function queueReducer (state = initialState, action) {
  switch (action.type) {
    case types.QUEUE_ADD_WORKING_JOB_SUCCESS:
      return queueAddWorkingJobSuccess(state, action)

    case types.QUEUE_REMOVE_WORKING_JOB_SUCCESS:
      return queueRemoveWorkingJobSuccess(state, action)

    case types.QUEUE_UPDATE_WORKING_JOB:
      return queuUpdateWorkingJob(state, action)

    default:
      return state
  }
}
