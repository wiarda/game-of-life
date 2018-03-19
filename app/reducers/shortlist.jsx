const defaultState = new Set()

const shortlist = (state=defaultState, action) => {
  switch (action.type){
    case "ADD_TO_SET":
      return new Set ([...state, ...action.cells])
    case "MAKE_SET":
      return new Set(action.cells)
    default:
      return state
  }
}


export default shortlist
