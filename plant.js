function Plant() {
  this.cells = [{x:50,y:50},{x:50,y:49}];
  this.envCells = [{x:49,y:50},{x:50,y:51},{x:51,y:50},{x:51,y:49},{x:50,y:49}];

  for (var i = 0; i < this.cells.length; i++) {
    addCell(this.cells[i]);
  };

  for (var i = 0; i < this.envCells.length; i++) {
    addCell(this.envCells[i]);
  };
}

function addCell(cell) {
  var graphics = game.add.graphics(cell.x, cell.y);
  graphics.beginFill(0xFF0000, 1);
  graphics.drawCircle(300, 300, 100);
}
