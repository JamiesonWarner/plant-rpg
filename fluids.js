var INSULATION_COEFF = .1;
var INTERCELLULAR_COEFF = .2;

/*
Adds value dnut to every cell
*/
function fluidTick(plant) {
  // Reset dnut on every cell
  for (var i = 0; i < plant.cells.length; i++) {
    plant.cells[i].dnut = zeros(N_NUTRIENTS);
  };

  // Calculate dnut on every cell as a function of passive transport
  for (var i = 0; i < plant.cells.length; i++) {
    var cell = plant.cells[i];

    // Cell<->Cell boundary
    if (cell.parent) {
      var delta = vecDifference(cell.parent.nut, cell.nut);
      vecScale(delta, INTERCELLULAR_COEFF);
      vecAddInPlace(cell.dnut, delta);
      var negDelta = vecScale(clone(delta), -1);
      vecAddInPlace(cell.parent.dnut, negDelta);
    }

    for (var i = 0; i < cell.children.length; i++) {
      var delta = vecDifference(cell.children[i].nut, cell.nut);
      vecScale(delta, INTERCELLULAR_COEFF);
      vecAddInPlace(cell.dnut, delta);
      var negDelta = vecScale(clone(delta), -1);
      vecAddInPlace(cell.children[i].dnut, negDelta);
    };

    // Env<->Cell boundary
    var sides = calcSides(cell);
    var rnut = env.getTile(sides[0].x, sides[0].y);
    var delta = vecDifference(rnut, cell.nut);
    vecAddInPlace(cell.dnut, delta);

    var lnut = env.getTile(sides[1].x, sides[1].y);
    var delta = vecDifference(lnut, cell.nut);
    vecAddInPlace(cell.dnut, delta);

    // Active transport
    // if (delta[WATER] + cellNut[WATER] < .3) {
    //   cellNut[GLUCOSE] -= .05;
    //   cellNut[WATER] += .1;
    // }
  };

  // Apply deltas
  for (var i = 0; i < plant.cells.length; i++) {
    console.log(plant.cells[i].nut, plant.cells[i].dnut);
    vecAddInPlace(plant.cells[i].nut, plant.cells[i].dnut);
  };
}

/*
Assigns ptd to each cell in cells
*/
function passiveTransportDeltas(plant) {
}

/*
Assigns atd to each cell in cells
*/
function activeTransportDeltas(plant) {
}



function massDifferential(cell) {

}