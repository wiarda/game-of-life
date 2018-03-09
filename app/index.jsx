import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
// import {life} from './reducers'
import {App} from './components/app.jsx'

// let store = createStore(life)

render(
  // <Provider store={store}>
    <App />
  // </Provider>
  ,document.getElementById("root")
)
