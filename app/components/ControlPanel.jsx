import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import fasPlay from '@fortawesome/fontawesome-free-solid/faPlay'
import fasPause from '@fortawesome/fontawesome-free-solid/faPause'
import fasCog from '@fortawesome/fontawesome-free-solid/faCog'
import fasInfo from '@fortawesome/fontawesome-free-solid/faInfo'
import fasRandom from '@fortawesome/fontawesome-free-solid/faRandom'
import fasUndo from '@fortawesome/fontawesome-free-solid/faUndo'
import fasFastForward from '@fortawesome/fontawesome-free-solid/faFastForward'

// import {faPlay, faPause, faCog, faInfo, faRandom, faUndo, faFastForward } from '@fortawesome/fontawesome-free-solid'

export default class ControlPanel extends React.Component{
  constructor(props){
    super(props)
    this.expandSection = this.expandSection.bind(this)
    this.submitBoardSize = this.submitBoardSize.bind(this)
    this.settingsButtonClick = this.settingsButtonClick.bind(this)
    this.speedButtonClick = this.speedButtonClick.bind(this)
    this.state = {expand:"none", xCells:this.props.xCells, yCells:this.props.yCells, tutorial:true, selected:null, settingSelected:null}
  }

  expandSection(sectionName){
    console.log("settings button clicked")
    if (this.state.expand === sectionName){
      this.setState({expand:"none"})
    }
    else{
      this.setState({expand:sectionName})
    }
    console.log("new expanded state: " + this.state.expand)
  }

  submitBoardSize(x,y){
    this.props.changeBoardSizeClick(x,y)
    this.expandSection("settings")
    this.setState({settingSelected:null})
  }

  inputCellCount(e){
    console.log("inputting cell count")
    console.log(e.target.value)
    console.log(e.target.name)
    let validatedEntry = e.target.value.match(/[0-9]{1,3}/)
    validatedEntry = (validatedEntry ? validatedEntry[0] : "")
    validatedEntry = (validatedEntry > 100 ? 100 : validatedEntry)
    console.log("validatedEntry")
    console.log(validatedEntry)
    if (e.target.name=="x"){
      this.setState({xCells: validatedEntry})
    }
    else{
      this.setState({yCells: validatedEntry})
    }
  }

  speedButtonClick(target,fn){
    this.setState({tutorial:false, selected:target})
    fn()
  }

  settingsButtonClick(target,setting){
    if (this.state.settingSelected === target) {
      this.setState({tutorial:false, settingSelected:null})
    }
    else{
      this.setState({tutorial:false, settingSelected:target})
    }

    this.expandSection(setting)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.buttonState){
      this.setState({selected:null})
      this.props.turnOffButtonSwitch()
    }
  }

  render(){
  var {
    currentSpeed
    ,lastSpeed
    ,simulation
    ,xCells
    ,yCells
  } = this.props

  return (
      <React.Fragment>
        <div className="row p-3">
          <div className="mx-auto mb-3 button-bar">


            <Button
              buttonName="Pause"
              icon={fasPause}
              clickHandler={
                ()=>{
                  this.speedButtonClick("Pause"
                    ,()=>this.props.pauseClick()
                  )}
              }
              styles="button-pause"
              selected={this.state.selected}
            />

            <Button
              buttonName="Play"
              icon={fasPlay}
              clickHandler={
                () => {
                  this.speedButtonClick("Play"
                    ,()=>{this.props.changeSpeedClick(1)}
                  )}
              }
              styles="button-play"
              selected={this.state.selected}
            />

            <Button
              buttonName="Fast"
              icon={fasFastForward}
              clickHandler={
                ()=> {
                  this.speedButtonClick("Fast"
                    ,()=>this.props.changeSpeedClick(50)
                  )}
              }
              styles="button-play"
              selected={this.state.selected}
            />

            <Button
              buttonName="Randomize"
              icon={fasRandom}
              styles="button-options mb-3"
              clickHandler={this.props.randomizeBoard}
            />

            <Button
              buttonName="Reset"
              icon={fasUndo}
              styles="button-options mb-3"
              clickHandler={this.props.resetBoard}
            />

            <Button
              buttonName="Settings"
              icon={fasCog}
              styles="button-settings mb-3"
              clickHandler={() => this.settingsButtonClick("Settings","settings")}
              selected={this.state.settingSelected}
            />
            <Button
              buttonName="Rules"
              icon={fasInfo}
              styles="button-settings mb-3"
              clickHandler={() => this.settingsButtonClick("Rules","info")}
              selected={this.state.settingSelected}
            />

                  </div>
                  </div>
                  <div className="row">
                  <SettingsSection
                  expand={this.state.expand}
                  xCells={this.state.xCells}
                  yCells={this.state.yCells}
                  inputHandler={this.inputCellCount.bind(this)}
                  changeBoardSizeClick={this.submitBoardSize}
                  />
                  </div>

                  {
                  this.state.tutorial ?
                  <div className="text-center tutorial"><span>Tap the info button for instructions!</span></div> :
                  null
                  }

                  </React.Fragment>
                  )
                  }
                  }


                  function Button({clickHandler,buttonName,styles,icon,selected}){
  return(
    <span
      id={buttonName}
      className={"button px-3 py-2 mx-1" + (styles ? " " + styles : "") +(selected == buttonName ? " selected": "")}
      onClick={clickHandler}
    >
      {icon ?
        <FontAwesomeIcon icon={icon} /> :
        buttonName
      }
    </span>
  )
}


function SettingsSection(props){

  if (props.expand == "settings"){
    return(
      <div className="mx-auto mb-3 p-3 container-settings">
        <h3 className="text-center m-0">Change the Boardsize</h3>
        <div className="p-2 text-center">(maximum of 100x100 cells)</div>
        <div className="text-center">
          <input
            className="input-boardsize input-x text-center"
            name="x"
            type="text"
            value={props.xCells}
            onChange={props.inputHandler}
          />
          {" x "}
          <input
            className="input-boardsize input-y text-center"
            name="y"
            type="text"
            value={props.yCells}
            onChange={props.inputHandler}
          />

        </div>
        <div className="text-center mt-4">
          <Button
            buttonName="Submit"
            styles="button-play mx-auto"
            clickHandler={() => props.changeBoardSizeClick(props.xCells,props.yCells)}
          />
        </div>
      </div>
    )
  }
  else if (props.expand == "info"){
      return(
        <div className="mx-auto mb-3 p-2 container-settings">
          <div className="px-3">Conway's Game of Life is a cellular automaton with 4 simple rules:</div>
          <ul>
            <li>Cells with 0 or 1 neighbors will die</li>
            <li>Cells with 2 or 3 neighbors will live</li>
            <li>Cells with 4 or more neighbors will die</li>
            <li>A dead cell with 3 neighbors will come alive</li>
          </ul>
          <div className="px-3">Click on cells to create a pattern, then press play to simulate life. Some patterns will generate new life forever!</div>
        </div>
      )
    }
  else {return null}
}
