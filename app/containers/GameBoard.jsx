import React from 'react'
import {connect} from 'react-redux'
import Board from '../components/Board.jsx'
import {spawnCell, updateCells, setLayout} from '../actions/actions.jsx'


const mapStateToProps = state => {
  return {
    cellState: state.cells
    ,speed: state.speed.current
    ,generationObject: state.boardsize.generationObject
  }
}

const mapDispatchToProps = dispatch => {
  return{
    updateCells: (newState) => {
      console.log("updating cell state")
      console.log(newState)
      dispatch(updateCells(newState))}
  }
}

const GameBoard = connect(mapStateToProps,mapDispatchToProps)(Board)

export default GameBoard
