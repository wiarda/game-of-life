import React from 'react'
import SimulateLife from './SimulateLife.jsx'
import Cells from './Cells.jsx'

export default function Board({cellClick, cellState, speed, updateCells, boardsize, updateCellArray}){

  return(


    <div className="container-fluid gameboard-container">

      <SimulateLife
        cellState={cellState}
        updateCells={updateCells}
        updateCellArray={updateCellArray}
        speed={speed}
        xCells={boardsize.xCells}
        yCells={boardsize.yCells}
      />


      <div className="row">
        <div className="col-0 col-sm-1 col-lg-2"/>

        <div className="col-12 col-sm-10 col-lg-8">
          <Cells
            xCells={boardsize.xCells}
            yCells={boardsize.yCells}
            cellClick={cellClick}
            cellState={cellState}
            cellArray={boardsize.cellArray}
          />
        </div>

        <div className="col-0 col-sm-1 col-lg-2"/>
      </div>
    </div>
  )
}
