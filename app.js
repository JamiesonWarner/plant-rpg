
var bbox = {xl: 0, xr: 600, yt: 0, yb: 600};
var game = new Phaser.Game(bbox.xr, bbox.yb, Phaser.AUTO, 'phaser-example', {create: create});

function create() {
  var grid = new Grid();
  var plant = new Plant();

  game.stage.backgroundColor = '#535353';

  var vDiagram = plant.getVoronoiDiagram();
  plant.printVoronoiDiagram();

  var graphics = game.add.graphics(0, 0);
  graphics.lineStyle(10, 0xffd900, 1);

  console.log("test");
  for(i = 0; i < vDiagram.edges.length; i ++){
  	var edge = vDiagram.edges[i];

  	graphics.moveTo(edge.va.x,edge.va.y);
  	graphics.lineTo(edge.vb.x, edge.vb.y);
  }

  for(i = 0; i < vDiagram.cells.length; i ++){
  	var cell = vDiagram.cells[i];
  	console.log("Color of site: "+cell.site.c);
  }



  plant.cells
  plant.envCells


// Game world will be 100x100 blocks
// Set up render loops


}

// Called once every second
function tick() {

}





