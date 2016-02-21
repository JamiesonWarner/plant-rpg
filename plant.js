function Plant() {
  this.cells = [];
  this.envCells = []
  this.root;

  generateBeanPlant(this);
  //generateEnvironment(this);
  //generateEnvironmentBorder(this);
  randomizeMasses(this);

  //this.cells = [{x:300,y:300,c:0x00FF00,nut:[1,1,1,1,1,1]},{x:300,y:350,c:0x00FF00,nut:[1,1,1,1,1,1]}];
  //this.envCells = [{x:250,y:300},{x:300,y:250},{x:350,y:300},{x:350,y:350},{x:300,y:400},{x:250,y:350}];

  for (var i = 0; i < this.cells.length; i++) {
    addCell(this.cells[i]);
  }

  for (var i = 0; i < this.envCells.length; i++) {
    addCell(this.envCells[i]);
  }

  this.voronoiCalc = new Voronoi();

}

Plant.prototype.destroy = function() {
  for (var i = 0; i < this.cells.length; i++) {
    this.cells[i].graphics.destroy();
  };
  for (var i = 0; i < this.envCells.length; i++) {
    this.envCells[i].graphics.destroy();
  };
}

var nutDensity = [1,1,1,1,1,1,1,1];

var getMass = function(cell){
  var mass = 0;
  for(var i = 0; i < cell.nut.length; i ++){
    mass += cell.nut[i] * nutDensity[i];
  }
  return mass;
}

function generateBeanPlant(plant){
  plant.root = {x: 300, y: 280, c:0x00FF00, nut:[1,1,1,1,1,1,1,1]};
  plant.cells = [
    plant.root,
    {x: 300, y: 320, c:0x00FF00, nut:[1,1,1,1,1,1,1,1], parent: plant.root}
  ];
}

function generateComplicatedPlant(plant, height){

  var root = {x: 400, y: 400, c:0x00FF00, nut:[1,1,1,1,1,1]};

  recurse(root,height);

  var startHeight = height;

  function recurse(cur, height){
    plant.cells.push(cur);
    if(height === 0){
      return;
    }
    else{
      var childA = {x: cur.x + Math.pow(3,height) * 1 , y: cur.y - 50, c:0x00FF00,nut:[1,1,1,1,1,1], parent:cur};
      var childB = {x: cur.x - Math.pow(3,height) * 1, y: cur.y - 50, c:0x00FF00, nut:[1,1,1,1,1,1], parent:cur};
      cur.children=[childA, childB];
      recurse(childA,height -1);
      recurse(childB, height -1);
    }
  }

  plant.root = root;
}

function generateEnvironmentBorder(plant){
  for(var x = 10; x < bbox.xr; x += 5){
    plant.envCells.push({x:x, y:10, isEnv:true});
    plant.envCells.push({x:x, y:bbox.yb - 10, isEnv:true});

  }

  for(var y = 10; y < bbox.yb; y+= 5){
    plant.envCells.push({x:0, y:10, isEnv:true});
    plant.envCells.push({x:bbox.xr, y:y , isEnv:true});
  }
}

function generateEnvironment(plant){
  for(var x = 0; x < bbox.xr; x += 50){
    for(var y = 0; y < bbox.yb; y += 50){
      plant.envCells.push({x:x, y:y, isEnv:true})
    }
  }
}



Plant.prototype.getVoronoiDiagram = function(){
    return this.voronoiCalc.compute(this.cells.concat(this.envCells),bbox);
}

Plant.prototype.printVoronoiDiagram = function(){
    var diagram = this.getVoronoiDiagram();

    for(var i = 0; i < diagram.cells.length; i ++){
        var cell = diagram.cells[i];
        if(cell.site.c){
          console.log("Cell:Plant");
        }
        else{
          console.log("Cell:Env");
        }
        for(var j = 0; j < cell.halfedges.length; j ++){
          var halfEdge = cell.halfedges[j];
          var edge = halfEdge.edge;
          var va = edge.va;
          var vb = edge.vb;
          console.log("\tEdge: (" + va.x + ", " + va.y + ")  ->  (" + vb.x + ", " + vb.y +")");
        }
    }
}

Plant.prototype.simpleUpdate = function(){
  console.log("Ran simple update");
  for(var i = 0; i < this.cells.length; i ++){
    var cell = this.cells[i];
    cell.x += 1;
    this.updateGraphics(cell);
  }
}

var maxMass = 5;

function randomizeMasses(plant){
  for(var i = 0; i < plant.cells.length; i ++){
    plant.cells[i].m = Math.random() * maxMass;
  }
  for(var i = 0; i < plant.envCells.length; i ++){
    plant.envCells[i].m = Math.random() * maxMass;
  }
}

function crossProduct(a, b){
  if(!a.z){
    a.z = 0;
  }
  if(!b.z){
    b.z = 0;
  }
  var c = {x:0, y:0, z:0};
  c.x = a.y * b.z - a.z*b.y;
  c.y = a.z *b.x - b.z * a.x;
  c.z = a.x * b.y - b.x*a.y;
  return c;
}

var mdNorm = {x:0, y: 1};
var mdTangent = crossProduct(mdNorm, {x:0, y:0, z:1});
var mdRatio = 5;
var learningRate = 0.1;
var v2ConvergeScale = 20;

Plant.prototype.mdConvergenceUpdateV2 = function(){
  recurse(this.root, {x:0, y:0});
  function recurse(cur, delta){
    if(cur.children){
      for(var i = 0; i < cur.children.length; i ++){
        var child = cur.children[i];
        var e = subtract(child, cur);
        var mag_e = magnitude(e);
        var dif =  v2ConvergeScale * (getMass(cur) + getMass(child)) / cur.children.length - mag_e;

        var newDelta = multiply(getNorm(e), learningRate * dif);
        //console.log("New delta : (" + newDelta.x + ", " + newDelta.y + " )");
        recurse(child, add(delta,  newDelta));


      }
    }
    moveCell(cur, delta, 1);

  }
}

var thicknessScale = 1;

function thickness(a){
  return thicknessScale * getMass(a);

}

function getNorm(v){
  var mag = magnitude(v);
  return {x: v.x / mag, y: v.y / mag};
}

Plant.prototype.mdConvergenceUpdate = function(){

  var allSites = this.cells.concat(this.envCells);

  for(var i = 0; i < allSites.length; i ++){
    var siteA = allSites[i];
    for(var j = i +1; j < allSites.length;  j ++ ){
      var siteB = allSites[j];
      var curDistance = eDistance(siteA, siteB);
      var currentRatio = curDistance / (siteA.m + siteB.m);
      var dDistance = (mdRatio - currentRatio) * (siteA.m + siteB.m);

      var a = Math.abs(dotProduct(subtract(siteA,siteB), mdNorm));
      var b = Math.abs(dotProduct(subtract(siteA,siteB), mdTangent));

      var dNormal = Math.sqrt(Math.pow(curDistance + dDistance, 2) - Math.pow(b,2)) - a;

      var aMoveSign = 0;

      if(dotProduct(siteA, siteB) > 0){
        aMoveSign = 1;
      }
      else{
        aMoveSign = -1;
      }

      var magA = aMoveSign * dNormal *(siteA.m / (siteA.m + siteB.m)) * learningRate;
      var magB = -1 * aMoveSign * dNormal * (siteB.m / (siteA.m + siteB.m)) * learningRate;

      if(isNaN(magA) || isNaN(magB)){
        console.log("Be like dafuq!");
      }

      moveCell(siteA, mdNorm, magA );
      moveCell(siteB, mdNorm, magB );

    }
  }

  for(var i = 0; i < allSites.length; i ++){
    console.log("("+allSites[i].x + ", " + allSites[i].y + " )")
    this.updateGraphics(allSites[i]);
  }



}


function add(a,b){
  return {x:a.x + b.x, y: a.y + b.y};
}

function multiply(v, mag){
  return {x: v.x * mag, y: v.y * mag};
}

function subtract(a, b){
  return {x: a.x - b.x, y: a.y - b.y};
}

function dotProduct(a,b){
  return a.x*b.x + a.y*b.y;
}

function moveCell(cell, norm, mag){
  cell.x = cell.x + norm.x * mag;
  cell.y = cell.y + norm.y * mag;
}

function eDistance(cellA, cellB){
  return Math.sqrt(Math.pow(cellA.x - cellB.x, 2) + Math.pow(cellA.y - cellB.y, 2));
}

function magnitude(v){
  return Math.sqrt(v.x * v.x + v.y * v.y);
}


Plant.prototype.updateGraphics = function(cell){
  cell.graphics.x = cell.x;
  cell.graphics.y = cell.y;

}





function addCell(cell) {

  var graphics = game.add.graphics(cell.x, cell.y);
  if (cell.nut) {
    console.log('color', nutrientColor(cell.nut));
  }
  graphics.beginFill( (cell.nut && nutrientColor(cell.nut)) || 0x000000, 1);
  graphics.drawCircle(0, 0, 10 );//* cell.m / 10);
  cell.graphics = graphics;
}


