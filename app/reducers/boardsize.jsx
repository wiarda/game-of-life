const boardsize = (state = {xCells:25, yCells:25}, action) => {
  switch (action.type){
    case 'CHANGE_BOARD_SIZE':
      return { ...state, xCells: action.xCells, yCells: action.yCells}
    default:
      return state
  }
}

export default boardsize
