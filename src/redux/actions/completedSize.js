import * as types from '../types'

export const incrementCompletedSize = () => {
  return {
    type: types.INCREMENT_COMPLETED_SIZE
  }
}

export const decrementCompletedSize = () => {
  return {
    type: types.DECREMENT_COMPLETED_SIZE
  }
}
