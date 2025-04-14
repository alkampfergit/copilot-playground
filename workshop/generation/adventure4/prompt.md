You will need to generate a detailed specifications for a textual adventure game. Each section will generate a new file with the specification for that section. All files will be generated in the "game/rules" subdirectory.

The overall ambience of the game is a fantasy world with magic and mythical creatures. 

# part one: generate game rule files

A dotted list of possible verbs that are allowed in the adventure for each verb a description of what it does. You should include verbs that allow the player to move as well as verb to interact with environmenent

then you will generate all the rules for the character and the non player characters of the game, such as strength, intelligence etc. For each characteristic the range will be 1-10. Each player has a number of health points based on some of that characteristics. Please note down some rule to determine health points based on the characteristics.

Then generate a list of character class like: mage, warrior and so on.

Then you will generate a detailed list of standard items that are available for all players.

Then generate a list of possible weapons, for each weapon list the damage range. Divide the weapon in attach weapons and defence weapons. For each weapon determine a minimum strenght value for the player to be able to use it. Restrict some of the weapoins only to certain characters.

Then generates a detailed list of magical items that are available as well as their effects.

Then generates a detailed list of standard spells that are available as well as their effects

Then generates a detailed list of standard enemies and a general range of characteristics, like: strenght 1-5, intelligence etc. 

# part two: generate json specification from rule files.

For each rule files in the game.rules, you should determine a json file that can be parsed by code to implement the game. As an example if the file is called "weapons.md" the json file should be called "weapons.json". The json file should contain all the information in the markdown file, but in a structured way.

# part three: generate the code to run the game.

The purpose is to generate a node.js application in the subdirectory game/app that is capable of running the rules detailed in all markdown file generated in the game/rules directory.

For each rule file you have a json rule file, you should create a node.js file that is capable of reading the json file and implementing the rules in the game. Structure the node.js application in a way that we do not have all in a single file but you have multiple rule file.

Please add some unit test to verify that the rules are correctly implemented. The unit test should be in a separate directory called test and you should create a readme.md file in the test directory to explain how to run the unit test.
