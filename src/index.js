import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'
import GlobalStyle from './styles/GlobalStyle'
import { ModalProvider } from './contexts/Modals/Modal.context'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle/>
      <ModalProvider>
        <App />
      </ModalProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
