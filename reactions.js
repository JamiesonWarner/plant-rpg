function reactionsTick(plant) {
  for (var i = 0; i < plant.cells.length; i++) {
    photosynthesis(plant.cells[i]);
    cellularRespiration(plant.cells[i]);
  };
}

function photosynthesis(cell) {
  var lightLevel = colorMagnitude(currentLightColor());
  if (lightLevel > .9 && cell.nut[WATER] > .3 && cell.nut[CARBON_DIOXIDE] > .3) {
    cell.nut[GLUCOSE] += .2;
    cell.nut[OXYGEN] += .2;
    cell.nut[CARBON_DIOXIDE] -= .1;
    cell.nut[WATER] -= .1;
  }
}

function cellularRespiration(cell) {
  if (cell.nut[GLUCOSE] > .4 && cell.nut[OXYGEN] > .4 && cell.nut[CARBON_DIOXIDE] < 1 && cell.nut[WATER] < 1) {
    cell.nut[GLUCOSE] -= .1;
    cell.nut[OXYGEN] -= .1;
    cell.nut[CARBON_DIOXIDE] += .2;
    cell.nut[WATER] += .2;
    cell.nut[ATP] += .2;
  }
}

var apicalDominance = .5;
function auxinProduction(cell) {
  if (cell.nut[AUXIN] > .5) {
    cell.nut[AUXIN] += 2;
  }
}