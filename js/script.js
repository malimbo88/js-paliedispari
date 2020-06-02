//myJavaScript

//Chiedere a utente di inserire una parola
parola = prompt("Inserisci una parola");
parolaSplitInterno = parola.split(" ");
parolaSenzaSpazi = parolaSplitInterno.join("");
parolaUtente = parolaSenzaSpazi.toLowerCase();

//Validazione parola inserita da utente
while (!isNaN(parola)) {
  parola = prompt("Errore. Inserisci una parola")
  parolaSplitInterno = parola.split(" ");
  parolaSenzaSpazi = parolaSplitInterno.join("");
  parolaUtente = parolaSenzaSpazi.toLowerCase();
}

console.log("parola utente: " + parola);
console.log("Elimino spazio interno: " + parolaSplitInterno);
console.log("parola senza spazi: " + parolaSenzaSpazi);
console.log("parola Utente: " + parolaUtente);


//Creare una funzione per capire se la parola inserita è palindroma
function parolaPalindroma (stringa) {
  var arrayStringa = stringa.split("")
  var arrayStringaReverse = arrayStringa.reverse();
  return arrayStringaReverse.join("");
}

console.log(parolaPalindroma(parolaUtente));


//Verifico che la parola sia palindroma e Stampo il risultato

if (parolaPalindroma(parolaSenzaSpazi) === parolaUtente) {

  console.log("La parola inserita risulta palindroma: si legge: " + " - " + parolaUtente + " - " + " e al contrario si legge: " + " - " + parolaPalindroma(parolaUtente) + " - ");
}else {

  console.log("La parola inserita NON risulta palindroma: si legge: " + " - " + parolaUtente + " - " + " e al contrario si legge: " + " - " + parolaPalindroma(parolaUtente) + " - ");
}
