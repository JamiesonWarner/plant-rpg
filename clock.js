var tickCbs = [];
function onAnimationFrame(cb) {
  window.requestAnimationFrame(cb);
}
function onTick(cb) {
  tickCbs.push(cb);
}

// Called once every second. 1 tick == 4 hours
function tick() {
  console.log('tick');
  for (var i = 0; i < tickCbs.length; i++) {
    tickCbs[i]();
  };
}
setInterval(tick, 1000);
