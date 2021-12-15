import * as types from '../types'

export const setEmpty = () => {
  return {
    type: types.SET_EMPTY
  }
}

export const unsetEmpty = () => {
  return {
    type: types.UNSET_EMPTY
  }
}
