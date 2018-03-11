import React from 'react'
import { connect } from 'react-redux'
import { changeSpeed, pauseGame, playGame } from '../actions/actions.jsx'


const mapStateToProps = state => {
  return {
    currentSpeed: state.speed.current
    ,lastSpeed: state.speed.last
    ,simulation: state.speed.simulation
    ,xCells: state.boardSize[0]
    ,yCells: state.boardSize[1]
  }
}


function mapDispatchToProps(){
  return {
    pauseClick
    ,playClick
    ,changeSpeedClick
    ,changeBoardSizeClick
  }
}


export default function ControlPanel({
  currentSpeed
  ,lastSpeed
  ,simulation
  ,xCells
  ,yCells
  ,pauseClick
  ,playClick
  ,changeSpeedClick
  ,changeBoardSizeClick
  }){
  return (
      <div className="row p-3">
        <div className="mx-auto mb-3">

          <Button
            buttonName="Play"
            clickHandler={()=>console.log("button clicked")}
            styles="button-play"
          />
          <Button
            buttonName="1"
            clickHandler={()=>console.log("button clicked")}
            styles="button-speed"
          />
          <Button
            buttonName="2"
            clickHandler={()=>console.log("button clicked")}
            styles="button-speed"
          />
          <Button
            buttonName="3"
            clickHandler={()=>console.log("button clicked")}
            styles="button-speed"
          />

          <div className="text-center mt-5">Speed: {props.speed}</div>

        </div>
      </div>
  )
}


function Button({clickHandler,buttonName,styles}){
  return(
    <span
      className={"button px-3 py-2 mx-1" + (styles ? " " + styles : "")}
      onClick={clickHandler}
    >
      {buttonName}
    </span>
  )
}




//connect mapStateToProps and mapDispatchToProps to the
//presentational component that the container is passing info to
//then export it as reference

// const controls = (){
//
// }
//
//
//
// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//     case 'SHOW_ALL':
//     default:
//       return todos
//   }
// }
//
//
//
// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)
//
// export default VisibleTodoList
