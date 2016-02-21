/* Pretty sky */

/* Returns color number like 0xffffff
    @param hour Number 0-24
*/

//0 to 24
var skyColors = [
0x10102C, 0x20203C, 0x404040, 0x606060, 0x707070,
0x879E9B, 0x879ECA, 0xB0C0D6, 0xF0F8FF, 0xFFFFFF,
0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xFFFFFF,
0xFFFFFF, 0xFFFFFF, 0xFFFFFF, 0xF7BE81, 0xFE9A2E,
0x045FB4, 0x084B8A, 0x084B8A, 0x0B0B61
]



function lightColorTimeOfDay(hour) {
	return skyColors[hour];
}

var hour = 0;
onTick(function() {
  hour ++;
  hour %= 24;
  console.log('current color', skyColors[hour]);
});

function currentLightColor() {
  return lightColorTimeOfDay(hour);
}

function multiplyLight(color, lightColor) {
  if (!lightColor) lightColor = currentLightColor();
  // var lightColor = l;

  var lr = lightColor >>> 16;
  var lg = (lightColor & 0x00FF00) >>> 8;
  var lb = (lightColor & 0x0000FF);
  var cr = color >>> 16;
  var cg = (color & 0x00FF00) >>> 8;
  var cb = (color & 0x0000FF);

  if (lightColor == 0xffffff){
  	return color;
  }else if(lightColor == 0x000000){
  	return 0x000000;
  }else{
  	cr = Math.floor(lr/0xff*cr);
  	cg = Math.floor(lg/0xff*cg);
  	cb = Math.floor(lb/0xff*cb);
  	return (cr<<16) + (cg<<8) + cb;
  }
}

