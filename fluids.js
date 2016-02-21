function FluidSim(plant) {
  this.plant = plant;
  onTick(function() {
    // this.calculateTick();
  });
}

var INSULATION_COEFF = .1;

/*
Adds value dnut to every cell
*/
function fluidTick(plant) {
  // Reset dnut on every cell
  for (var i = 0; i < plant.cells.length; i++) {
    plant.cells[i].dnut = zeros(N_NUTRIENTS);
  };
  for (var i = 0; i < plant.envCells.length; i++) {
    plant.envCells[i].dnut = zeros(N_NUTRIENTS);
  };

  // Calculate dnut on every cell as a function of passive transport
  var vDiagram = plant.getVoronoiDiagram();
  for (var i = 0; i < vDiagram.edges.length; i++) {
    var edge = vDiagram.edges[i];
    if (!edge.lSite || !edge.rSite) continue;
    var lnut = edge.lSite.nut,
        rnut = edge.rSite.nut;
    // Env<->Env boundary
    if (!lnut && !rnut) {
      continue;
    }
    // Cell<->Cell boundary
    else if (lnut && rnut) {
      // Passive transport
      var delta = vecDifference(lnut,rnut);
      vecScale(delta, INSULATION_COEFF);
      vecAddInPlace(rnut, delta);
      var negDelta = vecScale(clone(delta), -1);
      vecAddInPlace(lnut, negDelta);
    }
    // Env<->Cell boundary
    else {
      var envCell = lnut? edge.rSite : edge.lSite,
          cellNut = lnut? lnut: rnut;

      // Passive transport
      var envNut = env.getTile(envCell.x, envCell.y);
      var delta = vecDifference(envNut, cellNut);

      // Active transport
      if (delta[WATER] + cellNut[WATER] < .3) {
        cellNut[GLUCOSE] -= .05;
        cellNut[WATER] += .1;
      }

      vecScale(delta, INSULATION_COEFF);
      vecAddInPlace(cellNut, delta);

    }
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