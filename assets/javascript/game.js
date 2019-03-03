// Array characterList exists in external file.

function Player () {
    this.id = "";
    this.name = "";
    this.healthPoints = 0;
    this.attackPower = 0;
    this.counterAttackPower = 0;
 
  
    this.getName = function () {
      return this.name;
    }
      
    this.init = function () {

      var tempList = [];
      
      if ( charactersCreated.length == 0 ) {
        var index = Math.floor(Math.random() * characterList.length);
        charactersCreated.push(index);
        
      } else {
        
        for (var i=0; i < charactersCreated.length; i++) {
          tempList.push(charactersCreated[i]);
        }
        
        while ( true ) {
          var index = Math.floor(Math.random() * characterList.length);
          if ( tempList.indexOf(index) == -1 ) {
            charactersCreated.push(index);
            break;
          }
        }
      }
      
      
      

    }
  

} // function Player();













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