const fs = require('fs');
const path = require('path');
const { processVerbs } = require('./modules/verbs').default;
const { processCharacters } = require('./modules/characters');
const { processCharacterClasses } = require('./modules/characterClasses');
const { processItems } = require('./modules/items');
const { processWeapons } = require('./modules/weapons');
const { processMagicalItems } = require('./modules/magicalItems');
const { processSpells } = require('./modules/spells');
const { processEnemies } = require('./modules/enemies');

// Directory containing the JSON rule files
const rulesDir = path.join(__dirname, '../rules');

// Function to load all JSON rule files
function loadRules() {
  const ruleFiles = fs.readdirSync(rulesDir).filter(file => file.endsWith('.json'));
  const rules = {};

  ruleFiles.forEach(file => {
    const ruleName = path.basename(file, '.json');
    const filePath = path.join(rulesDir, file);
    rules[ruleName] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  });

  return rules;
}

// Main function to initialize the game
function main() {
  const rules = loadRules();
  console.log('Game rules loaded:', rules);

  // Process each rule type
  processVerbs(rules.verbs);
  processCharacters(rules.characters);
  processCharacterClasses(rules.character_classes);
  processItems(rules.items);
  processWeapons(rules.weapons);
  processMagicalItems(rules.magical_items);
  processSpells(rules.spells);
  processEnemies(rules.enemies);

  // TODO: Implement game logic based on the processed rules
}

main();
