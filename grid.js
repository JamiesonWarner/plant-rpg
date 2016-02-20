/*
Draws a grid over the game world.
*/

function Grid() {
  var RANGE = 100;
  var CELL_SIZE = 6;

  var graphics = game.add.graphics(0, 0);
  graphics.lineStyle(1, 535353, 1);
  for (var i = 0; i < RANGE; i++) {
    graphics.moveTo(i * CELL_SIZE, RANGE * CELL_SIZE);
    graphics.lineTo(i * CELL_SIZE, -RANGE * CELL_SIZE);
  };
  for (var i = 0; i < RANGE; i++) {
    graphics.moveTo(RANGE * CELL_SIZE, i * CELL_SIZE);
    graphics.lineTo(-RANGE * CELL_SIZE, i * CELL_SIZE);
  };
}