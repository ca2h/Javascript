// Prijzen (gebruik const!)
const PRIJS_BROOD = 2.50;
const PRIJS_MELK = 1.20;
const PRIJS_KOFFIE = 4.95;

// Aantallen (gebruik let)
let aantalBrood = 3;
let aantalMelk = 2;
let aantalKoffie = 1;


let totbrood = (aantalBrood * PRIJS_BROOD).toFixed(2);
let totmelk = (aantalMelk * PRIJS_MELK).toFixed(2);
let totkoffie = (aantalKoffie * PRIJS_KOFFIE).toFixed(2);

let totaal = (Number(totbrood) + Number(totmelk) + Number(totkoffie)).toFixed(2);




let btw = (totaal * 0.21).toFixed(2);

let totincbtw = (Number(totaal) + Number(btw)).toFixed(2);

console.log("totaal " + totaal);
console.log("btw " + btw);
console.log("alles " + totincbtw)



console.log("========== KASSABON ==========");
console.log(aantalBrood + "x Brood      à " + PRIJS_BROOD + " = " + totbrood);
console.log(aantalMelk + "x Melk       à "+ PRIJS_MELK + " = " + totmelk);
console.log(aantalKoffie + "x Koffie     à " + PRIJS_KOFFIE + " = " + totkoffie);
console.log("------------------------------");
console.log("Subtotaal:          €" + totaal);
console.log("BTW (21%):          €" + btw)
console.log("------------------------------");
console.log("TOTAAL:             €" + totincbtw)
console.log("==============================")



document.getElementById(1).innerText = "========== KASSABON ==========";
document.getElementById(2).innerText = aantalBrood + "x Brood      à " + PRIJS_BROOD + " = " + totbrood;
document.getElementById(3).innerText = aantalMelk + "x Melk       à "+ PRIJS_MELK + " = " + totmelk;
document.getElementById(4).innerText = aantalKoffie + "x Koffie     à " + PRIJS_KOFFIE + " = " + totkoffie;
document.getElementById(5).innerText = "------------------------------";
document.getElementById(6).innerText = "Subtotaal:          €" + totaal;
document.getElementById(7).innerText = "BTW (21%):          €" + btw;
document.getElementById(8).innerText = "------------------------------";
document.getElementById(9).innerText = "TOTAAL:             €" + totincbtw;
document.getElementById(10).innerText = "==============================";
