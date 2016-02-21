function FluidSim(plant) {
  this.plant = plant;
  onTick(function() {
    // this.calculateTick();
  });
}

var INSULATION_COEFF = .1;

function fluidTick(plant) {
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

    }
    // Env<->Cell boundary
    else {
      // Passive transport
      env.getTile();

    }
    // console.log(edge);
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