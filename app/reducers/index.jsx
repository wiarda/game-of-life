import {combineReducers} from 'redux'
import cells from './cells.jsx'
import speed from './speed.jsx'
import boardsize from './boardsize.jsx'
import shortlist from './shortlist.jsx'
import buttons from './buttons.jsx'

const lifeApp = combineReducers({
  cells
  ,speed
  ,boardsize
  ,shortlist
  ,buttons
})

export default lifeApp
