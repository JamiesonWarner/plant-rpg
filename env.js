/*
Environment the plant lives in. Maintains an array of tiles
which represent chemical values in the world.
tiles is a (WIDTH*HEIGHT) array of [c1,c2,c3] chemical values.
*/
var T_WIDTH = 100;
var T_HEIGHT = 100;
var T_SIZE = 6;

function Env() {
  this.tiles = makeTiles();
  console.log('Env tiles', this.tiles);

  // tiles[0] is at world coordinates [0,594]
  this.graphics = game.add.bitmapData(T_WIDTH * T_SIZE, T_HEIGHT * T_SIZE);
  this.draw();
  this.graphics.addToWorld();

  var self = this;
  onTick(function() {
    self.draw();
  })
  // window.graphics = graphics;
}

Env.prototype.draw = function() {
  var graphics = this.graphics;
  graphics.ctx.beginPath();
  var lightColor = currentLightColor();
  for (var i = 0; i < T_HEIGHT; i++) {
    for (var j = 0; j < T_WIDTH; j++) {
      var tile = this.tiles[i*T_WIDTH+j];
      var color = colorLerp(tile, CHEMICAL_COLORS);

      color *= (lightColor / 0xffffff);
      // color = 8690307;
      // console.log(color);
      // color = "#" + (i+j).toString(16);
      graphics.ctx.fillStyle = "#" + color.toString(16);
      graphics.ctx.fillRect(j*T_SIZE,(T_HEIGHT-i-1)*T_SIZE,T_SIZE,T_SIZE);
    };
  };
}

/* Gets the tile at the given screen coordinates */
Env.prototype.getTile = function(x,y) {
  x /= T_SIZE;
  y /= T_SIZE;
  y = T_HEIGHT-y-1;
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
      for (var k = 0; k < tile.length; k++) {
        tile[k] += .001 * Math.random();
      };
      tiles.push(tile);
    };
  };
  return tiles;
}

function makeTile() {
  return [0,0,0,0,0];
}

