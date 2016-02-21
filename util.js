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

}

function colorToString(color) {
  var str = color.toString(16);
  var zeros = "";
  for (var i = 0; i < 6-str.length; i++) {
    zeros = "0" + zeros;
  };
  return "#" + zeros + str;
}