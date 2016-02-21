function l2norm(arr) {
  var sumsqr = 0;
  for (var i = 0; i < arr.length; i++) {
    sumsqr += arr[i] * arr[i];
  };
  return Math.sqrt(sumsqr);
}

function l1norm(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
}

function normalize(arr, norm) {
  var arr2 = clone(arr);
  var length = (norm || l2norm)(arr2);
  for (var i = 0; i < arr2.length; i++) {
    arr2[i] /= length;
  };
  return arr2;
}

function clone(arr) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    arr2.push(arr[i]);
  };
  return arr2;
}

function colorLerp(values, colors) {
  var v = normalize(values, l1norm);
  var color = 0;
  for (var i = 0; i < values.length; i++) {
    color += v[i] * colors[i];
  };
  return Math.floor(color);
}

/*
Computes a - b
*/
function vecDifference(a, b){
  var arr = new Array(a.length);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = a[i] - b[i];
  };
  return arr;
}

/*
Scales the vector x by a constant c, without making a new vector.
*/
function vecScale(x, c) {
  for (var i = 0; i < x.length; i++) {
    x[i] *= c;
  };
  return x;
}

/*
In place scales x to be length c
*/
function scaleToLength(x, c) {
  var norm = l2norm(x);
  for (var i = 0; i < x.length; i++) {
    c * x[i] / norm;
  };
  return x;
}

/*
a <- a + b
*/
function vecAddInPlace(a, b) {
  for (var i = 0; i < a.length; i++) {
    a[i] += b[i];
  };
}

function colorToString(color) {
  var str = color.toString(16);
  var zeros = "";
  for (var i = 0; i < 6-str.length; i++) {
    zeros = "0" + zeros;
  };
  return "#" + zeros + str;
}

/* Takes a nutrient vector and returns its color as a hex string #ffffff
*/
function nutrientColor(nut) {
  return colorToString(colorLerp(nut, CHEMICAL_COLORS));
}

function zeros(length) {
  var arr = new Array(length);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = 0;
  };
  return arr;
}

/*
Given a numerical color 0x012345, returns its magnitude from 0 to 1
*/
function colorMagnitude(color) {
  var r = (color & 0xFF0000) >>> 16;
  var g = (color & 0x00FF00) >>> 8;
  var b = (color & 0x0000FF);
  return (r+g+b) / (3*0xFF);
}


/*
Given a cell {x,y,parent,nut} returns an array of its two sides [left, right]
where left, right are {x,y}.
*/
function calcSides(cell) {
  var v;
  if (cell.parent) {
    v = [cell.x-cell.parent.x, cell.y-cell.parent.y];
  }
  else {
    v = [0, 1]
  }
  var vleft = [-v[1], v[0]];
  var vright = [v[1], -v[0]];
  var width = l1norm(cell.nut);
  scaleToLength(vleft, width/2);
  scaleToLength(vright, width/2);
  return [
  {
    x: cell.x + vleft[0],
    y: cell.y + vleft[1]
  },
  {
    x: cell.x + vright[0],
    y: cell.y + vright[1]
  }
  ]
}