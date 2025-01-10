// variabili
const prezzobigliettokm = 0.21
let km = parseInt ( prompt ( "quanti km devi percorrere") )
let età = parseInt ( prompt ( "quanti anni hai") )
let scontominorenni = 0.80
let scontoover65 = 0.60
let prezzobiglietto;

// calcoli

if ( età < 18 ) {
    prezzobiglietto = ( prezzobigliettokm * km ) * scontominorenni
    console.log ( `il prezzo del tuo biglietto è: ${prezzobiglietto}`)
} else if ( età > 65 ) {
    prezzobiglietto = ( prezzobigliettokm * km ) * scontoover65
} else {
    prezzobiglietto = ( prezzobigliettokm * km )
}

// output
console.log (`il prezzo del tuo biglietto è ${prezzobiglietto.toFixed (2) }` )