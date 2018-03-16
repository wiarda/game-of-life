import {combineReducers} from 'redux'
import cells from './cells.jsx'
import speed from './speed.jsx'
import boardsize from './boardsize.jsx'

const lifeApp = combineReducers({
  cells
  ,speed
  ,boardsize
})

export default lifeApp
