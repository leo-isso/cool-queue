import * as types from '../types'

export const addPendingJob = (job) => {
  return {
    type: types.QUEUE_ADD_PENDING_JOB,
    payload: job
  }
}

export const removePendingJob = (job) => {
  return {
    type: types.QUEUE_REMOVE_PENDING_JOB,
    payload: job
  }
}

export const addPendingItemToWorking = (job) => {
  return {
    type: types.ADD_PENDING_ITEM_TO_WORKING,
    payload: job
  }
}
