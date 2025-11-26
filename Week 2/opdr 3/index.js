let voornaam = prompt("wat is je voornaam?");
let achternaam = prompt("wat is je achternaam?");
let verjaardag = Number(prompt("hoe oud ben je"));
let woonplaats = prompt("wat is je woonplaats");
let studeerje = confirm("studeer je?")
let vollenaam = voornaam + " " + achternaam;
let geboortejaar = 2025 - verjaardag;
console.log("naam: " + typeof(vollenaam))
console.log("Leeftijd: " + typeof(verjaardag))
console.log("geboren: circa " + typeof(geboortejaar))
console.log("Woonplaats: " + typeof(woonplaats))
console.log("Student: " + typeof(studeerje))
