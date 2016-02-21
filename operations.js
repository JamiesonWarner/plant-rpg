var apicalDominance = .5;
onTick(function() {
  for (var i = 0; i < plant.cells.length; i++) {
    var cell = plant.cells[i];
    if (cell.nut[WATER] >= 1 && cell.nut[ATP] >= .5) {
      if (cell.nut[AUXIN] > 1) {
        plant.divideCell(cell);
      }
    }
  };
})

var makeChloroplast = {
  cost: []
}

function performOperation(cell, operation, ntimes) {

}