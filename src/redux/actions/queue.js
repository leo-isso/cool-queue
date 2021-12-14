import * as types from '../types'

export const queueAddPendingJob = (job) => {
  return {
    type: types.QUEUE_ADD_PENDING_JOB,
    payload: job
  }
}

export const queueRemovePendingJob = (job) => {
  return {
    type: types.QUEUE_REMOVE_PENDING_JOB,
    payload: job
  }
}

export const queueAddWorkingJob = (job) => {
  return {
    type: types.QUEUE_ADD_WORKING_JOB,
    payload: job
  }
}

export const queueRemoveWorkingJob = (job) => {
  return {
    type: types.QUEUE_REMOVE_WORKING_JOB,
    payload: job
  }
}

export const queueAddCompletedJob = (job) => {
  return {
    type: types.QUEUE_ADD_COMPLETED_JOB,
    payload: job
  }
}
