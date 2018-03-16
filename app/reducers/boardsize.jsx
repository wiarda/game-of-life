const boardsize = (state = {xCells:25, yCells:25, cellArray:[]}, action) => {
  switch (action.type){
    case 'CHANGE_BOARD_SIZE':
      return { ...state, xCells: action.xCells, yCells: action.yCells}
    case 'UPDATE_CELL_ARRAY':
      return {...state, cellArray: action.cellArray}
    default:
      return state
  }
}

export default boardsize
