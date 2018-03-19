import React from 'react'

//generates life-state object modeling generation n+1,
//sets up an interval, and dispatches updates to store
export default class SimulateLife extends React.Component{
  constructor(props){
    super(props)
    this.optimizedSimulateLife = this.optimizedSimulateLife.bind(this)
    this.setSimulationSpeed = this.setSimulationSpeed.bind(this)
    // this.initializeCellsOfInterest = this.initializeCellsOfInterest.bind(this)
    // this.initializeCellsOfInterest()
  }

  setSimulationSpeed(speed){
    if (speed>0){
        this.simulationSpeed = 600 / speed
    }
    else{
      this.simulationSpeed = 0
    }
    console.log("Set simulation speed: " + this.simulationSpeed)
  }

  componentDidMount(){
    console.log("Simulation mounted")
    this.setSimulationSpeed(this.props.speed)
    if (this.simulationSpeed){
      this.simulationTimer = setInterval(this.optimizedSimulateLife,this.simulationSpeed)
    }
  }

  componentWillUnmount(){
    console.log("Simulation paused")
    clearInterval(this.simulationTimer)
  }

  componentDidUpdate(prevProps,prevState){
    if (prevProps.speed != this.props.speed){
      console.log("updating timer")
      clearInterval(this.simulationTimer)
      this.setSimulationSpeed(this.props.speed)
      if(this.simulationSpeed){
        this.simulationTimer = setInterval(this.optimizedSimulateLife,this.simulationSpeed)
      }
    }
  }

  initializeCellsOfInterest(){
    console.log("initializing cells of interest")
    console.log(this.props.generationObject)
    let cells = Object.getOwnPropertyNames(this.props.generationObject)
    this.props.makeSet(cells)
  }

  optimizedSimulateLife(){

    function setCellStyle(el,style){
      switch (style){
        case 0:
          el.remove("cell-1","cell-2")
          break
        case 1:
          el.remove("cell-2")
          el.add("cell-1")
          break
        case 2:
          el.remove("cell-1")
          el.add("cell-2")
      }
    }


    let nextGeneration={}
    let filteredNextGeneration={}
    let nextCellsOfInterest=[]

    // console.log(this.props)
    // console.log("working with these cells of interest:")
    // console.log(this.props.cellsOfInterest)
    for (let key of this.props.cellsOfInterest){
      let gridCount = this.props.generationObject[key].countGrid(this.props.cellState)

      if (gridCount == 3){
        nextGeneration[key] = (this.props.cellState[key] ? 2 : 1)
        nextCellsOfInterest = nextCellsOfInterest.concat(this.props.generationObject[key].grid)
      }
      else if (gridCount == 4) {
        if (this.props.cellState[key]){
          nextGeneration[key] = 2
          nextCellsOfInterest = nextCellsOfInterest.concat(this.props.generationObject[key].grid)
        }
        else {
          nextGeneration[key] = 0
        }
        // nextGeneration[key] = (this.props.cellState[key] ? 2 : 0)
      }
      else {
        nextGeneration[key] = 0
      }

      if (this.props.cellState[key] != nextGeneration[key]){
        filteredNextGeneration[key] = nextGeneration[key]
        setCellStyle(document.getElementById(key).classList,filteredNextGeneration[key])
      }

    }

    // let nextCellsOfInterestSet = new Set (nextCellsOfInterest)
    this.props.makeSet(nextCellsOfInterest)
    this.props.updateCells(filteredNextGeneration)
  }




  render(){return null}
} // end SimulateLife
