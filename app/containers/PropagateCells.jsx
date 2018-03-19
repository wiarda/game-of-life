import React from 'react'
import {connect} from 'react-redux'
import Cells from '../components/Cells.jsx'
import {spawnCell, addToSet} from '../actions/actions.jsx'

const mapStateToProps = state => {
  return{
    cssRuleName: state.boardsize.cssRuleName
    ,cellArray: state.boardsize.cellArray
    ,generationObject: state.boardsize.generationObject
  }
}

const mapDispatchToProps = dispatch => {
  return{
    cellClick: (e) => {
      let el = document.getElementById(e.target.id).classList
      if (el.contains("cell-1") || el.contains("cell-2")){
        el.remove("cell-1","cell-2")
      }
      else{
        el.add("cell-1")
      }
      dispatch(spawnCell(e.target.id))
    }
    ,addToSet: (cell) => {dispatch(addToSet(cell))}
  }
}

const PropagateCells = connect(mapStateToProps,mapDispatchToProps)(Cells)

export default PropagateCells
