"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCharacterRules = loadCharacterRules;
exports.loadCharacterClassRules = loadCharacterClassRules;
exports.loadEnemyRules = loadEnemyRules;
exports.loadItemRules = loadItemRules;
exports.loadMagicalItemRules = loadMagicalItemRules;
exports.loadSpellRules = loadSpellRules;
exports.loadVerbRules = loadVerbRules;
exports.loadWeaponRules = loadWeaponRules;
exports.loadAllRules = loadAllRules;
// src/utils/loadRules.ts
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const rulesDir = path.join(__dirname, '../../../rules'); // Path to the rules directory relative to dist/utils
function loadJsonFile(filename) {
    const filePath = path.join(rulesDir, filename);
    try {
        const rawData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(rawData);
    }
    catch (error) {
        console.error(`Error loading rule file ${filename}:`, error);
        throw new Error(`Failed to load or parse ${filename}`);
    }
}
function loadCharacterRules() {
    return loadJsonFile('characters.json');
}
function loadCharacterClassRules() {
    return loadJsonFile('character_classes.json');
}
function loadEnemyRules() {
    return loadJsonFile('enemies.json');
}
function loadItemRules() {
    return loadJsonFile('items.json');
}
function loadMagicalItemRules() {
    return loadJsonFile('magical_items.json');
}
function loadSpellRules() {
    return loadJsonFile('spells.json');
}
function loadVerbRules() {
    return loadJsonFile('verbs.json');
}
function loadWeaponRules() {
    return loadJsonFile('weapons.json');
}
function loadAllRules() {
    return {
        characters: loadCharacterRules(),
        classes: loadCharacterClassRules(),
        enemies: loadEnemyRules(),
        items: loadItemRules(),
        magicalItems: loadMagicalItemRules(),
        spells: loadSpellRules(),
        verbs: loadVerbRules(),
        weapons: loadWeaponRules(),
    };
}
