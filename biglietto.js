
/* calcolo del prezzo del biglietto */

// chiedi a user quanti chilometri vuole percorrere

const userKilometers = prompt("Quanti chilometri vuoi percorrere?");
console.log(userKilometers);

// chiedi a user la sua età

const userAge = prompt("Quanti anni hai?");
console.log(userAge);

// calcolo del prezzo

const prezzoBiglietto = userKilometers * 0.21;
console.log(prezzoBiglietto);

// calcolo del prezzo scontato

var prezzoScontato;

if (userAge < 18) {
    prezzoScontato = prezzoBiglietto - ((prezzoBiglietto * 20) / 100);
    var numb = prezzoScontato;
    numb = numb.toFixed(2);

} else if (userAge > 65) {
    prezzoScontato = prezzoBiglietto - ((prezzoBiglietto * 40) / 100);
    var numb = prezzoScontato;
    numb = numb.toFixed(2);
} else {
    prezzoScontato = prezzoBiglietto * 1;
    var numb = prezzoScontato;
    numb = numb.toFixed(2);
}

let risultato = `Questo è il prezzo del tuo biglietto: ${prezzoScontato}€`

document.getElementById("biglietto_treno").innerHTML = risultato;

console.log(prezzoScontato);