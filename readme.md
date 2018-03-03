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
v1
-random board generation & simulation
-player can set up a board
-player can clear the board
-generation count


Structure

App
  Header
  Wrapper
    ScoreBoard
    LifeBoard


Variables:
INITIAL_STATE

Actions:
AddCell
MutateSimulationSpeed
MutateBoardSize

State shape:
{
  LivingCells: {xxxyyy:?}
  ,GenerationCount: int
  ,SimulationSpeed: int
  ,boardsize: xxxyyy
}

Reducers:
simulateLife //primary reducer
  changeBoardLayout
  advanceGeneration //define livingCells + advance generation count
  changeSpeed
  changeBoardSize
