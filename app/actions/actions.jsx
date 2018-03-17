
export const changeSpeed = speed => {
  return {
    type: 'CHANGE_SPEED',
    speed
  }
}

export const pauseGame = () => {
  return {
    type: 'PAUSE'
  }
}

export const playGame = () => {
  return {
    type: 'PLAY'
  }
}

export const spawnCell = cellId => {
  console.log("clicked " + cellId)
  return {
    type: 'SPAWN'
    ,cellId
  }
}

export const changeBoardSize = (xCells,yCells) => {
  return {
    type: "CHANGE_BOARD_SIZE"
    ,xCells
    ,yCells
  }
}

export const updateCells = (newState) => {
  return{
    type: "UPDATE_CELLS"
    ,newState
  }
}

export const setLayout = (generationObject,cellArray,cssRuleName) =>{
  return{
    type: "SET_LAYOUT"
    ,generationObject
    ,cellArray
    ,cssRuleName
  }
}

// export const updateCellArray = (cellArray) => {
//   return{
//     type: "UPDATE_CELL_ARRAY"
//     ,cellArray
//   }
// }
