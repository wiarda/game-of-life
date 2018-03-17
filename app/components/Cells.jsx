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

function CellsList(props){
    console.log("Generating CellsList from:")
    console.log(props)
    let boardElements = props.cellArray.map(function(key){
        return (
            <Cell
              key={key}
              cellId = {key}
              cellClick = {props.cellClick}
              cellState = {props.cellState[key]}
              cssRuleName = {props.cssRuleName}
            />
          )
        })

    return(
      <React.Fragment>{boardElements}</React.Fragment>
        )
}

//populates the game board with cells and displays their life-state
export default class Cells extends React.Component{
  constructor(props){
    super(props)
    this.generateStyle.bind(this)
    this.generateStyle(props)
  }

  componentWillReceiveProps(nextProps){
    console.log("Cells receiving props:")
    console.log(nextProps)
    if (nextProps.xCells != this.props.xCells || nextProps.yCells != this.props.yCells){
      this.generateStyle(nextProps)
    }
  }


  //styling for current board size
  generateStyle(props){
    console.log("generating style")
    let borderFactor = .25
    this.cssRuleName = 'cell-' + props.xCells + props.yCells
    let divisor = parseInt(props.xCells) + props.xCells*borderFactor
    let cellWidth = 100/divisor
    this.cssRule = `.${this.cssRuleName} {
      width: ${cellWidth}%;
      padding-top:${cellWidth}%;
      margin:${cellWidth*borderFactor/2}%;
    }`

    document.styleSheets[0].insertRule(this.cssRule,document.styleSheets[0].cssRules.length)
  }


  render(){
    return(
      <CellsList
        cellArray={this.props.cellArray}
        cellClick={this.props.cellClick}
        cellState = {this.props.cellState}
        cssRuleName = {this.cssRuleName}
      />
    )
  }
} // end Cells
