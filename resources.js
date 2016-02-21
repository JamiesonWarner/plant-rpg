function Resources() {
  onTick(function() {
    updateResourceBar();
  })
}

function updateResourceBar() {
  var sumResources = zeros(N_NUTRIENTS);
  for (var i = 0; i < plant.cells.length; i++) {
    for (var j = 0; j < N_NUTRIENTS; j++) {
      sumResources[j] += plant.cells[i].nut[j];
    };
  };

  document.getElementById('h20').textContent = sumResources[WATER].toFixed(2);
  document.getElementById('co2').textContent = sumResources[CARBON_DIOXIDE].toFixed(2);
  document.getElementById('n2').textContent = sumResources[OXYGEN].toFixed(2);
  document.getElementById('o2').textContent = sumResources[NITROGEN].toFixed(2);
  document.getElementById('p').textContent = sumResources[PHOSPHORUS].toFixed(2);
  document.getElementById('k').textContent = sumResources[POTASSIUM].toFixed(2);
  document.getElementById('c6h12o6').textContent = sumResources[GLUCOSE].toFixed(2);
  document.getElementById('atp').textContent = sumResources[ATP].toFixed(2);
}