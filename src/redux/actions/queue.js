import * as types from '../types'

export const queueAddPendingJob = (job) => {
  return {
    type: types.ADD_PENDING_ITEM,
    payload: job
  }
}

export const queueRemovePendingJob = (job) => {
  return {
    type: types.REMOVE_PENDING_ITEM,
    payload: job
  }
}

export const queueAddWorkingJob = (job) => {
  return {
    type: types.ADD_WORKING_ITEM,
    payload: job
  }
}

export const queueRemoveWorkingJob = (job) => {
  return {
    type: types.REMOVE_WORKING_ITEM,
    payload: job
  }
}

export const queueUpdatWorkingJob = (job) => {
  return {
    type: types.UPDATE_WORKING_ITEM,
    payload: job
  }
}

export const queueAddCompletedJob = (job) => {
  return {
    type: types.ADD_COMPLETED_ITEM,
    payload: job
  }
}
