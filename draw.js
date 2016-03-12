/*
The draw() loop. Call draw() as often as you want, and it
will redraw all the graphics on the screen, i.e. update to current values.

call registerDraw(drawFunc, context) to have your draw function be called every draw.
*/

/* contexts[i] is the parent object of the draw function drawFunctions[i] */
var drawFunctions = [];
var contexts = [];

function draw() {
  for (var i = 0; i < drawFunctions.length; i++) {
    drawFunctions[i].apply(contexts[i]);
  }
}

/* Add drawFunc to draw list.
*/
function registerDraw(drawFunc, context) {
  drawFunctions.push(drawFunc);
  contexts.push(context);
}

/* Remove function from draw list.
Returns true if the function was on the list. */
function unregisterDraw(drawFunc) {
  delete contexts[drawFunc];
  var index = drawFunctions.indexOf(drawFunc);
  drawFunctions.splice(index,1);
}

// update draws, 30 fps
var drawIntervalID = window.setInterval(draw, 33.333333333);
