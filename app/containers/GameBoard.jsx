import React from 'react'
import {connect} from 'react-redux'
import Board from '../components/Board.jsx'
import {spawnCell} from '../actions/actions.jsx'


const mapStateToProps = state => {
  return {
    cellState: state.cells
  }
}

const mapDispatchToProps = dispatch => {
  return{
    cellClick: (cellId) => {dispatch(spawnCell(cellId))}
  }
}

const GameBoard = connect(mapStateToProps,mapDispatchToProps)(Board)

export default GameBoard
