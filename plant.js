function Plant() {
  this.cells = [{x:300,y:300,c:0x00FF00},{x:300,y:350,c:0x00FF00}];
  this.envCells = [{x:250,y:300},{x:300,y:250},{x:350,y:300},{x:350,y:350},{x:300,y:400},{x:250,y:350}];

  for (var i = 0; i < this.cells.length; i++) {
    addCell(this.cells[i]);
  }

  for (var i = 0; i < this.envCells.length; i++) {
    addCell(this.envCells[i]);
  }
}

function addCell(cell) {
  var graphics = game.add.graphics(cell.x, cell.y);
  graphics.beginFill(cell.c || 0x000000, 1);
  graphics.drawCircle(0, 0, 10);
}
