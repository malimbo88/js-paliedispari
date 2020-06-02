//MyJavaScript1

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var sceltaUtente = prompt("Scegli pari o dispari");
while (sceltaUtente.toLowerCase() !== "pari" && sceltaUtente.toLowerCase() !== "dispari") {
  sceltaUtente = prompt("Errore.Scegli pari o dispari");
  console.log("Errore scelta " + sceltaUtente)
}

console.log("OK. hai scelto: " + sceltaUtente);

var numeroUtente = parseInt(prompt("Scrivi un numero da 1 a 5"));
while((isNaN(numeroUtente)) || (numeroUtente > 5) || (numeroUtente < 1)) {
  numeroUtente = parseInt(prompt("Errore.Scrivi un numero da 1 a 5"));
  console.log("Errore numero " + numeroUtente)
}

console.log("OK. hai scelto " + numeroUtente);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom(esponente, inizio) {
  var numeroCpu = Math.floor(Math.random() * esponente + inizio);
  console.log("Il numero generato dalla Cpu: " + numeroCpu);
  return numeroCpu;
}

//Sommiamo i due numeri
somma = numeroUtente + numeroRandom(5, 1);
console.log("La somma dei due numeri: " + somma);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariODispari (numero) {
  var risultato = "dispari";
  if (numero % 2 === 0) {
    risultato = "pari";
  }
  return risultato;
}

//Dichiariamo chi ha vinto.
if (pariODispari(somma) === sceltaUtente) {
  console.log("Hai vinto")
} else {
  console.log("Hai perso")
}
