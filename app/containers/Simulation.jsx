import React from 'react'
import {connect} from 'react-redux'
import SimulateLife from '../components/SimulateLife.jsx'
import {spawnCell, updateCells, setLayout, addToSet, makeSet, pauseGame, randomizeBoard, resetBoard, toggleButtonState} from '../actions/actions.jsx'


const mapStateToProps = state => {
  return {
    cellState: state.cells
    ,cellArray: state.boardsize.cellArray
    ,speed: state.speed.current
    ,generationObject: state.boardsize.generationObject
    ,cellsOfInterest: state.shortlist
    ,randomizeSwitch: state.boardsize.randomize
    ,resetSwitch: state.boardsize.reset
  }
}

const mapDispatchToProps = dispatch => {
  return{
    updateCells: (newState) => {dispatch(updateCells(newState))}
    ,makeSet: (cells) => {dispatch(makeSet(cells))}
    ,pause: () => {dispatch(pauseGame())}
    ,randomizeOff: () => {dispatch(randomizeBoard(false))}
    ,resetOff: () => {dispatch(resetBoard(false))}
    ,turnOnButtonSwitch: () => {dispatch(toggleButtonState(true))}
  }
}

const Simulation = connect(mapStateToProps,mapDispatchToProps)(SimulateLife)

export default Simulation
