import * as types from '../types'

export const addPendingJob = (item) => {
  return {
    type: types.ADD_PENDING_ITEM,
    payload: item
  }
}

export const addPendingJobSuccess = (item, total) => {
  return {
    type: types.ADD_PENDING_ITEM_SUCCESS,
    payload: {
      item,
      total
    }
  }
}

export const removePendingJob = (item) => {
  return {
    type: types.REMOVE_PENDING_ITEM_SUCCESS,
    payload: item
  }
}

export const removePendingJobSuccess = (item, total) => {
  return {
    type: types.ADD_PENDING_ITEM,
    payload: {
      item,
      total
    }
  }
}

export const addPendingItemToWorking = (item) => {
  return {
    type: types.ADD_PENDING_ITEM_TO_WORKING,
    payload: item
  }
}
