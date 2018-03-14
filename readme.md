Game of Life simulation

Testing out React & Redux by building Conway's game of life:
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life


Game of Life ruleset:
-Each cell has 2 possible states: alive or dead
-Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
-Any live cell with two or three live neighbours lives on to the next generation.
-Any live cell with more than three live neighbours dies, as if by overpopulation.
-Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

Planned features:

To-do:
v1
-generation count
-visual cue for selected speed
-add starting sequence
-player can clear the board
-optimize algorithm

v2
-random board generation
-feedback on invalid input for changing board size
-sound for clicks
-stop simulation if in a static state or if all life extinguished

Done
-change board size
-change speed
-show rules
-simulation
-player can set up a board






Structure

State shape:
boardSize: [x,y]
speed: {current: x, last:y, simulation: interval var}
cellState: {xy:?} // 0 dead 1 new 2 old



Component hierarchy:

App
  Header
    Title
    Rules (info button to expand)
    GenerationCounter (c)
      Counter
  Gameboard (grid, individual squares)
    Grid (c)
      CellSquare
  Footer (control panel, pause / play button, speed setting, board size)
    ControlPanel (c)
      PausePlayButton
      SpeedButton
      SizeInput

Variables:
INITIAL_STATE

Actions:
{type: "TOGGLE_CELL", id: [xxxyyy]}
{type: "CHANGE_SPEED", speed:"0" //0-3
{type: "CHANGE_BOARD_SIZE", size:[XXX,YYY]}

Reducers:
life //primary reducer
  toggleCell
  changeSpeed
  changeBoardSize
