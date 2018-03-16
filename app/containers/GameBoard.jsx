import React from 'react'
import {connect} from 'react-redux'
import Board from '../components/Board.jsx'
import {spawnCell, updateCells} from '../actions/actions.jsx'


const mapStateToProps = state => {
  return {
    cellState: state.cells
    ,speed: state.speed.current
    ,boardsize: state.boardsize
  }
}

const mapDispatchToProps = dispatch => {
  return{
    cellClick: (e) => {dispatch(spawnCell(e.target.id))}
    ,updateCells: (newState) => {dispatch(updateCells(newState))}
  }
}

const GameBoard = connect(mapStateToProps,mapDispatchToProps)(Board)

export default GameBoard
