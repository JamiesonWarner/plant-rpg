function Plant() {
  this.cells = [];
  this.envCells = []
  this.root;

  generateBasicPlant(this,3)

  randomizeMasses(this);

  for (var i = 0; i < this.cells.length; i++) {
    addCell(this.cells[i]);
  }

  for (var i = 0; i < this.envCells.length; i++) {
    addCell(this.envCells[i]);
  }

  this.voronoiCalc = new Voronoi();

}

function generateBasicPlant(plant, height){

  var root = {x: 400, y: 400};

  recurse(root,height);

  function recurse(cur, height){
    plant.cells.push(cur);
    if(height === 0){
      return;
    }
    else{
      var childA = {x: cur.x + Math.pow(2,height) * 5, y: cur.y - 50};
      var childB = {x: cur.x - Math.pow(2,height) * 5, y: cur.y - 50};
      cur.children={childA, childB};
      recurse(childA,height -1);
      recurse(childB, height -1);
    }
  }

  plant.root = root;
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
var learningRate = 0.01;

Plant.prototype.mdConvergenceUpdateV2 = function(){

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


Plant.prototype.updateGraphics = function(cell){
  cell.graphics.x = cell.x;
  cell.graphics.y = cell.y;
}





function addCell(cell) {

  var graphics = game.add.graphics(cell.x, cell.y);
  graphics.beginFill(cell.c || 0x000000, 1);
  graphics.drawCircle(0, 0, 10 );//* cell.m / 10);
  cell.graphics = graphics;
}


