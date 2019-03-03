var characterList = [
    { id: "ahsoka",     name: "Ahsoka Tano",            healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-8px   -140px" },
    { id: "anakin",     name: "Anakin Skywalker",       healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-8px   -280px" },
    { id: "obiwan",     name: "Obi-Wan Kenobi",         healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-8px   -400px" },
    { id: "yoda",       name: "Yoda",                   healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-8px   -560px" },
    { id: "r2d2",       name: "R2-D2",                  healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-8px   -690px" },
    { id: "rex",        name: "Captain Rex",            healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-8px   -830px" },
    { id: "satine",     name: "Duchess Satine Kryze",   healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-8px   -950px" },
    { id: "darthmaul",  name: "Darth Maul",             healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-445px -145px" },
    { id: "savage",     name: "Savage Opress",          healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-450px -275px" },
    { id: "palpatine",  name: "Chancellor Palpatine",   healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-445px -410px" },
    { id: "asajj",      name: "Asajj Ventress",         healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-440px -540px" },
    { id: "previzla",   name: "Pre Vizsla",             healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-445px -690px" },
    { id: "grevious",   name: "Grevious",               healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-445px -830px" },
    { id: "wilhuff",    name: "Wilhuff Tarkin",         healthPoints: 150, attackPower: 10, counterAttack: 5, position: "-445px -955px" }
];

function getCharacterForGame (numChars) {
    var tempList = [];
    for (var i=0; i < numChars; i++) {
        while ( true ) {
            var index = Math.floor(Math.random() * characterList.length);
            if ( tempList.indexOf(index) == -1 )
            {
                tempList.push(index);
                break;
            }
        }
    }
    return tempList;
}

var characters = getCharacterForGame(4);

function printCharacters() {

    for (var i = 0; i < 4; i++) {

        var cardDiv = $("<div>");
        cardDiv.attr("class", "card character");
        cardDiv.attr("id", characterList[characters[i]].id);
        
        var cardBody = $("<div>");
        cardBody.attr("class", "card-body");
        
        cardDiv.append(cardBody);
        
        var cardTitle = $("<h5>");
        cardTitle.attr("class", "card-title");
        cardTitle.text(characterList[characters[i]].name);
        
        var cardImg = $("<img>");
        cardImg.attr("class", "card-img");
       
        cardImg.attr("alt", "");
        cardImg.css("background-position", characterList[characters[i]].position);
        
        var cardHealth = $("<p>");
        cardHealth.attr("class", "card-text");
        cardHealth.text(characterList[characters[i]].healthPoints);
        
        cardBody.append(cardTitle);
        cardBody.append(cardImg);
        cardBody.append(cardHealth);
        
        $("#characters").append(cardDiv);
    }
}


$(document).ready(function () {
    printCharacters();   

//$("#yoda").remove();

});