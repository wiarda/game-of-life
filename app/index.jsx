import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import css from "./index.scss"
import lifeApp from './reducers/index.jsx'
import speed from './reducers/speed.jsx'
import App from './components/App.jsx'


let store = createStore(lifeApp)

document.addEventListener("DOMContentLoaded", function(){
  render(
    <Provider store={store}>
      <App />
    </Provider>
    ,document.getElementById("root")
  )
})
