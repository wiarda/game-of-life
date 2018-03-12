import {combineReducers} from 'redux'
import cells from './cells.jsx'
import speed from './speed.jsx'

const lifeApp = combineReducers({
  cells
  ,speed
})

export default lifeApp
