import React from 'react'

//generates life-state object modeling generation n+1,
//sets up an interval, and dispatches updates to store
export default class SimulateLife extends React.Component{
  constructor(props){
    super(props)
    this.optimizedSimulateLife = this.optimizedSimulateLife.bind(this)
    this.setSimulationSpeed = this.setSimulationSpeed.bind(this)
    this.randomizeCellState = this.randomizeCellState.bind(this)
    this.resetCellState = this.resetCellState.bind(this)
    this.state = {generation:0, dead:false, static:false, finalGeneration:0, tutorial:true}
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

  componentWillReceiveProps(nextProps){
    if(nextProps.randomizeSwitch){
      console.log("randomization requested")
      this.randomizeCellState()
    }

    if (nextProps.resetSwitch){
      console.log("Reset requested")
      this.resetCellState()
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

  resetCellState(){
    let clearedState = Object.assign({},this.props.cellState)
    for (let key in clearedState){
      if (this.props.cellState[key] != 0){
        this.setCellStyle(document.getElementById(key).classList,0)
      }
      clearedState[key] = 0
    }
    this.props.makeSet([])
    this.props.updateCells(clearedState)
    this.props.resetOff()

  }

  randomizeCellState(){
    console.log("making a random state")
    console.log(this.props.cellState)
    console.log(this.props.generationObject)
    let randomState = {}
    // console.log(randomState)
    let nextCellsOfInterest = []
    for (let key of this.props.cellArray){
      this.setCellStyle(document.getElementById(key).classList,0)
      randomState[key] = Math.floor(Math.random() * 1.5)
      if(randomState[key]){
        nextCellsOfInterest.push(key)
        this.setCellStyle(document.getElementById(key).classList,randomState[key])
      }
    }

    this.props.makeSet(nextCellsOfInterest)
    this.props.updateCells(randomState)
    this.props.randomizeOff()
  }




  setCellStyle(el,style){
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


  optimizedSimulateLife(){



    let nextGeneration={}
    let filteredNextGeneration={}
    let nextCellsOfInterest=[]
    let cellsOfInterest = this.props.cellsOfInterest
    let cellState = this.props.cellState


    for (let key of cellsOfInterest){
      let gridCount = this.props.generationObject[key].countGrid(cellState)

      if (gridCount == 3){
        nextGeneration[key] = (cellState[key] ? 2 : 1)
        nextCellsOfInterest = nextCellsOfInterest.concat(this.props.generationObject[key].grid)
      }
      else if (gridCount == 4) {
        if (cellState[key]){
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

      if (cellState[key] != nextGeneration[key]){
        filteredNextGeneration[key] = nextGeneration[key]
        this.setCellStyle(document.getElementById(key).classList,filteredNextGeneration[key])
      }

    }

    this.props.makeSet(nextCellsOfInterest)
    this.props.updateCells(filteredNextGeneration)

    //there are cell state changes
    if (Object.keys(filteredNextGeneration).length){
      this.setState({generation:this.state.generation + 1, dead:false, static:false})
    }
    //no cell state changes
    else {
      // no live cells
      if(this.props.cellsOfInterest.size === 0){
        let lastGenCount = this.state.generation
        this.setState({generation: 0, dead:true, finalGeneration: lastGenCount})
        this.props.pause()
      }
      //cells have reached a static state
      else{
        this.setState({static:true})
      }
    }
  }

  render(){

    if (this.state.dead){
      return (
        <div className="row pb-3 generation-box">
          <span className="mx-auto">All life ended after {this.state.finalGeneration} generations.</span>
        </div>
      )
    }

    else if (this.state.static){
      return (
        <div className="row pb-3 generation-box">
          <span className="mx-auto">Life has reached a static state after {this.state.generation} generations.</span>
        </div>
      )
    }

    else if(this.state.generation){
      return(
        <div className="row pb-3 generation-box">
          <span className="mx-auto">Generation: {this.state.generation}</span>
        </div>
      )
    }

    else{
      return (
        <div className="row pb-3 generation-box">
        </div>
      )
    }
  }
} // end SimulateLife
