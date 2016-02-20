var T_WIDTH = 100;
var T_HEIGHT = 100;
var T_SIZE = 6;

function Env() {
  this.tiles = makeTiles();
  console.log('Env tiles', this.tiles);

  // tiles[0] is at world coordinates [0,594]
  var graphics = game.add.bitmapData(T_WIDTH * T_SIZE, T_HEIGHT * T_SIZE);
  graphics.ctx.beginPath();
  for (var i = 0; i < T_HEIGHT; i++) {
    for (var j = 0; j < T_WIDTH; j++) {
      var tile = this.tiles[i*T_WIDTH+j];
      var color = colorLerp(tile, CHEMICAL_COLORS);
      console.log(color);
      graphics.ctx.fillStyle = "#" + color.toString(16);
      graphics.ctx.fillRect(j*T_SIZE,(T_HEIGHT-i-1)*T_SIZE,T_SIZE,T_SIZE);
    };
  };
  graphics.addToWorld();

  window.graphics = graphics;
}

Env.prototype.getTile = function(x,y) {
  return this.tiles[Math.floor(x) + T_WIDTH * Math.floor(y)];
}

function makeTiles() {
  var tiles = new Array();
  for (var i = 0; i < T_HEIGHT; i++) {
    for (var j = 0; j < T_WIDTH; j++) {
      var tile = makeTile();
      if (i < 50) {
        tile[0] = .8;
        tile[1] = .05;
        tile[2] = .05;
        tile[3] = .2;
        tile[4] = .2;
      }
      else {
        tile[0] = .1;
        tile[1] = .5;
        tile[2] = .5;
        tile[3] = 0;
        tile[4] = 0;
      }
      tiles.push(tile)
    };
  };
  return tiles;
}

function makeTile() {
  return [0,0,0,0,0];
}

