import React from 'react'

//creates  generationObject:
//references to neighbors for each cell
//and cellArray:
//array of all board cells

export default function GenerateBoardLayout(props){
    console.log("Generating board layout")
    let generationObject = {}
    let nextGeneration = {}
    let cellArray = []

    for (let y=1; y <= props.yCells;y++){
      for (let x=1; x<= props.xCells;x++){
        //wrap board edges around
        let xA = String(x-1), xB=String(x+1), yA=String(y-1), yB=String(y+1)
        if (x==1){xA=String(props.xCells)}
        if (x==props.xCells){xB=String(1)}
        if (y==1){yA=String(props.yCells)}
        if (y==props.yCells){yB=String(1)}

        let cell = String(x) + "-" + String(y)
        cellArray.push(cell)
        generationObject[cell] = {}
        generationObject[cell].grid = [
          cell
          ,xA + "-" + yA
          ,x  + "-" + yA
          ,xB + "-" + yA
          ,xA + "-" + y
          ,xB + "-" + y
          ,xA + "-" + yB
          ,x + "-" + yB
          ,xB + "-" + yB
        ]
        generationObject[cell].countGrid = function(state){
          let liveCells = 0
          for (let key of generationObject[cell].grid){
            if(state[key]){++liveCells}
          }
          return liveCells
        }
        nextGeneration[cell] = 0
      }
    }

    //styling for new board size
    console.log("Generating cell style")
    let borderFactor = .25
    let cssRuleName = 'cell-' + props.xCells + props.yCells
    // let divisor = parseInt(props.xCells) + props.xCells*borderFactor
    let cellWidth = 100/parseInt(props.xCells)
    let cssRule = `.${cssRuleName} {
      padding-right: ${cellWidth}%;
      padding-top: ${cellWidth}%;
      box-shadow: inset 0 0 0 1px #34495e;
    }`

    document.styleSheets[0].insertRule(cssRule,document.styleSheets[0].cssRules.length)


    console.log("Setting generation object:")
    console.log(generationObject)
    props.setLayout(generationObject,cellArray,cssRuleName)
    props.resetCellsOfInterest()
    props.updateCells(nextGeneration)


    return(null)
}
