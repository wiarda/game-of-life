const defaultArray = []

const boardsize = (state = {xCells:50, yCells:50, cellArray:defaultArray}, action) => {
  switch (action.type){
    case 'CHANGE_BOARD_SIZE':
      return { ...state, xCells: action.xCells, yCells: action.yCells}
    case 'SET_LAYOUT':
      return {...state, cellArray: action.cellArray, generationObject:action.generationObject, cssRuleName:action.cssRuleName}
    default:
      return state
  }
}

export default boardsize
