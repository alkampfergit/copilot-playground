"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const loadRules_1 = require("./utils/loadRules");
function main() {
    console.log("Starting the adventure game engine...");
    try {
        const allRules = (0, loadRules_1.loadAllRules)();
        console.log("Successfully loaded all game rules!");
        // TODO: Initialize game state
        console.log(`Loaded ${allRules.verbs.verbs.length} verbs.`);
        console.log(`Loaded ${allRules.characters.characteristics.length} characteristics.`);
        console.log(`Loaded ${allRules.classes.classes.length} character classes.`);
        console.log(`Loaded ${allRules.items.items.length} standard items.`);
        console.log(`Loaded ${allRules.weapons.weapons.length} weapons.`);
        console.log(`Loaded ${allRules.magicalItems.magical_items.length} magical items.`);
        console.log(`Loaded ${allRules.spells.spells.length} spells.`);
        console.log(`Loaded ${allRules.enemies.enemies.length} enemies.`);
        // TODO: Start the game loop (input handling, command parsing, state updates)
        console.log("\nGame engine initialized. Ready to start the game loop (not implemented yet).");
    }
    catch (error) {
        console.error("Failed to initialize game engine:", error);
        process.exit(1); // Exit if rules can't be loaded
    }
}
main();
