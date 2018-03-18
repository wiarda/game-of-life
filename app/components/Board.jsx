import React from 'react'
import SimulateLife from './SimulateLife.jsx'

import GenerateBoardLayout from './GenerateBoardLayout.jsx'

export default function Board({cellClick, cellState, speed, updateCells, cellArray, generationObject, cssRuleName}){

  return(

    <SimulateLife
      cellState={cellState}
      updateCells={updateCells}
      speed={speed}
      generationObject={generationObject}
    />
  )
}
