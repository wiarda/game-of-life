import React from 'react'
import SimulateLife from './SimulateLife.jsx'

export default function Board({cellState, speed, updateCells, generationObject}){

  return(

    <SimulateLife
      cellState={cellState}
      updateCells={updateCells}
      speed={speed}
      generationObject={generationObject}
    />
  )
}
