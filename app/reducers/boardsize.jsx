const boardsize = (state = {xCells:25, yCells:25, cellArray:[]}, action) => {
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
