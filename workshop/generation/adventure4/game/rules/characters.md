# Character Characteristics

This file defines the core characteristics for player characters (PCs) and non-player characters (NPCs).

## Core Characteristics

Each characteristic has a range from 1 to 10.

*   **Strength (STR)**: Represents physical power, affecting melee damage and carrying capacity.
*   **Dexterity (DEX)**: Represents agility, affecting accuracy with ranged weapons, dodging attacks, and performing delicate tasks.
*   **Constitution (CON)**: Represents endurance and health.
*   **Intelligence (INT)**: Represents reasoning and memory, affecting spellcasting ability and problem-solving.
*   **Wisdom (WIS)**: Represents perception and insight, affecting resistance to magic and awareness.
*   **Charisma (CHA)**: Represents force of personality, affecting social interactions and leadership.

## Health Points (HP)

Health Points determine how much damage a character can sustain before dying.

*   **Calculation Rule**: Base HP is determined by Constitution. A common formula is:
    `HP = 10 + (CON * 2)`
*   Modifiers based on class or race might apply.

## Other Stats

*   **Mana Points (MP)**: Used for casting spells, primarily relevant for magic-using classes.
    *   **Calculation Rule**: Base MP can be determined by Intelligence or Wisdom. A possible formula:
        `MP = 10 + (INT * 1.5)` (Rounded down)
*   **Stamina Points (SP)**: Used for performing strenuous actions like special attacks or sprinting.
    *   **Calculation Rule**: Base SP can be determined by Constitution or Strength. A possible formula:
        `SP = 10 + CON + (STR / 2)` (Rounded down)
*   **Armor Class (AC)**: Represents how difficult a character is to hit. Base AC might be derived from Dexterity, with bonuses from armor.
    *   **Calculation Rule**: `Base AC = 10 + (DEX / 2)` (Rounded down)
*   **Carrying Capacity**: How much weight a character can carry, typically based on Strength.
    *   **Calculation Rule**: `Capacity = STR * 10` (in arbitrary weight units)
