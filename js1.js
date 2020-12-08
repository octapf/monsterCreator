// JavaScript source code

var totalPlayers = [];
var selectMaxPlayers = document.getElementById("selectMaxPlayers");
var maxPlayers = selectMaxPlayers.value;

var buttonCreat = document.getElementById("button");

var inputPlayerName1 = document.getElementById("namePlayer1");
var inputPlayerName2 = document.getElementById("namePlayer2");
var inputPlayerName3 = document.getElementById("namePlayer3");
var inputPlayerName4 = document.getElementById("namePlayer4");

var selectPlayerRace1 = document.getElementById("selectRace1");
var selectPlayerRace2 = document.getElementById("selectRace2");
var selectPlayerRace3 = document.getElementById("selectRace3");
var selectPlayerRace4 = document.getElementById("selectRace4");

var formPlayer1 = document.getElementById("formPlayer1");
var formPlayer2 = document.getElementById("formPlayer2");
var formPlayer3 = document.getElementById("formPlayer3");
var formPlayer4 = document.getElementById("formPlayer4");

var imgRace = document.getElementById("imgRace1");

var labelAttackPointsBasic = document.getElementById("attackPointsBasic1");
var labelAttackPointsRace = document.getElementById("attackPointsRace1");

var labelDefensePointsBasic = document.getElementById("defensePointsBasic1");
var labelDefensePointsRace = document.getElementById("defensePointsRace1");

var labelEvasionPointsBasic = document.getElementById("evasionPointsBasic1");
var labelEvasionPointsRace = document.getElementById("evasionPointsRace1");

var labelLifePointsBasic = document.getElementById("lifePointsBasic1");
var labelLifePointsRace = document.getElementById("lifePointsRace1");

var attackPoints = 5;
var defensePoints = 3;
var evasionPoints = 3;
var maxLifePoints = 20;
var minLifePoints = 0;

var lifeRaceMidget = 3;
var lifeRaceGnome = -2;
var lifeRaceHuman = 1;
var lifeRaceElf = 4;

var attackRaceMidget = 3;
var attackRaceGnome = -2;
var attackRaceHuman = 1;
var attackRaceElf = 4;

var defenseRaceMidget = 3;
var defenseRaceGnome = -2;
var defenseRaceHuman = 1;
var defenseRaceElf = 4;

var evasionRaceMidget = -3;
var evasionRaceGnome = 3;
var evasionRaceHuman = 1;
var evasionRaceElf = -4;

var imgRaceMidget = "images/players/midget.jpg";
var imgRaceGnome = "images/players/gnome.jpg";
var imgRaceHuman = "images/players/human.jpg";
var imgRaceElf = "images/players/elf.jpg";


var namesValidated;

selectPlayerRace2.value = "Gnome";
selectPlayerRace3.value = "Human";
selectPlayerRace4.value = "Elf";

function creatPlayer(maxPlayers)
{


    let playersName = [inputPlayerName1.value, inputPlayerName2.value, inputPlayerName3.value, inputPlayerName4.value];
    let playersRace = [selectPlayerRace1.value, selectPlayerRace2.value, selectPlayerRace3.value, selectPlayerRace4.value]
   

    switch (maxPlayers) {
        case "1":
            for (var i = 0; i < maxPlayers; i++) {
                let player = {}
                console.log("creo un pj");
                player.id = generateId();
                player.name = playersName[i];
                player.race = new creatRace(playersRace[i]);
                player.level = 1;
                player.exp = 0;
                player.maxExp = 100 * (player.level / 2)
                console.log(player.id);
                totalPlayers.push(player);
                console.log("Player name: " + player.name);
                document.URL ="file:///C:/Users/frang/Google%20Drive/Espa%C3%B1a/Desarrollo%20WEB/Mis%20webs%20HTML/Monster%20creator/battleGround.html";
                document.baseURI ="file:///C:/Users/frang/Google%20Drive/Espa%C3%B1a/Desarrollo%20WEB/Mis%20webs%20HTML/Monster%20creator/battleGround.html";

            }
            break;

        case "2":
            for (var i = 0; i < maxPlayers; i++) {
                
                let player = {}
                console.log("creo dos pjs");
                player.id = generateId();
                player.name = playersName[i];
                player.race = new creatRace(playersRace[i]);
                player.level = 1;
                player.exp = 0;
                player.maxExp = 100 * (player.level / 2)
                totalPlayers.push(player);
                console.log("Player name: " + player.name);

            }
            break;
        case "3":
            for (var i = 0; i < maxPlayers; i++) {
                let player = {}
                console.log("creo tres pjs");
                player.id = generateId();
                player.name = playersName[i];
                player.race = new creatRace(playersRace[i]);
                player.level = 1;
                player.exp = 0;
                player.maxExp = 100 * (player.level / 2)
                totalPlayers.push(player);
                
                console.log("Player name: " + player.name);
            }
            break;
        case "4":
            for (var i = 0; i < maxPlayers; i++) {
                let player = {}
                console.log("creo cuatro pjs");
                player.id = generateId();
                player.name = playersName[i];
                player.race = new creatRace(playersRace[i]);
                player.level = 1;
                player.exp = 0;
                player.maxExp = 100 * (player.level / 2)
                totalPlayers.push(player);
                
                console.log("Player name: " + player.name);
            }
            break;
        default:
    }

    cleanInputs();

}

creatPlayer.prototype=
{
    setId: function (id) {this.id = id

    }

}

function generateId() {
    return totalPlayers.length + 1
}



function cleanInputs() {

    inputPlayerName1.value = ""; 
    inputPlayerName2.value="";
    inputPlayerName3.value="";
    inputPlayerName4.value="";

}

function creatRace(race) {
    switch (race)
    {
        case "Midget":
            this.race = race;
            this.imgRace = imgRaceMidget;
            this.maxLifePoints = maxLifePoints + lifeRaceMidget;
            this.currentLifePoints = this.maxLifePoints;
            this.minLifePoints = minLifePoints;
            this.attackPoints = attackPoints + attackRaceMidget;
            this.defensePoints = defensePoints + defenseRaceMidget;
            this.evasionPoints = evasionPoints + evasionRaceMidget;

            break;

        case "Gnome":
            this.race = race;
            this.imgRace = imgRaceGnome;
            this.maxLifePoints = maxLifePoints + lifeRaceGnome;
            this.currentLifePoints = this.maxLifePoints;
            this.minLifePoints = minLifePoints;
            this.attackPoints = attackPoints + attackRaceGnome;
            this.defensePoints = defensePoints + defenseRaceGnome;
            this.evasionPoints = evasionPoints + evasionRaceGnome;

            break;

        case "Human":
            this.race = race;
            this.imgRace = imgRaceHuman;
            this.maxLifePoints = maxLifePoints + lifeRaceHuman;
            this.currentLifePoints = this.maxLifePoints;
            this.minLifePoints = minLifePoints;
            this.attackPoints = attackPoints + attackRaceHuman;
            this.defensePoints = defensePoints + defenseRaceHuman;
            this.evasionPoints = evasionPoints + evasionRaceHuman;

            break;

        case "Elf":
            this.race = race;
            this.imgRace = imgRaceElf;
            this.maxLifePoints = maxLifePoints + lifeRaceElf;
            this.currentLifePoints = this.maxLifePoints;
            this.minLifePoints = minLifePoints;
            this.attackPoints = attackPoints + attackRaceElf;
            this.defensePoints = defensePoints + defenseRaceElf;
            this.evasionPoints = evasionPoints + evasionRaceElf;

            break;


        default:
    }
}

function displayPlayers(maxPlayers) {

    switch (maxPlayers) {
        case "1":
            formPlayer1.style.cssText = "display:normal !important;";
            formPlayer2.style.cssText = "display:none !important;";
            formPlayer3.style.cssText = "display:none !important;";
            formPlayer4.style.cssText = "display:none !important;";
            break;
        case "2":
            formPlayer1.style.cssText = "display:normal !important;";
            formPlayer2.style.cssText = "display:normal !important;";
            formPlayer3.style.cssText = "display:none !important;";
            formPlayer4.style.cssText = "display:none !important;";
            break;
        case "3":
            formPlayer1.style.cssText = "display:normal !important;";
            formPlayer2.style.cssText = "display:normal !important;";
            formPlayer3.style.cssText = "display:normal !important;";
            formPlayer4.style.cssText = "display:none !important;";
            break;
        case "4":
            formPlayer1.style.cssText = "display:normal !important;";
            formPlayer2.style.cssText = "display:normal !important;";
            formPlayer3.style.cssText = "display:normal !important;";
            formPlayer4.style.cssText = "display:normal !important;";
            break;
        default:
    }

}

function displayPoints(race,selectId) {

    

    switch (selectId) {
        case "selectRace1":
            imgRace = document.getElementById("imgRace1");

            labelAttackPointsBasic = document.getElementById("attackPointsBasic1");
            labelAttackPointsRace = document.getElementById("attackPointsRace1");

            labelDefensePointsBasic = document.getElementById("defensePointsBasic1");
            labelDefensePointsRace = document.getElementById("defensePointsRace1");

            labelEvasionPointsBasic = document.getElementById("evasionPointsBasic1");
            labelEvasionPointsRace = document.getElementById("evasionPointsRace1");

            labelLifePointsBasic = document.getElementById("lifePointsBasic1");
            labelLifePointsRace = document.getElementById("lifePointsRace1");
            break;

        case "selectRace2":
            imgRace = document.getElementById("imgRace2");

            labelAttackPointsBasic = document.getElementById("attackPointsBasic2");
            labelAttackPointsRace = document.getElementById("attackPointsRace2");

            labelDefensePointsBasic = document.getElementById("defensePointsBasic2");
            labelDefensePointsRace = document.getElementById("defensePointsRace2");

            labelEvasionPointsBasic = document.getElementById("evasionPointsBasic2");
            labelEvasionPointsRace = document.getElementById("evasionPointsRace2");

            labelLifePointsBasic = document.getElementById("lifePointsBasic2");
            labelLifePointsRace = document.getElementById("lifePointsRace2");
            break;
        case "selectRace3":
            imgRace = document.getElementById("imgRace3");

            labelAttackPointsBasic = document.getElementById("attackPointsBasic3");
            labelAttackPointsRace = document.getElementById("attackPointsRace3");

            labelDefensePointsBasic = document.getElementById("defensePointsBasic3");
            labelDefensePointsRace = document.getElementById("defensePointsRace3");

            labelEvasionPointsBasic = document.getElementById("evasionPointsBasic3");
            labelEvasionPointsRace = document.getElementById("evasionPointsRace3");

            labelLifePointsBasic = document.getElementById("lifePointsBasic3");
            labelLifePointsRace = document.getElementById("lifePointsRace3");
            break;
        case "selectRace4":
            imgRace = document.getElementById("imgRace4");

            labelAttackPointsBasic = document.getElementById("attackPointsBasic4");
            labelAttackPointsRace = document.getElementById("attackPointsRace4");

            labelDefensePointsBasic = document.getElementById("defensePointsBasic4");
            labelDefensePointsRace = document.getElementById("defensePointsRace4");

            labelEvasionPointsBasic = document.getElementById("evasionPointsBasic4");
            labelEvasionPointsRace = document.getElementById("evasionPointsRace4");

            labelLifePointsBasic = document.getElementById("lifePointsBasic4");
            labelLifePointsRace = document.getElementById("lifePointsRace4");
            break;
        default:
    }
    
    
    labelAttackPointsBasic.innerHTML = attackPoints;
    labelDefensePointsBasic.innerHTML = defensePoints;
    labelEvasionPointsBasic.innerHTML = evasionPoints;
    labelLifePointsBasic.innerHTML = maxLifePoints;

   

    switch (race) {
        case "Midget":
            labelAttackPointsRace.innerHTML = attackRaceMidget;
            labelDefensePointsRace.innerHTML = defenseRaceMidget;
            labelEvasionPointsRace.innerHTML = evasionRaceMidget;
            labelLifePointsRace.innerHTML = lifeRaceMidget;
            imgRace.src = imgRaceMidget;

            break;
        case "Gnome":
            labelAttackPointsRace.innerHTML = attackRaceGnome;
            labelDefensePointsRace.innerHTML = defenseRaceGnome;
            labelEvasionPointsRace.innerHTML = evasionRaceGnome;
            labelLifePointsRace.innerHTML = lifeRaceGnome;
            imgRace.src = imgRaceGnome;
            break;

        case "Human":
            labelAttackPointsRace.innerHTML = attackRaceHuman;
            labelDefensePointsRace.innerHTML = defenseRaceHuman;
            labelEvasionPointsRace.innerHTML = evasionRaceHuman;
            labelLifePointsRace.innerHTML = lifeRaceHuman;
            imgRace.src = imgRaceHuman;
            break;

        case "Elf":
            labelAttackPointsRace.innerHTML = attackRaceElf;
            labelDefensePointsRace.innerHTML = defenseRaceElf;
            labelEvasionPointsRace.innerHTML = evasionRaceElf;
            labelLifePointsRace.innerHTML = lifeRaceElf;
            imgRace.src = imgRaceElf;
            break;

        default:
    }
}

function validateNames(maxPlayers, namePlayer1, namePlayer2, namePlayer3, namePlayer4) 
{
    
    switch (maxPlayers) {
        case "1":
            if (namePlayer1 != "")           { console.log("Crear 1 pj");      creatPlayer(selectMaxPlayers.value);
                
            }
            else{console.log("Ingresar nombre")}

            break;
        case "2":
            if (namePlayer1 != "" && namePlayer2 != "" ) { console.log("Crear 2 pjs") 
            creatPlayer(selectMaxPlayers.value);
                
            }
            else{console.log("Ingresar nombres")}
            break;
        case "3":
            if (namePlayer1 != "" && namePlayer2 != "" && namePlayer3 != ""  ) { console.log("Crear 3 pjs")
            creatPlayer(selectMaxPlayers.value);
                
            }
            else{console.log("Ingresar nombres")}
            break;
        case "4":
            if (namePlayer1 != "" && namePlayer2 != "" && namePlayer3 != "" && namePlayer4 != "") { console.log("Crear 4 pjs")
            creatPlayer(selectMaxPlayers.value);
                
            }
            else{console.log("Ingresar nombres")}
            break;

        default:
            break;
    }

}

function playerGainExp(id, expGained) 
{
   for (let i = 0; i < totalPlayers.length; i++) 
   
   {if (totalPlayers[i].id === id) 
    {
            totalPlayers[i].exp += expGained;
            checkPlayerLevel(totalPlayers[i].id)
            console.log("Player experience is: " + totalPlayers[i].exp)
            console.log("Player max experience is: " + totalPlayers[i].maxExp)
            console.log("Player level is: " + totalPlayers[i].level)
    }
       
   }
    
}

function checkPlayerLevel(id) {
    for (let i = 0; i < totalPlayers.length; i++)
   
   {if (totalPlayers[i].id === id) 
    {
           if (totalPlayers[i].exp >= totalPlayers[i].maxExp) {
               totalPlayers[i].level += 1;
               totalPlayers[i].maxExp = 70 * (totalPlayers[i].level / 0.5)
               totalPlayers[i].exp = 0
           } 

    }
       
   }
    
}


buttonCreat.addEventListener("click", function () { validateNames(selectMaxPlayers.value, inputPlayerName1.value, inputPlayerName2.value, inputPlayerName3.value, inputPlayerName4.value) })
selectPlayerRace1.addEventListener("change", function () { displayPoints(selectPlayerRace1.value, selectPlayerRace1.id) })
selectPlayerRace2.addEventListener("change", function () { displayPoints(selectPlayerRace2.value, selectPlayerRace2.id) })
selectPlayerRace3.addEventListener("change", function () { displayPoints(selectPlayerRace3.value, selectPlayerRace3.id) })
selectPlayerRace4.addEventListener("change", function () { displayPoints(selectPlayerRace4.value, selectPlayerRace4.id) })
selectMaxPlayers.addEventListener("change", function () { displayPlayers(selectMaxPlayers.value) })

window.addEventListener("load", function () { displayPoints(selectPlayerRace1.value, selectPlayerRace1.id) })
window.addEventListener("load", function () { displayPoints(selectPlayerRace2.value, selectPlayerRace2.id) })
window.addEventListener("load", function () { displayPoints(selectPlayerRace3.value, selectPlayerRace3.id) })
window.addEventListener("load", function () { displayPoints(selectPlayerRace4.value, selectPlayerRace4.id) })

window.addEventListener("load", function () { displayPlayers(selectMaxPlayers.value) })

/*inputPlayerName1.hidden = true;
inputPlayerName2.hidden = true;
inputPlayerName3.hidden = true;
inputPlayerName4.hidden = true;
buttonCreat.hidden = true;
labelAttackPointsBasic.hidden = true;
labelAttackPointsRace.hidden = true;
labelDefensePointsBasic.hidden = true;
labelDefensePointsRace.hidden = true;
labelEvasionPointsBasic.hidden = true;
labelEvasionPointsRace.hidden = true;
labelLifePointsBasic.hidden = true;
labelLifePointsRace.hidden = true;
selectMaxPlayers.hidden = true;
selectPlayerRace1.hidden=true;
selectPlayerRace2.hidden=true;
selectPlayerRace3.hidden =true;
selectPlayerRace4.hidden=true;*/

