// Star Wars RPG for Coding Bootcamp Class
// Elvin Eng - 2019

// var characterList = Array that exists in external file
var charactersCreated = [];
var characters = getCharacterForGame(4);

function Player() {
    this.name = "";
    this.healthPoints = 0;
    this.attackPower = 0;
    this.counterAttackPower = 0;

    this.id = "";
    this.position = "";
    this.indexOfCreated = -1;
    this.indexOfList = -1;
    this.attacksMade = 0;

    this.getName = function () {
        return this.name;
    }

    this.updatePlayer = function (index1, index2) {
        this.id = characterList[index1].id;
        this.name = characterList[index1].name;
        this.healthPoints = characterList[index1].healthPoints;
        this.attackPower = characterList[index1].attackPower;
        this.counterAttackPower = characterList[index1].counterAttack;
        this.position = characterList[index1].position;
        this.indexOfList = index1;
        this.indexOfCreated = index2;
        this.attacksMade = 0;
    }

    this.init = function () {
        if (charactersCreated.length == 0) {
            var index = Math.floor(Math.random() * characterList.length);
            charactersCreated.push(index);
            this.updatePlayer(index, 0);
        } else {
            var tempList = [];

            for (var i = 0; i < charactersCreated.length; i++) {
                tempList.push(charactersCreated[i]);
            }

            while (true) {
                var index = Math.floor(Math.random() * characterList.length);
                if (tempList.indexOf(index) == -1) {
                    if (this.indexOfCreated < charactersCreated.length && this.indexOfCreated != -1) {
                        this.updatePlayer(index, this.indexOfCreated);
                        charactersCreated[this.indexOfCreated] = index;
                    } else {
                        charactersCreated.push(index);
                        this.updatePlayer(index, charactersCreated.length - 1);
                    }
                    break;
                }
            }
        }
    }

    this.attack = function (enemy) {
        // add if enemy is defenderarea?
        if (this.healthPoints > 0 && enemy.healthPoints > 0) {
            var baseAttackPower = this.attackPower / (this.attacksMade == 0 ? 1 : this.attacksMade);

            this.attacksMade += 1;
            this.attackPower = baseAttackPower * this.attacksMade;
            enemy.healthPoints -= this.attackPower;
            this.healthPoints -= enemy.counterAttackPower;
        }
    }


} // end of function Player();

function getCharacterForGame(numChars) {
    var tempPlayerList = [];

    for (var i = 0; i < numChars; i++) {
        tempPlayerList.push(new Player());
        tempPlayerList[i].init();
    }
    return tempPlayerList;
}

function getCharacterIndex(id) {
    for (var i = 0; i < characters.length; i++) {
        if (characters[i].id === id) {
            return i;
        }
    }
    return -1;
}

function printCharacters() {

    for (var i = 0; i < characters.length; i++) {

        var cardDiv = $("<div>");
        cardDiv.attr("class", "card characters");
        cardDiv.attr("id", characters[i].id);

        var cardBody = $("<div>");
        cardBody.attr("class", "card-body");

        cardDiv.append(cardBody);

        var cardTitle = $("<h5>");
        cardTitle.attr("class", "card-title");
        cardTitle.text(characters[i].name);

        var cardImg = $("<img>");
        cardImg.attr("class", "card-img");

        cardImg.attr("alt", "");
        cardImg.css("background-position", characters[i].position);

        var cardHealth = $("<p>");
        cardHealth.attr("class", "card-text");
        cardHealth.text(characters[i].healthPoints);

        cardBody.append(cardTitle);
        cardBody.append(cardImg);
        cardBody.append(cardHealth);

        $("#characters").append(cardDiv);
        $("#attack").hide();
        $("#restart").hide();
        $("#statusarea").text("");
    }
}

function updateHealth(playerChosen, enemyChosen) {
    $("#yourcharacter").find(".card-text").text(characters[playerChosen].healthPoints);
    $("#defenderarea").find(".card-text").text(characters[enemyChosen].healthPoints);
}

function updateStatus(playerChosen, enemyChosen) {
    $("#statusarea").css("color", "white");
    $("#statusarea").text("You have attacked " + characters[enemyChosen].name + " for " + characters[playerChosen].attackPower + " attack points");
    $("#statusarea").append("</br>" + characters[enemyChosen].name + " has attacked you for " + characters[enemyChosen].counterAttackPower + " attack points.");
}

function checkGameStatus(playerChosen, enemyChosen) {
    $("#statusarea").css("color", "white");

    if (characters[playerChosen].healthPoints <= 0) {
        $("#statusarea").text("You have been defeated . . . GAME OVER !!! ");
        $("#restart").show();
        // You Lose && Restart
    }

    if (characters[enemyChosen].healthPoints <= 0) {
        $("#statusarea").text("You have defeated " + characters[enemyChosen].name + ", you can choose to fight another enemy.");
        $("#" + characters[enemyChosen].id).hide();
        //$("#defenderarea").find(".characters").text("");
        $("#defenderarea").find(".characters").appendTo("#characters");
        $("#enemies").find(".characters").css("border", "7px solid red");
    }

    if ($("#defenderarea").find(".characters").text() == "" && checkEnemies(playerChosen)) {
        $("#statusarea").text("Choose another enemy to continue . . .");
    }

    if (!checkEnemies(playerChosen)) {
        $("#statusarea").text("You have defeated all enemies. Click restart to play again.");
        $("#attack").hide();
        $("#restart").show();
    }
}

function checkEnemies(playerChosen) {
    var anyEnemiesLeft = 0;
    for (var i = 0; i < characters.length; i++) {
        if (characters[i].healthPoints > 0 && characters[i].indexOfCreated != playerChosen)
            anyEnemiesLeft++;
    }
    return (anyEnemiesLeft > 0 ? true : false);
}


$(document).ready(function () {
    var playerChosen = -1;
    var enemyChosen = -1;

    printCharacters();

    $(".characters").click(function () {

        if (enemyChosen === -1 && playerChosen != -1) {
            $("#attack").show();
            $(this).appendTo("#defenderarea");
            enemyChosen = getCharacterIndex($(this).attr("id"));
            $("#enemies").find(".characters").css("border", "7px solid salmon");
        }

        if (playerChosen === -1) {
            $(this).appendTo("#yourcharacter");
            $("#characters").appendTo("#enemies");
            playerChosen = getCharacterIndex($(this).attr("id"));

            $("#enemies").find(".characters").css("border", "7px solid red");
            $(this).css("border", "7px solid lightgreen");
            
            $("#yourcharacter, #enemies, #defenderarea").css("min-height", "280px");
        }

    });

    $("#attack").click(function () {
        if ($("#defenderarea").find(".characters").text() != "" && playerChosen != -1) {
            characters[playerChosen].attack(characters[enemyChosen]);

            updateHealth(playerChosen, enemyChosen);
            updateStatus(playerChosen, enemyChosen);
            checkGameStatus(playerChosen, enemyChosen);
        }

        if (checkEnemies(playerChosen) && enemyChosen != -1) {
            if (characters[enemyChosen].healthPoints <= 0) {
                enemyChosen = -1;
            }
        }

    });

    $("#restart").click(function () {
        for (var i = 0; i < characters.length; i++) {
            $("#" + characters[i].id).show();
            characters[i].updatePlayer(characters[i].indexOfList, characters[i].indexOfCreated);
            $("#" + characters[i].id).find(".card-text").text(characters[i].healthPoints);
        }

        $("#characters").appendTo(".main");
        $("#yourcharacter").find(".characters").appendTo("#characters");
        $("#defenderarea").find(".characters").appendTo("#characters");
        $("#attack").hide();
        $("#restart").hide();
        $("#statusarea").text("");

        playerChosen = -1;
        enemyChosen = -1;

        $("#yourcharacter, #enemies, #defenderarea").css("min-height", "0px");
        $("#characters").find(".characters").css("border", "none");

    });

}); 
