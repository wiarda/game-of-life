Game of Life simulation

Testing out React & Redux in Conway's Game of Life:
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life


Features:

v1 To-dos:
-add starting sequence

v2
-sound for clicks



** ** **
Completed:
-change board size
-change speed
-show rules
-simulation
-player can set up a board
-generation count
-minimize settings pane once board size input
-clear board
-randomize board

Rendering optimizations:
-only calculate state changes for cells that are alive and their neighbors
-pre-generating initial per cell cell state
-forgetting out of range cell state when decreasing board size
-moved cellArray generation, state object generation, style generation out of simulation and into their own module




Structure
State shape:
boardSize: [x,y]
speed: {current: x, last:y, simulation: interval var}
cellState: {xy:?} // 0 dead 1 new 2 old


Generation Object
<x-y>: {state: 0/1/2, neighbors:[x-y,x-y,etc] }


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




Game of Life ruleset:
-Each cell has 2 possible states: alive or dead
-Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
-Any live cell with two or three live neighbours lives on to the next generation.
-Any live cell with more than three live neighbours dies, as if by overpopulation.
-Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
