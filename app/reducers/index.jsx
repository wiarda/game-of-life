import {combineReducers} from 'redux'
import cellState from './cellState.jsx'
import speed from './speed.jsx'
import boardSize from './boardSize.jsx'

const lifeApp = combineReducers({
  cellState
  ,speed
  ,boardSize
})

export default lifeApp
