import React from 'react'

//generates life-state object modeling generation n+1,
//sets up an interval, and dispatches updates to store
export default class SimulateLife extends React.Component{
  constructor(props){
    super(props)
    this.optimizedSimulateLife = this.optimizedSimulateLife.bind(this)
    this.setSimulationSpeed = this.setSimulationSpeed.bind(this)
    this.state = {generation:0, dead:false, finalGeneration:0}
  }

  setSimulationSpeed(speed){
    if (speed>0){
        this.simulationSpeed = 500 / speed
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

    if(this.state.dead){
      console.log("All cells dead")
    }

    let nextGeneration={}
    let filteredNextGeneration={}
    let nextCellsOfInterest=[]

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
      }
      else {
        nextGeneration[key] = 0
      }

      if (this.props.cellState[key] != nextGeneration[key]){
        filteredNextGeneration[key] = nextGeneration[key]
        setCellStyle(document.getElementById(key).classList,filteredNextGeneration[key])
      }

    }

    this.props.makeSet(nextCellsOfInterest)
    this.props.updateCells(filteredNextGeneration)
    // let nextGenCount = this.state.generation + 1
    if (Object.keys(filteredNextGeneration).length){
      this.setState({generation:this.state.generation + 1})
    }
    else {
      // console.log (this.props.cellsOfInterest)
      // console.log (this.props.cellsOfInterest.size)
      if(this.props.cellsOfInterest.size === 0){
        let lastGenCount = this.state.generation
        this.setState({generation: 0, dead:true, finalGeneration: lastGenCount})
        this.props.pause()
      }
    }
  }

  render(){
    if(this.state.generation){
      return(
        <div className="row pb-3">
          <span className="mx-auto">Generation: {this.state.generation}</span>
        </div>
      )
    }

    else if (this.state.dead){
      return (
        <div className="row pb-3">
          <span className="mx-auto">All life ended after {this.state.finalGeneration} generations.</span>
        </div>
      )
    }

    else{
      return null
    }
  }
} // end SimulateLife
