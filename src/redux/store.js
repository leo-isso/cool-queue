import { compose, createStore } from 'redux'

import rootReducer from './reducers'

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(rootReducer)

export default store
