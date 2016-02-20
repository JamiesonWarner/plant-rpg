function Plant() {
  this.cells = [{x:300,y:300,c:0x00FF00},{x:300,y:350,c:0x00FF00}];
  this.envCells = [{x:250,y:300},{x:300,y:250},{x:350,y:300},{x:350,y:350},{x:300,y:400},{x:250,y:350}];

  for (var i = 0; i < this.cells.length; i++) {
    addCell(this.cells[i]);
  }

  for (var i = 0; i < this.envCells.length; i++) {
    addCell(this.envCells[i]);
  }

  this.voronoiCalc = new Voronoi();

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

function addCell(cell) {
  var graphics = game.add.graphics(cell.x, cell.y);
  graphics.beginFill(cell.c || 0x000000, 1);
  graphics.drawCircle(0, 0, 10);
}


