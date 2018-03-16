import React from 'react'

function Cell ({cellId, cellClick, cellState, cssRuleName}) {
  return(
    <div
      id={cellId}
      onClick={cellClick}
      className={`life-cell ${cssRuleName} cell-${cellState}`}
    />
  )
}


//populates the game board with cells and displays their life-state
export default class Cells extends React.Component{
  constructor(props){
    super(props)
    this.generateStyle.bind(this)
    this.generateBoard.bind(this)
    this.generateStyle(props)
    this.generateBoard(props)
  }

  componentWillReceiveProps(nextProps){
    console.log("Cells receiving props:")
    console.log(nextProps)
    if (nextProps.xCells != this.props.xCells || nextProps.yCells != this.props.yCells){
      this.generateStyle(nextProps)
    }
    else if (nextProps.cellArray != this.props.cellArray){
      console.log("new cell array received")
      console.log(nextProps.cellArray)
      this.generateBoard(nextProps)
    }
    else{console.log("no changes to the board")}
  }

  // shouldComponentUpdate(nextProps, nextState){
  //
  // }

  //styling for current board size
  generateStyle(props){
    console.log("generating style")
    // console.log(props)
    let borderFactor = .25
    this.cssRuleName = 'cell-' + props.xCells + props.yCells
    // console.log("calculating cell width")
    // console.log("x cell count: " + props.xCells)
    let divisor = parseInt(props.xCells) + props.xCells*borderFactor
    // console.log("divisor: " + divisor)
    let cellWidth = 100/divisor
    // console.log("cell width: " + cellWidth)
    this.cssRule = `.${this.cssRuleName} {
      width: ${cellWidth}%;
      padding-top:${cellWidth}%;
      margin:${cellWidth*borderFactor/2}%;
    }`

    document.styleSheets[0].insertRule(this.cssRule,document.styleSheets[0].cssRules.length)
  }

  generateBoard(nextProps){
    console.log("generating board")
    console.log(nextProps)
    this.boardElements = nextProps.cellArray.map(function(key){
        return (
            <Cell
              key={key}
              cellId = {key}
              cellClick = {nextProps.cellClick}
              cellState = {nextProps.cellState[key]}
              // ? this.props.cellState[key] : 0 }
              cssRuleName = {this.cssRuleName}
            />
          )
        },this)
    console.log(this.boardElements)
    }

    // let boardArray = []
    // for (let y = 1; y<= this.props.yCells;++y){
    // let rowContents = []
    //
    // for (let x =1; x<= this.props.xCells;++x){
    //   let cellId = String(x) + "-" + String(y)
    //
    //   let cell = (
    //     <div
    //       key={cellId}
    //       id={cellId}
    //       onClick={this.props.cellClick}
    //       className={`life-cell cell-${this.props.cellState[cellId] ? this.props.cellState[cellId] : 0} ${this.cssRuleName}`}
    //     />
    //   )
    //   rowContents.push(cell)
    // }
    //
    // let row = (
    //   <div
    //     className="row gameboard-row"
    //     key={y}
    //   >
    //     {rowContents}
    //   </div>
    // )
    //
    // boardArray.push(row)
    // }
    // return boardArray
  // }

  render(){
    return(
      <React.Fragment>
        {this.boardElements}
      </React.Fragment>
    )
  }
} // end Cells















// ***********

//populates the game board with cells and displays their life-state
class CellsV1 extends React.Component{
  constructor(props){
    super(props)
    this.generateStyle.bind(this)
    this.generateBoard.bind(this)
    this.generateStyle(props)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.xCells != this.props.xCells || nextProps.yCells != this.props.yCells){
      this.generateStyle(nextProps)
    }
    console.log("no change to board size")
  }

  // shouldComponentUpdate(nextProps, nextState){
  //
  // }

  generateStyle(props){
    console.log("generating style")
    console.log(props)
    let borderFactor = .25
    this.cssRuleName = 'cell-' + props.xCells + props.yCells
    console.log("calculating cell width")
    console.log("x cell count: " + props.xCells)
    let divisor = parseInt(props.xCells) + props.xCells*borderFactor
    console.log("divisor: " + divisor)
    let cellWidth = 100/divisor
    console.log("cell width: " + cellWidth)
    this.cssRule = `.${this.cssRuleName} {
      width: ${cellWidth}%;
      padding-top:${cellWidth}%;
      margin:${cellWidth*borderFactor/2}%;
    }`

    document.styleSheets[0].insertRule(this.cssRule,document.styleSheets[0].cssRules.length)
}

  generateBoard(){
    let boardArray = []
    for (let y = 1; y<= this.props.yCells;++y){
    let rowContents = []

    for (let x =1; x<= this.props.xCells;++x){
      let cellId = String(x) + "-" + String(y)

      let cell = (
        <div
          key={cellId}
          id={cellId}
          onClick={this.props.cellClick}
          className={`life-cell cell-${this.props.cellState[cellId] ? this.props.cellState[cellId] : 0} ${this.cssRuleName}`}
        />
      )
      rowContents.push(cell)
    }

    let row = (
      <div
        className="row gameboard-row"
        key={y}
      >
        {rowContents}
      </div>
    )

    boardArray.push(row)
    }
    return boardArray
  }

  render(){
    return(
      <React.Fragment>
        {this.generateBoard()}
      </React.Fragment>
    )
  }
} // end Cells
