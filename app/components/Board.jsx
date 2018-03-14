import React from 'react'


export default function Board({cellClick, cellState, speed, updateCells}){
  return(


    <div className="container-fluid gameboard-container">

      {speed > 0 ?
        <SimulateLife
          cellState={cellState}
          updateCells={updateCells}
          speed={speed}
        /> :
        null
      }

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

//generates life-state object modeling generation n+1,
//sets up an interval, and dispatches updates to store
class SimulateLife extends React.Component{
  constructor(props){
    super(props)
    this.simulateLife = this.simulateLife.bind(this)
    this.countAdjacent = this.countAdjacent.bind(this)
    var simulationTimer
  }

  componentDidMount(){
    let simulationSpeed = 600 / this.props.speed
    console.log("Simulation mounted")
    // let adjacentCount = this.countAdjacent(this.props.cellState)
    this.simulationTimer = setInterval(this.simulateLife,simulationSpeed)
  }

  componentWillUnmount(){
    console.log("Simulation paused")
    clearInterval(this.simulationTimer)
  }

  componentDidUpdate(prevProps,prevState){
    if (prevProps.speed != this.props.speed){
      console.log("updating timer")
      clearInterval(this.simulationTimer)
      let simulationSpeed = 600 / this.props.speed
      this.simulationTimer = setInterval(this.simulateLife,simulationSpeed)
    }
  }

  simulateLife(){
    console.log(this.simulationTimer)
    console.log(this.props)
    let adjacentCount = this.countAdjacent(this.props.cellState)
    let nextGeneration = {}

    for (let key in adjacentCount){
      if (adjacentCount[key] <2 || adjacentCount[key] >3){
        nextGeneration[key] = 0
      }
      else if (this.props.cellState[key] > 0) {
        nextGeneration[key] = 2
      }
      else if (adjacentCount[key]==3){
        nextGeneration[key] = 1
      }
      else {
        nextGeneration[key] = 0
      }
    }

    this.props.updateCells(nextGeneration)
  }

  countAdjacent(currentState){
    function interpretState(key){
      if (!currentState[key] || currentState[key] == 0 ){
        return 0
      }
      else {return 1}
    }

    var cellCount = {}
    for (let y=1; y <= currentState.yCells;y++){
      for (let x=1; x<= currentState.xCells;x++){
        //wrap board edges around
        let xA = String(x-1), xB=String(x+1), yA=String(y-1), yB=String(y+1)
        if (x==1){xA=String(currentState.xCells)}
        if (x==currentState.xCells){xB=String(1)}
        if (y==1){yA=String(currentState.yCells)}
        if (y==currentState.yCells){yB=String(1)}

        let cell = String(x) + "-" + String(y)
        let cells = [
          interpretState(xA + "-" + yA)
          ,interpretState(x  + "-" + yA)
          ,interpretState(xB + "-" + yA)
          ,interpretState(xA + "-" + y)
          ,interpretState(xB + "-" + y)
          ,interpretState(xA + "-" + yB)
          ,interpretState(x + "-" + yB)
          ,interpretState(xB + "-" + yB)
        ]
        cellCount[cell] = cells.reduce((a,c)=>a+c)
      }
    }
    return cellCount
  }

  render(){return null}
} // end SimulateLife

//populates the game board with cells and displays their life-state
class Cells extends React.Component{
  constructor(props){
    super(props)
    this.generateStyle.bind(this)
    this.generateBoard.bind(this)
    this.generateStyle(props)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.xCells != this.props.xCells || nextProps.yCells != this.props.yCells){
      this.generateStyle(nextProps)
    }
    console.log("no change to board size")
  }

  // shouldComponentUpdate(nextProps, nextState){
  //
  // }

  generateStyle(props){
    console.log("generating style")
    console.log(props)
    let borderFactor = .25
    this.cssRuleName = 'cell-' + props.xCells + props.yCells
    console.log("calculating cell width")
    console.log("x cell count: " + props.xCells)
    let divisor = parseInt(props.xCells) + props.xCells*borderFactor
    console.log("divisor: " + divisor)
    let cellWidth = 100/divisor
    console.log("cell width: " + cellWidth)
    this.cssRule = `.${this.cssRuleName} {
      width: ${cellWidth}%;
      padding-top:${cellWidth}%;
      margin:${cellWidth*borderFactor/2}%;
    }`

    document.styleSheets[0].insertRule(this.cssRule,document.styleSheets[0].cssRules.length)
}

  generateBoard(){
    let boardArray = []
    for (let y = 1; y<= this.props.yCells;++y){
    let rowContents = []

    for (let x =1; x<= this.props.xCells;++x){
      let cellId = String(x) + "-" + String(y)

      let cell = (
        <div
          key={cellId}
          id={cellId}
          onClick={this.props.cellClick}
          className={`life-cell cell-${this.props.cellState[cellId] ? this.props.cellState[cellId] : 0} ${this.cssRuleName}`}
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
    return boardArray
  }

  render(){
    return(
      <React.Fragment>
        {this.generateBoard()}
      </React.Fragment>
    )
  }
} // end Cells
