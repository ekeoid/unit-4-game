var characters = [
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

var testIndex = 13;

$(document).ready(function () {

var cardDiv = $("<div>");
cardDiv.attr("class", "card character");

var cardBody = $("<div>");
cardBody.attr("class", "card-body");

cardDiv.append(cardBody);

var cardTitle = $("<h5>");
cardTitle.attr("class", "card-title");
cardTitle.text(characters[testIndex].name);

var cardImg = $("<img>");
cardImg.attr("class", "card-img");
//cardImg.attr("src", "assets/images/characters.jpg");
//cardImg.attr("src", "https://via.placeholder.com/120x50");
cardImg.attr("alt", "");
cardImg.css("background-position", characters[testIndex].position);

var cardHealth = $("<p>");
cardHealth.attr("class", "card-text");
cardHealth.text(characters[testIndex].healthPoints);

cardBody.append(cardTitle);
cardBody.append(cardImg);
cardBody.append(cardHealth);

$("#characters").append(cardDiv);










// cardBody.append(cardImg);
// cardBody.append(cardText);







// $(".character").append(cardTitle);
// $(".character").append(cardImg);
// $(".character").append(cardHealth);



});