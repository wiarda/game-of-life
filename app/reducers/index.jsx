import {combineReducers} from 'redux'
import cells from './cells.jsx'
import speed from './speed.jsx'
import boardsize from './boardsize.jsx'
import shortlist from './shortlist.jsx'

const lifeApp = combineReducers({
  cells
  ,speed
  ,boardsize
  ,shortlist
})

export default lifeApp
