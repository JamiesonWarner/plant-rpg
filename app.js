
var bbox = {xl: 0, xr: 600, yt: 0, yb: 600};
var game = new Phaser.Game(bbox.xr, bbox.yb, Phaser.AUTO, 'phaser-example', {create: create});

function create() {
  var env = new Env();
  // var grid = new  Grid();
  var plant = new Plant();

  game.stage.backgroundColor = '#40a4df';

  var vDiagram = getVoronoiDiagram(plant);

  var graphics = game.add.graphics(0, 0);
  graphics.lineStyle(10, 0xffd900, 1);

  console.log("test");
  for(i = 0; i < vDiagram.edges.length; i ++){
  	var edge = vDiagram.edges[i];
  	//console.log(edge);
  	graphics.moveTo(edge.va.x,edge.va.y);
  	graphics.lineTo(edge.vb.x, edge.vb.y);
  }

  plant.cells
  plant.envCells


  // Game world will be 100x100 blocks
  // Set up render loops
}



var voronoiCalc = new Voronoi();

function getVoronoiDiagram(plant){
	return voronoiCalc.compute(plant.cells.concat(plant.envCells),bbox);
}

var tickCbs = [];
function onAnimationFrame(cb) {
  window.requestAnimationFrame(cb);
}
function onTick(cb) {
  tickCbs.push(cb);
}

// Called once every second. 1 tick == 4 hours
function tick() {
  console.log('tick');
  for (var i = 0; i < tickCbs.length; i++) {
    tickCbs[i]();
  };
}
setInterval(tick, 1000);
