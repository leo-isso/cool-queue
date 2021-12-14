import * as types from '../types'

export const queueAddPendingItem = (item) => {
  return {
    type: types.QUEUE_ADD_PENDING_ITEM,
    payload: item
  }
}

export const queueRemovePendingItem = (item) => {
  return {
    type: types.QUEUE_REMOVE_PENDING_ITEM,
    payload: item
  }
}

export const queueAddWorkingItem = (item) => {
  return {
    type: types.QUEUE_ADD_WORKING_ITEM,
    payload: item
  }
}

export const queueAddCompletedItem = (item) => {
  return {
    type: types.QUEUE_ADD_COMPLETED_ITEM,
    payload: item
  }
}
