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
  // registerDraw(this.draw, this);
  onTick(function() {
    self.draw();
  })
  window.graphics = graphics;
}

Env.prototype.destroy = function() {
  this.graphics.destroy();
}


Env.prototype.draw = function() {
  var graphics = this.graphics;
  graphics.ctx.clearRect(0,0,600,600);
  graphics.ctx.beginPath();
  // var lightColor = currentLightColor();
  for (var i = 0; i < T_HEIGHT; i++) {
    for (var j = 0; j < T_WIDTH; j++) {
      var tile = this.tiles[i*T_WIDTH+j];
      var color = colorLerp(tile, CHEMICAL_COLORS);
      color = multiplyLight(color);
      graphics.ctx.fillStyle = colorToString(color);
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
        tile[0] = Number(slider1.value);
        tile[1] = Number(slider2.value);
        tile[2] = Number(slider3.value);
        tile[3] = Number(slider4.value);
        tile[4] = Number(slider5.value);
        tile[5] = Number(slider6.value);
      }
      else {
        tile[0] = Number(slider7.value);
        tile[1] = Number(slider8.value);
        tile[2] = Number(slider9.value);
        tile[3] = Number(slider10.value);
        tile[4] = Number(slider11.value);
        tile[5] = Number(slider12.value);
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
  return zeros(N_NUTRIENTS);
}

