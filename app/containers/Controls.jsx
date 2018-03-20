import React from 'react'
import { connect } from 'react-redux'
import { changeSpeed, pauseGame, changeBoardSize } from '../actions/actions.jsx'
import ControlPanel from '../components/ControlPanel.jsx'



const mapStateToProps = state => {
  return {
    currentSpeed: state.speed.current
    ,lastSpeed: state.speed.last
    ,simulation: state.speed.simulation
    ,xCells: state.boardsize.xCells
    ,yCells: state.boardsize.yCells
  }
}


const mapDispatchToProps = dispatch => {
  return {
    pauseClick: () => {dispatch(pauseGame())}
    ,changeSpeedClick: (speed) => {dispatch(changeSpeed(speed))}
    ,changeBoardSizeClick: (x,y) => {dispatch(changeBoardSize(x,y))}
  }
}

const Controls = connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
export default Controls
