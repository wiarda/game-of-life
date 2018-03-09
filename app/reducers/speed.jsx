const speed = (state = {current:0,last:0}, action) => {

  switch (action.type) {
    case 'CHANGE_SPEED':
      return {...state, current: action.speed}
    case 'PAUSE':
      return {...state, current: 0, last: state.current}
    case 'PLAY':
      return {...state, current: state.last}
    default:
      return state
  }
}
 
export default speed
