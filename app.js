
var bbox = {xl: 0, xr: 600, yt: 0, yb: 600};
var game = new Phaser.Game(bbox.xr, bbox.yb, Phaser.AUTO, 'phaser-example', {create: create});

function create() {

  var cross = crossProduct({x:0,y:1,z:0}, {x:0,y:0,z:1});
  console.log("Cross product test" + cross.x + " " + cross.y + " " + cross.z);

  var env = new Env();
  // var grid = new  Grid();
  var plant = new Plant();

  game.stage.backgroundColor = '#40a4df';

  //var vDiagram = plant.getVoronoiDiagram();
  //plant.printVoronoiDiagram();


  var graphics = game.add.graphics(0, 0);
  graphics.lineStyle(10, 0xffd900, 1);

  /*
  console.log("test");
  for(i = 0; i < vDiagram.edges.length; i ++){
  	var edge = vDiagram.edges[i];

  	graphics.moveTo(edge.va.x,edge.va.y);
  	graphics.lineTo(edge.vb.x, edge.vb.y);
  }*/

  //plant.cells
  //plant.envCells
  /*onTick(function() {
    plant.mdConvergenceUpdate()
  });*/

  // Game world will be 100x100 blocks
  // Set up render loops
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
