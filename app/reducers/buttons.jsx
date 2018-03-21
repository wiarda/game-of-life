const buttons = (state=false, action) => {
  switch (action.type){
    case "TOGGLE_BUTTON_STATE":
      return action.toggle
    default:
      return state
  }
}

export default buttons
