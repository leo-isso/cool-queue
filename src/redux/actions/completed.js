import * as types from '../types'

export const addCompletedJob = (job) => {
  return {
    type: types.QUEUE_ADD_COMPLETED_JOB,
    payload: job
  }
}
