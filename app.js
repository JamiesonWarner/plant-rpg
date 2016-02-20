
var bbox = {xl: 0, xr:  800, yt: 0, yb: 600};
var game = new Phaser.Game(bbox.xr, bbox.yb, Phaser.AUTO, 'phaser-example', {create: create});

function create() {
  var plant = new Plant();
  plant.cells
  plant.envCells
// Game world will be 100x100 blocks
// Set up render loops
}

// Called once every second
function tick() {

}

var voronoiCalc = new Voronoi();

function getVoronoiDiagram(plant){
	//return voronoiCalc.compute(plant.)
}
