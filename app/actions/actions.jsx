
export const changeSpeed = int => {
  return {
    type: 'CHANGE_SPEED',
    int
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

// {type: "TOGGLE_CELL", id: [xxxyyy]}
// {type: "CHANGE_SPEED", speed:"0" //0-3
// {type: "CHANGE_BOARD_SIZE", size:[XXX,YYY]}
