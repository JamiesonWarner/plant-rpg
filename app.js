
var bbox = {xl: 0, xr: 600, yt: 0, yb: 600};
var game = new Phaser.Game(bbox.xr, bbox.yb, Phaser.AUTO, 'phaser-example', {create: create});

var env,
    grid,
    plant;

function startSimulation() {
  env = new Env();
  // grid = new  Grid();
  plant = new Plant();
  new Sky();
  new Resources();

  var envDisp = 25;

  var graphics = game.add.graphics(0,0)


  onTick(function(){
    //console.log("running convergence tick");
    // plant.mdConvergenceUpdateV2();
    for(var i = 0; i < plant.cells.length; i ++){
      plant.updateGraphics(plant.cells[i]);
    }


    graphics.clear();


    graphics.lineStyle(2, 0xA52A2A);
    graphics.beginFill(0xA52A2A);
    recursiveDrawBranches(plant.root, {x:plant.root.x - 0.5 * thickness(plant.root) , y: plant.root.y},
      {x:plant.root.x + 0.5* thickness(plant.root) , y: plant.root.y}, graphics);
    graphics.endFill();


  });


  function getCorrectPolygon(va,vb,vc,vd){
    var x1 = subtract(vb,va);
    var x2 = subtract(vd,vc)
    if(dotProduct(x1,x2) > 0 ){
      return new Phaser.Polygon([ new Phaser.Point(va.x, va.y), new Phaser.Point(vb.x, vb.y),
        new Phaser.Point(vd.x, vd.y), new Phaser.Point(vc.x, vc.y) ]);
    }
    else{
      return new Phaser.Polygon([ new Phaser.Point(va.x, va.y), new Phaser.Point(vb.x, vb.y),
        new Phaser.Point(vc.x, vc.y), new Phaser.Point(vd.x, vd.y) ]);

    }
  }

  function recursiveDrawBranches(cur, va, vb, g){
    //console.log("recursiveDraw");
    if(!cur.children){
      return;
    }
    for(var i = 0; i < cur.children.length; i ++){
      var child = cur.children[i];
      var delta = subtract(child, cur);
      var perpNorm = getNorm(crossProduct(delta, {x:0, y:0, z:1}));
      var vc = add(child, multiply(perpNorm, thickness(child) * 0.5));
      var vd = add(child, multiply(perpNorm, thickness(child) * -0.5));
      poly = getCorrectPolygon(va,vb,vc,vd);
      g.drawPolygon(poly.points);
      recursiveDrawBranches(child, vc, vd, g);
    }
  }

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
}

function create() {
  game.stage.backgroundColor = '#40a4df';
  startSimulation();
}



