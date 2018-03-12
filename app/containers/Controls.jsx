import React from 'react'
import { connect } from 'react-redux'
import { changeSpeed, pauseGame, playGame } from '../actions/actions.jsx'
import ControlPanel from '../components/ControlPanel.jsx'



const mapStateToProps = state => {
  return {
    currentSpeed: state.speed.current
    ,lastSpeed: state.speed.last
    ,simulation: state.speed.simulation
    ,xCells: state.cells.xCells
    ,yCells: state.cells.yCells
  }
}


const mapDispatchToProps = dispatch => {
  return {
    pauseClick: () => {dispatch(pauseGame())}
    ,playClick: () => {dispatch(playGame())}
    ,changeSpeedClick: (speed) => {dispatch(changeSpeed(speed))}
    // ,changeBoardSizeClick
  }
}

const Controls = connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
export default Controls
