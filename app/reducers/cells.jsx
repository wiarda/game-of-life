const cells = (state = {xCells:25, yCells:25}, action) => {
  switch (action.type) {
    case 'SPAWN':
      if(!state[action.cellId] || state[action.cellId] === 0){
        return { ...state, [action.cellId]: 1 }
      }
      else { return {...state, [action.cellId]: 0} }
    case 'CHANGE_BOARD_SIZE':
      return { ...state, xCells: action.xCells, yCells: action.yCells}
    case 'UPDATE_CELLS':
      return { ...state, ...action.newState}
    default:
      return state
  }
}

export default cells
