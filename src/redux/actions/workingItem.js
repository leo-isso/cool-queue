import * as types from '../types'

export const addWorkingItem = (job) => {
  return {
    type: types.ADD_WORKING_ITEM,
    payload: job
  }
}

export const removeWorkingItem = (job) => {
  return {
    type: types.REMOVE_WORKING_ITEM,
    payload: job
  }
}

export const clearWorkingItem = () => {
  return {
    type: types.CLEAR_WORKING_ITEM
  }
}
