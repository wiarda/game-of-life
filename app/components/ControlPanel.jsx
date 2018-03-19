import React from 'react'

export default class ControlPanel extends React.Component{
  constructor(props){
    super(props)
    this.expandSection = this.expandSection.bind(this)
    this.submitBoardSize = this.submitBoardSize.bind(this)
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
  }

  inputCellCount(e){
    console.log("inputting cell count")
    console.log(e.target.value)
    console.log(e.target.name)
    let validatedEntry = e.target.value.match(/[0-9]{1,3}/)
    validatedEntry = (validatedEntry ? validatedEntry[0] : "")
    console.log("validatedEntry")
    console.log(validatedEntry)
    if (e.target.name=="x"){
      this.setState({xCells: validatedEntry})
    }
    else{
      this.setState({yCells: validatedEntry})
    }
  }

  render(){
  var {
    currentSpeed
    ,lastSpeed
    ,simulation
    ,xCells
    ,yCells
    ,pauseClick
    ,playClick
    ,changeSpeedClick
    ,changeBoardSizeClick
  } = this.props

  return (
      <React.Fragment>
        <div className="row p-3">
          <div className="mx-auto mb-3">

            {currentSpeed === 0 ?
              <Button
                buttonName="Play"
                clickHandler={()=>{playClick(lastSpeed)}}
                styles="button-play"
              />:

              <Button
                buttonName="Pause"
                clickHandler={()=>{pauseClick()}}
                styles="button-play"
              />
            }

            <Button
              buttonName="Slow"
              clickHandler={()=>changeSpeedClick(1)}
              styles="button-speed"
            />
            <Button
              buttonName="Medium"
              clickHandler={()=>changeSpeedClick(4)}
              styles="button-speed"
            />
            <Button
              buttonName="Fast"
              clickHandler={()=>changeSpeedClick(50)}
              styles="button-speed"
            />

            <Button
              buttonName="Settings"
              styles="button-settings mb-3"
              clickHandler={() => this.expandSection("settings")}
            />
            <Button
              buttonName="Rules"
              styles="button-settings mb-3"
              clickHandler={() => this.expandSection("info")}
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
        <h3 className="text-center m-0">Boardsize:</h3>
        <div className="p-2"></div>
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
          {/* <div> This game simulates life based on 4 simple rules:</div> */}
          <ul>
            <li>Cells with 0 or 1 neighbors will die</li>
            <li>Cells with 2 or 3 neighbors will live</li>
            <li>Cells with 4 or more neighbors will die</li>
            <li>An dead cell with 3 neighbors will come alive</li>
          </ul>
        </div>
      )
    }
  else {return null}
}
