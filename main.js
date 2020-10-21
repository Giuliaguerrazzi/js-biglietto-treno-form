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
});

// costo biglietto
var prezzoKm = 0.21;

var costoBiglietto = prezzoKm * kmDaPercorre;
