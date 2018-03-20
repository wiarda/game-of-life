const speed = (state = {current:0}, action) => {
  switch (action.type) {
    case 'CHANGE_SPEED':
      return {...state, current: action.speed}
    case 'PAUSE':
      return {...state, current: 0}
    default:
      return state
  }
}
 
export default speed
