
var bbox = {xl: 0, xr: 600, yt: 0, yb: 600};
var game = new Phaser.Game(bbox.xr, bbox.yb, Phaser.AUTO, 'phaser-example', {create: create});

var env,
    grid,
    plant,
    voronoiGraphics;

function startSimulation() {
  env = new Env();
  // grid = new  Grid();
  plant = new Plant();
  new Sky();
  new Resources();

  voronoiGraphics = game.add.graphics(0, 0);
  onTick(function(){
    console.log("running convergence tick");
    plant.mdConvergenceUpdateV2();
    for(var i = 0; i < plant.cells.length; i ++){
      plant.updateGraphics(plant.cells[i]);
    }
    var vDiagram = plant.getVoronoiDiagram();
    voronoiGraphics.clear();
    voronoiGraphics.lineStyle(3, 0xffd900, 1);

    for(i = 0; i < vDiagram.cells.length; i ++){
      var cell = vDiagram.cells[i];
    }

    for(i = 0; i < vDiagram.edges.length; i ++){
      var edge = vDiagram.edges[i];

      voronoiGraphics.moveTo(edge.va.x,edge.va.y);
      voronoiGraphics.lineTo(edge.vb.x, edge.vb.y);
    }

  });

  onTick(function() {
    fluidTick(plant);
    reactionsTick(plant);
  });
}

function resetSimulation() {
  hour = 0;
  tickCbs.length = 0;
  env.destroy();
  plant.destroy();
  voronoiGraphics.destroy();
}

function create() {
  game.stage.backgroundColor = '#40a4df';
  startSimulation();
}



