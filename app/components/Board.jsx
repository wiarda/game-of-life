import React from 'react'
import SimulateLife from './SimulateLife.jsx'
import Cells from './Cells.jsx'

export default function Board({cellClick, cellState, speed, updateCells, boardsize}){
  return(


    <div className="container-fluid gameboard-container">

      {speed > 0 ?
        <SimulateLife
          cellState={cellState}
          updateCells={updateCells}
          speed={speed}
          boardSize={boardsize}
        /> :
        null
      }

      <div className="row">
        <div className="col-0 col-sm-1 col-lg-2"/>

        <div className="col-12 col-sm-10 col-lg-8">
          <Cells
            xCells={boardsize.xCells}
            yCells={boardsize.yCells}
            cellClick={cellClick}
            cellState={cellState}
          />
        </div>

        <div className="col-0 col-sm-1 col-lg-2"/>
      </div>
    </div>
  )
}
