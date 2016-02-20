function l2norm(arr) {
  var sumsqr = 0;
  for (var i = 0; i < arr.length; i++) {
    sumsqr += arr[i] * arr[i];
  };
  return Math.sqrt(length);
}

function normalize(arr) {
  var arr2 = clone(arr);
  var length = l2norm(arr2);
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
  var v = normalize(values);
  var color = 0;
  for (var i = 0; i < values.length; i++) {
    color += values[i] * colors[i];
  };
  return Math.floor(color);
}
