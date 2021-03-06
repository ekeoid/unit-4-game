# Unit-4-Game (Star Wars RPG)

### Overview

This game is similar to a card deck game, but themed with Star Wars. This is bootcamp homework assignment #4. The game only starts with 4 cards and you need to select your player, while the rest of the cards become enemies. Your goal is to try to defeat all enemies but choosing the smart sequence to defeat them. All player attacks are cumulatively additive based on the number attacks performed as the game session progresses.

You can find the instructions for this assignment here: [homework-instructions.md][]

The rest of this README will overview the interpretation of the game.

[homework-instructions.md]: https://github.com/ekeoid/unit-4-game/blob/master/assets/homework_instructions.md

### File Structure

```
├── assets
|  ├── css
|  |  └── reset.css
|  |  └── style.css
|  ├── images
|  |  └── background.jpg
|  |  └── characters.jpg
|  └── javascript
|     └── charlist.js
|     └── game.js
└── index.html
```

#### JavaScript - `charlist.js`
This file is simply just an array variable `characterList` that contains a set of values for the characters that are available for the game. The declaration is in JavaScript and it is a global variable, however the goal of scripting `game.js` will be to avoid reference this array, except for initially obtaining the value to a separate file-local variable.

There are 14 characters in this list, all from the cartoon Star Wars: The Clone Wars. The array contains `id`, `name`, `healthPoints`, `attackPower`, `counterAttack`, and `position`. The `id` is used for shorthand notation for creating and tagging elements in the HTML. The `position` is grid coordinates for the character picture crop which is all taken from a single picture file. The rest of the attributes are used and defined by the game instructions.


#### JavaScript - `game.js`
This code is not that organized and a mess. The idea of the code structure was to have `Player()` objects which include a set of attributes and methods to coordinate the game. Cleaning up the organization is possible and would take additional time that I didn't want to put the effort into.

##### `Player ()`
> This is a function object `Player()`. A `class` could of been used but has not been in our scope of learning, so that was avoided. Instantiation of the object enlists a set of parameters that are used of the game. Ideally, I would like all the variables to be private, however it seems complex with JavaScript. Three (3) additional variables are created for tracking a player which are: `indexOfCreated`, `indexOfList`, and `attacksMade`. These are used to track the characters being played from the original list.
>
> Below will list methods associate with this object.
>
> ##### `init()`
> This is the constructor of the object. This constructor was complex and specific for this game. The goal of this constructor was to create a new character `Player()` from the `characterList[]`, but if there are multiple `Player()` objects, the characters are **not** repeated. There was no exception check for creating number of `Player()` object greater than the number of characters in `characterList[]`.
>
> This constructor has about 3 parts to it. (1) If the first character needs to be created, it will generate a random number based on the `length` of `characterList`. A global array of `Player()` objects is used to track all the current characters called `charactersCreated[]`. (2) If the a character has already been created, a `while loop` is used to forcefully scan through to match the next random number of `characterList` to ensure it has not been selected. Associated variables are updated. (3) If the `Player()` object has already been created (`indexOfCreated != -1`) then the randomization of the new character overwrites the current `Player()` object.
>
> This constructor uses `updatePlayer (arg1, arg2)` to assign the attribute values from `characterList[]`.
>
> ##### `updatePlayer(int arg1, int arg2)`
> This function assigns starting values for all attributes of the `Player()` object from the corresponding `characterList[]`. It receives 2 parameters which are indexes for reference of `characterList` and `createdCharacters` arrays. This is used mainly for referencing.
>
> ##### `attack(Player arg)`
> This function receives a Player() object. It updates the damages done to both players and updates the `attacksMade` to keep track of the new `attackPower` stacked from continual attacks.

##### `updateHealth(int arg1, int arg2)`
> This function receives 2 arguments, for the player and enemy index. The jQuery identifies the target character card using `$(-jQuery-).find()` to look for the child card elements for updating health points.

##### `updateStatus(int arg1, int arg2)`
> This function writes to the status area of the HTML to display the characters attacking and text about the attack. It displays the attack and counter-attack.

##### `checkGameStatus(int arg1, int arg2)`
> This function check 4 conditions.
> If the player `healthPoints` is `<= 0`, the game is over and the restart button appears.
> If the enemy `healthPoints` is `<= 0`, the ememy card is hidden, text is displayed for the success, appended back to the character id and the border colors are reset.
> If the current enemy is defeated and enemies still remain, text is displayed to choose another enemy.
> If all enemies have been defeated, the text updates to report all the enemies are defeated and hides the attack button and shows the restart button.

##### `checkEnemies(int arg1)`
> This function checks the health of all the enemies, to help determine if they have been defeated. From the `charactersCreated[]` array, it ignores the `playerChosen` character.

##### `click (".characters")`
> This event function is wrapped by `if` conditional statements so when a player and an enemy is chose, the characters cards are no longer click-able. Throughout the progress of the game, the card elements are hidden as the characters are defeated. These cards shift around the BootStrap sections, but are never removed, to keep the event handler with the DOM.

##### `click ("#attack")`
> This event function is tied to the attack button and is wrapped by `if` conditional statements.
Player must be chosen and no enemy character has been selected, in order for attack to perform the function for the characters to take damage. The players `attack (arg1)` then `updateHealth (arg1, arg2)` then `updateStatus (arg1, arg2)` and lastly `checkGameStatus (arg1, arg2)`. Respectively, this attacks the characters, update the HTML health text, updates the display for the last activity, and finally checks all the players to make sure they are alive.
> The other part of this event function checks that the enemy is defeated and modifies the `enemyChosen` index to `-1` to reset making no enemy chosen.

##### `click ("#restart")`
> This event function is messy. This has an array and runs through all available characters and makes sure they are visible with `$(-jquery-).show()`. Within the loop, this it will reset the attributes of every character with `updatePlayer(arg1, arg2)` rematching with the master array `characterList[]`. Then the loop updates the HTML health text.
> The next part of the event function resets the HTML elements and sets `playerChosen` and `enemyChosen` to `-1`. The HTML elements are relocated to the original starting position.

