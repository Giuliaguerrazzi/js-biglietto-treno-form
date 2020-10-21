// Referenza elementi
var biglietto = document.getElementById('biglietto');

var bottoneGenera = document.getElementById('btnGenera');

var bottoneAnnulla = document.getElementById('btnAnnulla');

// Genera biglietto
bottoneGenera.addEventListener('click', function() {
  // prendere i dati
  var nome = document.getElementById('nome').value;
  console.log(nome);

  var kmDaPercorre = document.getElementById('km').value;
  console.log(kmDaPercorre);

  var fasciaEta = document.getElementById('age').value;
  console.log(fasciaEta);

  // costo biglietto
  var prezzoKm = 0.21;

  var costoBiglietto = prezzoKm * kmDaPercorre;

  var offerta = 'Biglietto standard';

  // offerte
  if (fasciaEta == 'minorenne') {
    costoBiglietto -= costoBiglietto * 0.2;
    offerta = 'Sconto 20% Minorenne';
  }
  else if (fasciaEta == 'over65') {
    costoBiglietto -= costoBiglietto * 0.4;
    offerta = 'Sconto 40% Over65';
  }

  costoBiglietto  = costoBiglietto.toFixed(2) + '€';

  var numCarrozza = Math.floor( Math.random() * 10) + 1;

  var codiceCp = Math.floor( Math.random() * (10000 - 9000) ) + 9000;

  document.getElementById('nome-input').innerHTML = nome;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = numCarrozza;
  document.getElementById('cambia-posto').innerHTML = codiceCp;
  document.getElementById('costo-biglietto').innerHTML = costoBiglietto;
});

// annulla Biglietto
bottoneAnnulla.addEventListener('click', function() {
  biglietto.className = 'hidden';

  // reset
  document.getElementById('nome').value = '';
  document.getElementById('km').value = '';
  document.getElementById('age').value = '';
});
