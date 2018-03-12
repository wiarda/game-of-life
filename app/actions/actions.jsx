
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
  return {
    type: 'SPAWN'
    ,cellId
  }
}
