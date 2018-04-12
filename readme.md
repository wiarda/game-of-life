# A Game of Life simulator #

Testing out React & Redux by building Conway's Game of Life

Play the simulation here:
http://www.bonpicnic.com/projects/life/


## Feautures: ##
* adjustable board dimensions from 10x10 to 100x100
* 2 simulation speeds (normal and quick)
* place your own cells on the board, or generate a random board
* generation counter


## Game of Life ruleset: ##
* Each cell has 2 possible states: alive or dead
* Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by overpopulation.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


## Future features: ##
* sound for clicks



## Change Log ##
* only calculating state changes for cells that are alive and their neighbors
* pre-generating initial per cell cell-state
* forgetting out of range cell state when decreasing board size
* moved cellArray generation, state object generation, style generation out of simulation and into their own module
* added button icons
* added board size change input
* added change speed buttons
* added rules
* added simulation code
* player can set up a board
* added generation count
* minimize settings pane once board size input
* added clear board
* added randomize board
