import * as types from '../types'

export const incrementSize = () => {
  return {
    type: types.INCREMENT_SIZE
  }
}

export const decrementSize = () => {
  return {
    type: types.DECREMENT_SIZE
  }
}
