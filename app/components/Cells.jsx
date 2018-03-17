import React from 'react'

function Cell ({cellId, cellClick, cellState, cssRuleName}) {
  return(
    <span
      id={cellId}
      onClick={cellClick}
      className={`life-cell ${cssRuleName} cell-${cellState}`}
    />
  )
}

export default function Cells(props){
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
      // <React.Fragment>{boardElements}</React.Fragment>
      <div className="row">
        {boardElements}
      </div>
        )
}
