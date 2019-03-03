// Array characterList exists in external file.
var charactersCreated = [];

function Player() {
    this.name = "";
    this.healthPoints = 0;
    this.attackPower = 0;
    this.counterAttackPower = 0;

    this.id = "";
    this.position = "";
    this.indexOfCreated = -1;
    this.indexOfList = -1;

    this.getName = function () {
        return this.name;
    }

    this.update = function (index1, index2) {
        this.id = characterList[index1].id;
        this.name = characterList[index1].name;
        this.healthPoints = characterList[index1].healthPoints;
        this.attackPower = characterList[index1].attackPower;
        this.counterAttackPower = characterList[index1].counterAttack;
        this.position = characterList[index1].position;
        this.indexOfList = index1;
        this.indexOfCreated = index2;
    }

    this.init = function () {
        if (charactersCreated.length == 0) {
            var index = Math.floor(Math.random() * characterList.length);
            charactersCreated.push(index);
            this.update(index, 0);
        } else {
            var tempList = [];

            for (var i = 0; i < charactersCreated.length; i++) {
                tempList.push(charactersCreated[i]);
            }

            while (true) {
                var index = Math.floor(Math.random() * characterList.length);
                if (tempList.indexOf(index) == -1) {
                    if (this.indexOfCreated < charactersCreated.length && this.indexOfCreated != -1) {
                        this.update(index, this.indexOfCreated);
                        charactersCreated[this.indexOfCreated] = index;
                    } else {
                        charactersCreated.push(index);
                        this.update(index, charactersCreated.length - 1);
                    }
                    break;
                }
            }
        }




    }


} // function Player();












/*
function getCharacterForGame(numChars) {
    var tempList = [];
    for (var i = 0; i < numChars; i++) {
        while (true) {
            var index = Math.floor(Math.random() * characterList.length);
            if (tempList.indexOf(index) == -1) {
                tempList.push(index);
                break;
            }
        }
    }
    return tempList;
}

//var characters = getCharacterForGame(4);

*/

function printCharacters() {

    for (var i = 0; i < 4; i++) {

        var cardDiv = $("<div>");
        cardDiv.attr("class", "card character");
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
    }
}


var characters = Array(4);

for (var i = 0; i < 4; i++) {
    characters[i] = new Player();
    characters[i].init();
}

characters[2].init();

$(document).ready(function () {
    printCharacters();

    //$("#yoda").remove();

}); 