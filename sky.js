/* Pretty sky */

/* Returns color number like 0xffffff
    @param hour Number 0-24
*/

//0 to 24
var skyColors = [
0x191970, 0x00008B, 0x404040, 0x606060, 0x000080,
0x87CEEB, 0x87CEFA, 0xB0E0E6, 0xF0F8FF, 0x81F7F3,
0xCEF6F5, 0xEFFBFB, 0xFFFFFF, 0xF5ECCE, 0xF7F2E0,
0xF8ECE0, 0xF6E3CE, 0xF5D0A9, 0xF7BE81, 0xFE9A2E,
0x045FB4, 0x084B8A, 0x08088A, 0x0B0B61, 0x191970
]

function lightColorTimeOfDay(hour) {
	return skyColors[hour];
}

var hour = 0;
onTick(function() {
  hour ++;
  hour %= 24;
});

function currentLightColor() {
  return lightColorTimeOfDay(hour);
}

function multiplyLight(color) {
  var lightColor = currentLightColor();

  return lightColor / 0xFFFFFF * color;

  // if lightColor == 0xffffff, return color

  // if lightColor == 0x000000, return 0x000000

  // if lightColor == 0xFF0000, return 0xXX0000
  // e.g. color == 0xDDDDDD, return DD000000

  // ???
  return color;
}