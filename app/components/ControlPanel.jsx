import React from 'react'

export default class ControlPanel extends React.Component{
  constructor(props){
    super(props)
    this.expandSection = this.expandSection.bind(this)
    this.submitBoardSize = this.submitBoardSize.bind(this)
    this.settingsButtonClick = this.settingsButtonClick.bind(this)
    this.speedButtonClick = this.speedButtonClick.bind(this)
    this.state = {expand:"none", xCells:this.props.xCells, yCells:this.props.yCells}
  }

  expandSection(sectionName){
    console.log("settings button clicked")
    if (this.state.expand === sectionName){
      this.setState({expand:"none"})
    }
    else{
      this.setState({expand:sectionName})
    }
    console.log("new expanded state: " +this.state.expand)
  }

  submitBoardSize(x,y){
    this.props.changeBoardSizeClick(x,y)
    this.expandSection("settings")
    this.unselectButton("settings-selected")
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

  unselectButton(selector){
    // console.log("unselecting button")
    // console.log(document.querySelector("." + selector))
    if (document.querySelector("." + selector)){
      document.querySelector("." + selector).classList.remove(selector)
    }
  }

  speedButtonClick(e,selector,fn){
    // console.log("speed button clicked")
    this.unselectButton(selector)
    fn()
    // console.log(e)
    // console.log(e.target.classList)
    e.target.classList.add(selector)
  }

  settingsButtonClick(e,selector,setting){
    this.unselectButton(selector)
    this.expandSection(setting)
    console.log(e)
    e.target.classList.add(selector)
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
          <div className="mx-auto mb-3">


            <Button
              buttonName="Pause"
              clickHandler={
                (e)=>{
                  this.speedButtonClick(e
                      ,"speed-selected"
                    ,()=>this.props.pauseClick()
                  )}
              }
              styles="button-pause"
            />

            <Button
              buttonName="Play"
              clickHandler={
                (e) => {
                  this.speedButtonClick(e
                      ,"speed-selected"
                    ,()=>{this.props.changeSpeedClick(1)}
                  )}
              }
              styles="button-play"
            />

            <Button
              buttonName="Fast"
              clickHandler={
                (e)=> {
                  this.speedButtonClick(e
                    ,"speed-selected"
                    ,()=>this.props.changeSpeedClick(50)
                  )}
              }
              styles="button-speed"
            />


            <Button
              buttonName="Settings"
              styles="button-settings mb-3"
              clickHandler={(e) => this.settingsButtonClick(e,"settings-selected","settings")}
            />
            <Button
              buttonName="Rules"
              styles="button-settings mb-3"
              clickHandler={(e) => this.settingsButtonClick(e,"settings-selected","info")}
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
      </React.Fragment>
    )
  }
}


function Button({clickHandler,buttonName,styles}){
  return(
    <span
      id={buttonName}
      className={"button px-3 py-2 mx-1" + (styles ? " " + styles : "")}
      onClick={clickHandler}
    >
      {buttonName}
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
            <li>An dead cell with 3 neighbors will come alive</li>
          </ul>
          <div className="px-3">Click on cells to create a pattern, then press play to simulate life. Some patterns will generate new life forever!</div>
        </div>
      )
    }
  else {return null}
}
