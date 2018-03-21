import React from 'react'
import { connect } from 'react-redux'
import { changeSpeed, pauseGame, changeBoardSize, randomizeBoard, resetBoard, toggleButtonState } from '../actions/actions.jsx'
import ControlPanel from '../components/ControlPanel.jsx'



const mapStateToProps = state => {
  return {
    currentSpeed: state.speed.current
    ,simulation: state.speed.simulation
    ,xCells: state.boardsize.xCells
    ,yCells: state.boardsize.yCells
    ,buttonState: state.buttons
  }
}


const mapDispatchToProps = dispatch => {
  return {
    pauseClick: () => {dispatch(pauseGame())}
    ,changeSpeedClick: (speed) => {dispatch(changeSpeed(speed))}
    ,changeBoardSizeClick: (x,y) => {dispatch(changeBoardSize(x,y))}
    ,randomizeBoard: () => {dispatch(randomizeBoard(true))}
    ,resetBoard: () =>{dispatch(resetBoard(true))}
    ,turnOffButtonSwitch: () => {dispatch(toggleButtonState(false))}
  }
}

const Controls = connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
export default Controls
