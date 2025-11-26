function vragen(){

let voornaam = prompt("Wat is je voor naam?");
let achternaam = prompt("Wat is je achternaam?");
const geboortejaar = prompt("Welke jaar ben je geboren?");
let isStudent = confirm("Ben je student?");

let cijferHTML = prompt("Welke cijfer had je voor html/css?");
let cijferWord = prompt("Welk cijfer had je voor Word?");
let cijferLLB = prompt("Welk cijfer had je voor LLB?");

cijferHTML = Number(cijferHTML);
cijferWord = Number(cijferWord);
cijferLLB = Number(cijferLLB);

const HUIDIGE_JAAR = 2025;
const MINIMUM_CIJFER =5.5;

let voldoende = 0;
if(cijferHTML >= MINIMUM_CIJFER){
    voldoende++;
}
if(cijferWord >= MINIMUM_CIJFER){
    voldoende++;
}
if(cijferLLB >= MINIMUM_CIJFER){
    voldoende++;
}

let leeftijd = 2025 - geboortejaar;
let gem = Number((cijferHTML + cijferLLB + cijferWord) / 3).toFixed(2);
if(gem >= MINIMUM_CIJFER){
    window.alert("Je bent geslaagd met een " + gem + " gemiddeld cijfer.")
}
else{
    window.alert("Je bent gefaald met een " + gem + " Cijfer")
}
console.log(typeof(gem) + gem);
console.log(typeof(voldoende) + voldoende);
console.log(typeof(leeftijd) +leeftijd);
// heb 2 strings en 9 numbers 1 bool
// heb dus 12 variable in totaal
}