function Grid() {
  var RANGE = 50;
  var CELL_SIZE = 5;

  var graphics = game.add.graphics(0, 0);
  graphics.lineStyle(1, 0xffd9ff, 1);
  for (var i = -RANGE; i < RANGE; i++) {
    graphics.moveTo(i * CELL_SIZE, RANGE * CELL_SIZE);
    graphics.lineTo(i * CELL_SIZE, -RANGE * CELL_SIZE);
  };
  for (var i = -RANGE; i < RANGE; i++) {
    graphics.moveTo(RANGE * CELL_SIZE, i * CELL_SIZE);
    graphics.lineTo(-RANGE * CELL_SIZE, i * CELL_SIZE);
  };
}