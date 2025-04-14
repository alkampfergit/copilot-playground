// src/types/rules.ts

// Based on characters.json
export interface Characteristic {
    name: string;
    abbr: string;
    description: string;
    range: [number, number];
}

export interface DerivedStatRule {
    name: string;
    description: string;
    calculation_rule: string; // Keep as string for now, parsing logic elsewhere
    base_characteristic: string | string[];
    unit?: string;
}

export interface CharacterRules {
    characteristics: Characteristic[];
    derived_stats: Record<string, DerivedStatRule>;
}

// Based on character_classes.json
export interface ClassStatBonuses {
    hp?: number;
    mp?: number;
    // Add other stats if needed
}

export interface CharacterClass {
    name: string;
    description: string;
    primary_stats: string[];
    abilities: string[];
    stat_bonuses: ClassStatBonuses;
}

export interface CharacterClassRules {
    classes: CharacterClass[];
}

// Based on enemies.json
export interface EnemyAttack {
    name: string;
    damage?: string; // e.g., "1-6"
    type?: string;
    effect?: string;
    condition?: string;
    ranged?: boolean;
}

export interface Enemy {
    name: string;
    description: string;
    stats: Record<string, [number, number] | null>; // e.g., STR: [6, 9]
    hp_range: [number, number];
    ac_range: [number, number];
    attacks: EnemyAttack[];
    special: string[];
    behavior: string;
    tags: string[];
}

export interface EnemyRules {
    enemies: Enemy[];
}

// Based on items.json
export interface Item {
    name: string;
    description: string;
    effect: string;
    weight: number;
    type: string;
    consumable?: boolean;
}

export interface ItemRules {
    items: Item[];
}

// Based on magical_items.json
export interface MagicalItemEffect {
    type: string;
    stat?: string | string[];
    value?: number;
    skill?: string;
    spell_name?: string;
    charges?: number;
    recharge?: boolean;
    consumable?: boolean;
    capacity?: number;
    details?: string;
}

export interface MagicalItem {
    name: string;
    description: string;
    effect_description: string;
    effect: MagicalItemEffect;
    weight: number;
    slot: string;
    type: string;
}

export interface MagicalItemRules {
    magical_items: MagicalItem[];
}

// Based on spells.json
export interface SpellEffectSave {
    stat: string;
    effect: string;
}

export interface SpellEffect {
    type: string;
    damage_type?: string;
    amount?: string; // e.g., "1-4" or "2-8"
    auto_hit?: boolean;
    utility_type?: string;
    duration_minutes?: number;
    area_of_effect_radius_ft?: number;
    save?: SpellEffectSave;
    stat?: string | string[];
    value?: number;
    condition?: string;
    control_type?: string;
    hp_affected?: number;
    priority?: string;
    detection_target?: string;
}

export interface Spell {
    name: string;
    description: string;
    effect_description: string;
    effect: SpellEffect;
    mp_cost: number;
    target: string;
    class: string[];
}

export interface SpellRules {
    spells: Spell[];
}

// Based on verbs.json
export interface Verb {
    name: string;
    description: string;
    usage: string[];
}

export interface VerbRules {
    verbs: Verb[];
}

// Based on weapons.json
export interface Weapon {
    name: string;
    description: string;
    damage?: string; // e.g., "1-4"
    damage_type?: string;
    category: "Attack" | "Defense";
    type: string; // Melee, Ranged, Shield
    min_str: number;
    min_dex?: number;
    class_restriction: string[];
    weight: number;
    defense_bonus_ac?: number;
    dex_penalty?: number;
}

export interface WeaponRules {
    weapons: Weapon[];
}
