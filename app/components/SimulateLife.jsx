import React from 'react'

//generates life-state object modeling generation n+1,
//sets up an interval, and dispatches updates to store
export default class SimulateLife extends React.Component{
  constructor(props){
    super(props)
    this.optimizedSimulateLife = this.optimizedSimulateLife.bind(this)
    this.initializeGenerationObject = this.initializeGenerationObject.bind(this)
  }

  componentDidMount(){
    let simulationSpeed = 600 / this.props.speed
    console.log("Simulation mounted")
    this.initializeGenerationObject(this.props.cellState)
    this.simulationTimer = setInterval(this.optimizedSimulateLife,simulationSpeed)
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
      this.simulationTimer = setInterval(this.optimizedSimulateLife,simulationSpeed)
    }
  }


  optimizedSimulateLife(){
    console.log("optimized simulate life")
    console.log(this.props)
    console.log(this.generationObject)

    let nextGeneration={}
    for (let key in this.generationObject){
      let gridCount = this.generationObject[key].countGrid(this.props.cellState)

      if (gridCount == 3){
        nextGeneration[key] = (this.props.cellState[key] ? 2 : 1)
      }
      else if (gridCount == 4) {
        nextGeneration[key] = (this.props.cellState[key] ? 2 : 0)
      }
      else { nextGeneration[key] = 0}
    }


    console.log("generation object updated")
    console.log(nextGeneration)
    this.props.updateCells(nextGeneration)
  }

  initializeGenerationObject(currentState){
    console.log("initializing generation object")
    console.log(currentState)
    this.generationObject = {}
    let nextGeneration = {}

    for (let y=1; y <= this.props.boardSize.yCells;y++){
      for (let x=1; x<= this.props.boardSize.xCells;x++){
        //wrap board edges around
        let xA = String(x-1), xB=String(x+1), yA=String(y-1), yB=String(y+1)
        if (x==1){xA=String(this.props.boardSize.xCells)}
        if (x==this.props.boardSize.xCells){xB=String(1)}
        if (y==1){yA=String(this.props.boardSize.yCells)}
        if (y==this.props.boardSize.yCells){yB=String(1)}

        let cell = String(x) + "-" + String(y)
        this.generationObject[cell] = {}
        this.generationObject[cell].grid = [
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
        this.generationObject[cell].countGrid = function(state){
          let liveCells = 0
          for (let key of this.generationObject[cell].grid){
            if(state[key]){++liveCells}
          }
          return liveCells
        }.bind(this)
        nextGeneration[cell] = (currentState[cell] ? currentState[cell] : 0)
      }
    }
    // console.log(this.generationObject)
    this.props.updateCells(nextGeneration)
  }


  render(){return null}
} // end SimulateLife
