const cells = (state = {xCells:25, yCells:25}, action) => {
  switch (action.type) {
    case 'SPAWN':
      if(!state[action.cellId] || state[action.cellId] === 0){
        return { ...state, [action.cellId]: 1 }
      }
      else { return {...state, [action.cellId]: 0} }
    case 'UPDATE_CELLS':
      return { ...state, ...action.newState}
    default:
      return state
  }
}

export default cells
