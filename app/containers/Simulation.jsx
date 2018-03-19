import React from 'react'
import {connect} from 'react-redux'
import SimulateLife from '../components/SimulateLife.jsx'
import {spawnCell, updateCells, setLayout, addToSet, makeSet, pauseGame} from '../actions/actions.jsx'


const mapStateToProps = state => {
  return {
    cellState: state.cells
    ,speed: state.speed.current
    ,generationObject: state.boardsize.generationObject
    ,cellsOfInterest: state.shortlist
  }
}

const mapDispatchToProps = dispatch => {
  return{
    updateCells: (newState) => {dispatch(updateCells(newState))}
    ,makeSet: (cells) => {dispatch(makeSet(cells))}
    ,pause: () => {dispatch(pauseGame())}
  }
}

const Simulation = connect(mapStateToProps,mapDispatchToProps)(SimulateLife)

export default Simulation
