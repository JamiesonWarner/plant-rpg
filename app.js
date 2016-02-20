
var bbox = {xl: 0, xr: 600, yt: 0, yb: 600};
var game = new Phaser.Game(bbox.xr, bbox.yb, Phaser.AUTO, 'phaser-example', {create: create});

var env,
    grid,
    plant;

function create() {

  env = new Env();
  grid = new  Grid();
  plant = new Plant();
  // var fluidSim = new FluidSim(plant);

  game.stage.backgroundColor = '#40a4df';

  var vDiagram = plant.getVoronoiDiagram();
  plant.printVoronoiDiagram();
  window.vDiagram = vDiagram;


  var graphics = game.add.graphics(0, 0);
  graphics.lineStyle(10, 0xffd900, 1);


  console.log("test");
  for(i = 0; i < vDiagram.edges.length; i ++){
  	var edge = vDiagram.edges[i];

  	graphics.moveTo(edge.va.x,edge.va.y);
  	graphics.lineTo(edge.vb.x, edge.vb.y);
  }

  //plant.cells
  //plant.envCells

  onTick(function() {
    // plant.simpleUpdate()
    fluidTick(plant);
  });

  // Game world will be 100x100 blocks
  // Set up render loops
}



