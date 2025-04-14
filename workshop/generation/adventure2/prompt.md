The goal is guiding in the most detailed way the generation of code and all other artifacts that are present in the game.

**Start:** I need you to create an adventure game about a vampire story. The game is a text based adventure game, where the player can choose direction to move etc. First all all create a markdown file with the basic rule of the game and the basic verbs that can be used.

**Second step:** Based on the game rules we need to create an adventure. The adventure will be based on rooms and the possible verbs that can be used on each room ,

please start creating a overall story plot, then list al characters.

then detail the plot in a series of no lees than 20 connected rooms,for each room gave a overall description and state all the items that are in the room.

The plot should be coherent, the game should have an end and you should organize the rooms in a way that the character should discover the path to conclusion.

**Generate Data**: based on the above plot, now generate a json that describe all the rooms, all the items in the rooms, give each room a unique id, for each room list all the connected room specifying the direction and the id of the connected room.

**Generate Engine**: Now based on the adventure.json generate an html page with all javascript code to create the game engine that will use that json to let the user play.

You should always give the user the list of available verbs, the json of the adventure will be placed in a global variable called "adventure", when you generate the engine leave that variable empty, *I will copy the content of the adventure.json after manually.*

