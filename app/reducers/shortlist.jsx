const defaultState = new Set()

const shortlist = (state=defaultState, action) => {
  switch (action.type){
    case "ADD_TO_SET":
      return [...state, ...action.cells]
    case "MAKE_SET":
      return action.set
    default:
      return state
  }
}


export default shortlist
