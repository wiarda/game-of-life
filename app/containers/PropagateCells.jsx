import React from 'react'
import {connect} from 'react-redux'
import Cells from '../components/Cells.jsx'
import {spawnCell} from '../actions/actions.jsx'

const mapStateToProps = state => {
  return{
    cellState: state.cells
    ,cssRuleName: state.boardsize.cssRuleName
    ,cellArray: state.boardsize.cellArray
  }
}

const mapDispatchToProps = dispatch => {
  return{
    cellClick: (e) => {dispatch(spawnCell(e.target.id))}
  }
}

const PropagateCells = connect(mapStateToProps,mapDispatchToProps)(Cells)

export default PropagateCells
