// import * as types from '../types'

const initialState = null

// const addCompletedJobSuccess = (state, action) => {
//   return [...state, action.payload]
// }

export default function workingItemReducer (state = initialState, action) {
  switch (action.type) {
    // case types.QUEUE_ADD_COMPLETED_JOB_SUCCESS:
    //   return addCompletedJobSuccess(state, action)

    default:
      return state
  }
}
