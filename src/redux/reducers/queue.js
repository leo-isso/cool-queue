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
    case types.ADD_WORKING_ITEM_SUCCESS:
      return queueAddWorkingJobSuccess(state, action)

    case types.REMOVE_WORKING_ITEM_SUCCESS:
      return queueRemoveWorkingJobSuccess(state, action)

    case types.UPDATE_WORKING_ITEM:
      return queuUpdateWorkingJob(state, action)

    default:
      return state
  }
}
