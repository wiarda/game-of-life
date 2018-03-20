
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

export const addToSet = cells => {
  return {
    type: "ADD_TO_SET"
    ,cells
  }
}

export const makeSet = cells => {
  return {
    type: "MAKE_SET"
    ,cells
  }
}

export const randomizeBoard = toggle =>{
  console.log("toggling randomize to " + toggle)
  return {
    type: "TOGGLE_RANDOMIZE"
    ,toggle
  }
}

export const resetBoard = toggle =>{
  return {
    type: "RESET_BOARD"
    ,toggle
  }
}
