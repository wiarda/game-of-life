import React from 'react'


function Board(props){

  return(
    <div className="container-fluid gameboard-container">
      <div className="row">
        <div className="col-0 col-sm-1 col-lg-2"/>

        <div className="col-12 col-sm-10 col-lg-8">
          <Cells
            xCells={10}
            yCells={10}
          />
        </div>

        <div className="col-0 col-sm-1 col-lg-2"/>
      </div>
    </div>
  )
}

export default Board


//populates the game board with cells and displays their life-state
function Cells(props){
  let boardArray = []
  let cssRuleName = 'cell' + props.xCells + props.yCells
  let cellWidth = 100/props.yCells - 0.5
  console.log("cell width: " + cellWidth)
  let cellHeight = 100/props.xCells - 0.5
  console.log("cell height: " + cellHeight)

  let cssRule = "." + cssRuleName + "{width:" + cellWidth + "%; padding-top:" + cellHeight + "%;}"
  document.styleSheets[0].insertRule(cssRule,document.styleSheets[0].cssRules.length)
  // console.log(document.styleSheets[0].cssRules)


  console.log(props.yCells)
  console.log(props.xCells)
  console.log(cssRuleName)

  for (let y = 1; y<= props.yCells;++y){
    let rowContents = []

    for (let x =1; x<=props.xCells;++x){
      let cell = (
        <div
          key={String(x) + String(y)}
          className={"life-cell " + cssRuleName}
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

  console.log(boardArray)
  return(
    <React.Fragment>
      {boardArray}
    </React.Fragment>
  )

}
