import React from 'react'

//generates life-state object modeling generation n+1,
//sets up an interval, and dispatches updates to store
export default class SimulateLife extends React.Component{
  constructor(props){
    super(props)
    this.optimizedSimulateLife = this.optimizedSimulateLife.bind(this)
    this.setSimulationSpeed = this.setSimulationSpeed.bind(this)
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
    console.log(this.props)
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


  optimizedSimulateLife(){
    // console.log("optimized simulate life")
    // console.log(this.props)
    // console.log(this.props.generationObject)

    let nextGeneration={}
    for (let key in this.props.generationObject){
      let gridCount = this.props.generationObject[key].countGrid(this.props.cellState)

      if (gridCount == 3){
        nextGeneration[key] = (this.props.cellState[key] ? 2 : 1)
      }
      else if (gridCount == 4) {
        nextGeneration[key] = (this.props.cellState[key] ? 2 : 0)
      }
      else { nextGeneration[key] = 0}
    }

    // console.log("generation object updated")
    // console.log(nextGeneration)
    this.props.updateCells(nextGeneration)
  }




  render(){return null}
} // end SimulateLife
