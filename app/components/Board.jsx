import React from 'react'


export default function Board({cellClick, cellState}){

  return(
    <div className="container-fluid gameboard-container">
      <div className="row">
        <div className="col-0 col-sm-1 col-lg-2"/>

        <div className="col-12 col-sm-10 col-lg-8">
          <Cells
            xCells={cellState.xCells}
            yCells={cellState.yCells}
            cellClick={cellClick}
            cellState={cellState}
          />
        </div>

        <div className="col-0 col-sm-1 col-lg-2"/>
      </div>
    </div>
  )
}


//populates the game board with cells and displays their life-state
function Cells(props){
  let boardArray = []
  let borderFactor = .25
  let cssRuleName = 'cell-' + props.xCells + props.yCells
  let cellWidth = 100/(props.xCells + props.xCells * borderFactor)
  let cssRule = `.${cssRuleName} {
    width: ${cellWidth}%;
    padding-top:${cellWidth}%;
    margin:${cellWidth*borderFactor/2}%;
  }`

  document.styleSheets[0].insertRule(cssRule,document.styleSheets[0].cssRules.length)




  for (let y = 1; y<= props.yCells;++y){
    let rowContents = []

    for (let x =1; x<=props.xCells;++x){
      let cellId = String(x) + "-" + String(y)

      let cell = (
        <div
          key={cellId}
          id={cellId}
          onClick={e=>{
            console.log(e.target.id)
            props.cellClick(e.target.id)}
          }
          className={`life-cell cell-${props.cellState[cellId] ? props.cellState[cellId] : 0} ${cssRuleName}`}
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
