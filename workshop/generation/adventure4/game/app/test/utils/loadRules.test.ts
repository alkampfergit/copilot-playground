// test/utils/loadRules.test.ts
import {
    loadCharacterRules,
    loadCharacterClassRules,
    loadEnemyRules,
    loadItemRules,
    loadMagicalItemRules,
    loadSpellRules,
    loadVerbRules,
    loadWeaponRules,
    loadAllRules
} from '@src/utils/loadRules'; // Adjust path based on Jest config

// Mock fs.readFileSync if needed, but for basic loading, direct calls might be okay
// if the test environment can access the files relative to the execution path.
// Jest's default behavior runs tests from the project root ('game/app').

describe('Rule Loading Utilities', () => {

    it('should load character rules correctly', () => {
        const rules = loadCharacterRules();
        expect(rules).toBeDefined();
        expect(rules.characteristics).toBeInstanceOf(Array);
        expect(rules.characteristics.length).toBeGreaterThan(0);
        expect(rules.derived_stats).toBeInstanceOf(Object);
    });

    it('should load character class rules correctly', () => {
        const rules = loadCharacterClassRules();
        expect(rules).toBeDefined();
        expect(rules.classes).toBeInstanceOf(Array);
        expect(rules.classes.length).toBeGreaterThan(0);
    });

    it('should load enemy rules correctly', () => {
        const rules = loadEnemyRules();
        expect(rules).toBeDefined();
        expect(rules.enemies).toBeInstanceOf(Array);
        expect(rules.enemies.length).toBeGreaterThan(0);
    });

    it('should load item rules correctly', () => {
        const rules = loadItemRules();
        expect(rules).toBeDefined();
        expect(rules.items).toBeInstanceOf(Array);
        expect(rules.items.length).toBeGreaterThan(0);
    });

    it('should load magical item rules correctly', () => {
        const rules = loadMagicalItemRules();
        expect(rules).toBeDefined();
        expect(rules.magical_items).toBeInstanceOf(Array);
        expect(rules.magical_items.length).toBeGreaterThan(0);
    });

    it('should load spell rules correctly', () => {
        const rules = loadSpellRules();
        expect(rules).toBeDefined();
        expect(rules.spells).toBeInstanceOf(Array);
        expect(rules.spells.length).toBeGreaterThan(0);
    });

    it('should load verb rules correctly', () => {
        const rules = loadVerbRules();
        expect(rules).toBeDefined();
        expect(rules.verbs).toBeInstanceOf(Array);
        expect(rules.verbs.length).toBeGreaterThan(0);
    });

    it('should load weapon rules correctly', () => {
        const rules = loadWeaponRules();
        expect(rules).toBeDefined();
        expect(rules.weapons).toBeInstanceOf(Array);
        expect(rules.weapons.length).toBeGreaterThan(0);
    });

    it('should load all rules correctly using loadAllRules', () => {
        const allRules = loadAllRules();
        expect(allRules).toBeDefined();
        expect(allRules.characters).toBeDefined();
        expect(allRules.classes).toBeDefined();
        expect(allRules.enemies).toBeDefined();
        expect(allRules.items).toBeDefined();
        expect(allRules.magicalItems).toBeDefined();
        expect(allRules.spells).toBeDefined();
        expect(allRules.verbs).toBeDefined();
        expect(allRules.weapons).toBeDefined();
        expect(allRules.verbs.verbs.length).toBeGreaterThan(0);
        expect(allRules.weapons.weapons.length).toBeGreaterThan(0);
    });

    // Add error handling tests if necessary (e.g., file not found)
});
