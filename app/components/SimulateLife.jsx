import React from 'react'

//generates life-state object modeling generation n+1,
//sets up an interval, and dispatches updates to store
export default class SimulateLife extends React.Component{
  constructor(props){
    super(props)
    this.optimizedSimulateLife = this.optimizedSimulateLife.bind(this)
    this.setSimulationSpeed = this.setSimulationSpeed.bind(this)
    this.randomizeCellState = this.randomizeCellState.bind(this)
    // this.setCellStyle = this.setCellStyle.bind(this)
    this.state = {generation:0, dead:false, static:false, finalGeneration:0}
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
    this.randomizeCellState()
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

  randomizeCellState(){
    console.log("making a random state")
    let randomState = Object.assign({},this.props.cellState)
    // console.log(randomState)
    let nextCellsOfInterest = []
    for (let key in randomState){
      randomState[key] = Math.floor(Math.random() * 2)
      if(randomState[key]){
        nextCellsOfInterest.push(key)
        this.setCellStyle(document.getElementById(key).classList,randomState[key])
      }
    }

    this.props.makeSet(nextCellsOfInterest)
    this.props.updateCells(randomState)
    this.props.randomizeOff()

    console.log(randomState)
    // return {state: randomState, shortlist: nextCellsOfInterest}
  }

  randomizeCellState2(){
    console.log("making a random state")
    let randomState = Object.assign({},this.props.cellState)
    // console.log(randomState)
    let nextCellsOfInterest = []
    for (let key in randomState){
      randomState[key] = Math.floor(Math.random() * 2)
      if(randomState[key]){
        nextCellsOfInterest.push(key)
      }
    }

    console.log(randomState)
    return {state: randomState, shortlist: nextCellsOfInterest}
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

    // randomize board if requested
      // if(this.props.randomizeSwitch){
      //   console.log(this.props.randomizeSwitch)
      //   let randomizedBoard = this.randomizeCellState()
      //   cellsOfInterest = randomizedBoard.shortlist
      //   cellState = randomizedBoard.state
      //   this.props.randomizeOff()
      // }



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
