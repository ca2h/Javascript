window.onload = function () {
    welcome();
}


function welcome() {
    let naam = prompt("Wat is je name?");
    console.log(naam);
    document.getElementById("naam").innerText = naam;
}
function verjaardag(){
    let jaar = prompt("Welk jaar ben je Geboren?");
    let geboren = new Date().getFullYear() -jaar
    document.getElementById("verjaardag").innerText = "je bent " + geboren + " jaar oud";
    console.log("je bent in het jaar " + geboren + "  geboren");
}
function contact(){
    let email=prompt("Wat is je email")
    let message=prompt("Wat is je bericht")
    console.log("het email is: " + email)
    console.log("het bericht is: " + message)
    alert("je bericht is verzonden")
}

function quote(){
    const alerts =[
        "een dag niet ademen een dag niet leven",
        "a apple a day keeps the doctor away",
        "test test is het beste wat er is",
        "de laatste lach is het beste"
    ]
    const randomgetal = Math.floor(Math.random() * alerts.length);
    document.getElementById("quote").innerText = alerts[randomgetal]
}

function quiz() {
    let beginquiz = confirm("Wil je de quiz over Casper doen?")
    console.log(beginquiz)
    if (beginquiz === true){
        let goed = 0
        let vraag1 =prompt("Hoe oud ben ik?")
        console.log(vraag1)
        if (vraag1 === "17") {
            goed = goed + 1
            console.log("je hebt het goed")
            console.log(goed)
        }
        else{
            console.log("je had het fout")
            console.log(goed)
        }
        let vraag2 =prompt("Welke sport doe ik")
        if (vraag2.toLowerCase() === "hockey") {
            goed = goed + 1
            console.log("je hebt het goed")
            console.log(goed)
        }
        else{
            console.log("je had het fout")
            console.log(goed)
        }
        let vraag3 =prompt("Hoeveel mensen zitten er in me gezin")
        if (vraag3.toLowerCase() === "5") {
            goed = goed + 1
            console.log("je hebt het goed")
            console.log(goed)
        }
        else{
            console.log("je had het fout")
            console.log(goed)
        }

document.getElementById("score").innerText = "Je hebt: " + goed + " van de 3 goed"
    }
    else {
    alert("Oke dan een andere keer.")
    }
}



