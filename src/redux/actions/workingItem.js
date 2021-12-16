import * as types from '../types'

export const addWorkingItem = (item) => {
  return {
    type: types.ADD_WORKING_ITEM,
    payload: item
  }
}

export const addWorkingItemSuccess = (item) => {
  return {
    type: types.ADD_WORKING_ITEM_SUCCESS,
    payload: { item }
  }
}

export const removeWorkingItem = (item) => {
  return {
    type: types.REMOVE_WORKING_ITEM,
    payload: item
  }
}

export const removeWorkingItemSuccess = (item, total) => {
  return {
    type: types.REMOVE_WORKING_ITEM_SUCCESS,
    payload: {
      item,
      total
    }
  }
}

export const clearWorkingItem = (total) => {
  return {
    type: types.CLEAR_WORKING_ITEM,
    payload: { total }
  }
}

export const updateWorkingItem = (item) => {
  return {
    type: types.UPDATE_WORKING_ITEM,
    payload: item
  }
}
