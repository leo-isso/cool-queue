import * as types from '../types'

export const addCompletedJob = (job) => {
  return {
    type: types.ADD_COMPLETED_ITEM,
    payload: job
  }
}
