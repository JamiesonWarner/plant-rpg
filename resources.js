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

  document.getElementById('h20').textContent = sumResources[WATER];
  document.getElementById('co2').textContent = sumResources[CARBON_DIOXIDE];
  document.getElementById('n2').textContent = sumResources[OXYGEN];
  document.getElementById('o2').textContent = sumResources[NITROGEN];
  document.getElementById('p').textContent = sumResources[PHOSPHORUS];
  document.getElementById('k').textContent = sumResources[POTASSIUM];
  document.getElementById('c6h12o6').textContent = sumResources[GLUCOSE];
  document.getElementById('atp').textContent = sumResources[ATP];
}