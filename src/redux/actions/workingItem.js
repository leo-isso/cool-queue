import * as types from '../types'

export const addWorkingItem = (job) => {
  return {
    type: types.QUEUE_ADD_WORKING_JOB,
    payload: job
  }
}

export const removeWorkingItem = (job) => {
  return {
    type: types.QUEUE_REMOVE_WORKING_JOB,
    payload: job
  }
}

export const clearWorkingItem = () => {
  return {
    type: types.CLEAR_WORKING_JOB
  }
}
