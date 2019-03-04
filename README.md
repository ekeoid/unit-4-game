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


##### `Player ()`
> X
> X

