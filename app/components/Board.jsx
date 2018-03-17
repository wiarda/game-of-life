import React from 'react'
import SimulateLife from './SimulateLife.jsx'
import Cells from './Cells.jsx'
import GenerateBoardLayout from './GenerateBoardLayout.jsx'

export default function Board({cellClick, cellState, speed, updateCells, cellArray, generationObject, cssRuleName}){

  return(
    <div className="container-fluid gameboard-container">

      <SimulateLife
        cellState={cellState}
        updateCells={updateCells}
        speed={speed}
        generationObject={generationObject}
      />

      <div className="row">
        <div className="col-0 col-sm-1 col-lg-2"/>

        <div className="col-12 col-sm-10 col-lg-8">
          <Cells
            cellClick={cellClick}
            cellState={cellState}
            cellArray={cellArray}
            cssRuleName={cssRuleName}
          />
        </div>

        <div className="col-0 col-sm-1 col-lg-2"/>
      </div>
    </div>
  )
}
