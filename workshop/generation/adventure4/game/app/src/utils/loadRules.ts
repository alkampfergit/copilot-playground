// src/utils/loadRules.ts
import * as fs from 'fs';
import * as path from 'path';
import {
    CharacterRules,
    CharacterClassRules,
    EnemyRules,
    ItemRules,
    MagicalItemRules,
    SpellRules,
    VerbRules,
    WeaponRules
} from '@src/types/rules'; // Adjust path based on your structure if needed

const rulesDir = path.join(__dirname, '../../../rules'); // Path to the rules directory relative to dist/utils

function loadJsonFile<T>(filename: string): T {
    const filePath = path.join(rulesDir, filename);
    try {
        const rawData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(rawData) as T;
    } catch (error) {
        console.error(`Error loading rule file ${filename}:`, error);
        throw new Error(`Failed to load or parse ${filename}`);
    }
}

export function loadCharacterRules(): CharacterRules {
    return loadJsonFile<CharacterRules>('characters.json');
}

export function loadCharacterClassRules(): CharacterClassRules {
    return loadJsonFile<CharacterClassRules>('character_classes.json');
}

export function loadEnemyRules(): EnemyRules {
    return loadJsonFile<EnemyRules>('enemies.json');
}

export function loadItemRules(): ItemRules {
    return loadJsonFile<ItemRules>('items.json');
}

export function loadMagicalItemRules(): MagicalItemRules {
    return loadJsonFile<MagicalItemRules>('magical_items.json');
}

export function loadSpellRules(): SpellRules {
    return loadJsonFile<SpellRules>('spells.json');
}

export function loadVerbRules(): VerbRules {
    return loadJsonFile<VerbRules>('verbs.json');
}

export function loadWeaponRules(): WeaponRules {
    return loadJsonFile<WeaponRules>('weapons.json');
}

// Example of loading all rules at once if needed
export interface AllRules {
    characters: CharacterRules;
    classes: CharacterClassRules;
    enemies: EnemyRules;
    items: ItemRules;
    magicalItems: MagicalItemRules;
    spells: SpellRules;
    verbs: VerbRules;
    weapons: WeaponRules;
}

export function loadAllRules(): AllRules {
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
