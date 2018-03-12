import React from 'react'

export default function ControlPanel({
  currentSpeed
  ,lastSpeed
  ,simulation
  ,xCells
  ,yCells
  ,pauseClick
  ,playClick
  ,changeSpeedClick
  ,changeBoardSizeClick
  }){

  console.log("Control Panel")
  console.log(currentSpeed)
  console.log(lastSpeed)
  return (
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
            buttonName="1"
            clickHandler={()=>changeSpeedClick(1)}
            styles="button-speed"
          />
          <Button
            buttonName="2"
            clickHandler={()=>changeSpeedClick(2)}
            styles="button-speed"
          />
          <Button
            buttonName="3"
            clickHandler={()=>changeSpeedClick(3)}
            styles="button-speed"
          />

          <div className="text-center mt-5">Speed: {currentSpeed}</div>

          <div className="text-center">Last Speed: {lastSpeed}</div>

        </div>
      </div>
  )
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
