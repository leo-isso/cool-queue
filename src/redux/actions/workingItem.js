import * as types from '../types'

export const addWorkingJob = (job) => {
  return {
    type: types.QUEUE_ADD_WORKING_JOB,
    payload: job
  }
}

export const removeWorkingJob = (job) => {
  return {
    type: types.QUEUE_REMOVE_WORKING_JOB,
    payload: job
  }
}
