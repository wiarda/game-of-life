import React from 'react'
import CellContainer from '../containers/CellContainer.jsx'

// class Cell extends React.Component{
//   constructor(props){
//     super(props)
//   }
//
//   shouldComponentUpdate(nextProps){
//     if (this.props.cellState != nextProps.cellState ||
//       this.props.cssRuleName != nextProps.cssRuleName){
//       return true
//     }
//     else {return false}
//   }
//
//   render(){
//     return(
//       <span
//         id={this.props.cellId}
//         onClick={this.props.cellClick}
//         className={`life-cell ${this.props.cssRuleName} cell-${this.props.cellState}`}
//       />
//     )
//   }
// }

// function Cell ({cellId, cellClick, cellState, cssRuleName}) {
//   console.log("internal cell render")
//   return(
//     <span
//       id={cellId}
//       onClick={cellClick}
//       className={`life-cell ${cssRuleName} cell-${cellState}`}
//     />
//   )
// }

export default class Cells extends React.Component{
  constructor(props){
    super(props)
    this.generateBoard = this.generateBoard.bind(this)
    this.generateBoard(props)
  }

  componentWillUpdate(nextProps){
    if (nextProps.cellArray.length != this.props.cellArray.length){
      this.generateBoard(nextProps)
    }
  }

  generateBoard(props){
    this.boardElements = props.cellArray.map(function(key){
      console.log("Board cell render")
        return (
            <CellContainer
              key={key}
              cellId = {key}
              cellClick = {props.cellClick}
              cssRuleName = {props.cssRuleName}
            />
          )
        })
        console.log(this.boardElements)
  }

  render(){
    return(
      <div className="container-fluid gameboard-container">
        <div className="row">

          <div className="col-0 col-sm-1 col-lg-2"/>

          <div className="col-12 col-sm-10 col-lg-8">
            <div className="row">
              {this.boardElements}
            </div>
          </div>

          <div className="col-0 col-sm-1 col-lg-2"/>

        </div>
      </div>
    )
  }
}




//
// Function version that generates CellList on every state update
// export default function Cells(props){
//     let boardElements = props.cellArray.map(function(key){
//       // console.log("cell render")
//         return (
//             <Cell
//               key={key}
//               cellId = {key}
//               cellClick = {props.cellClick}
//               cellState = {props.cellState[key]}
//               cssRuleName = {props.cssRuleName}
//             />
//           )
//         })
//
//     return(
//       <div className="container-fluid gameboard-container">
//         <div className="row">
//
//           <div className="col-0 col-sm-1 col-lg-2"/>
//
//           <div className="col-12 col-sm-10 col-lg-8">
//             <div className="row">
//               {boardElements}
//             </div>
//           </div>
//
//           <div className="col-0 col-sm-1 col-lg-2"/>
//
//         </div>
//       </div>
//     )
// }
