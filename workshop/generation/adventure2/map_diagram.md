```mermaid
graph TD
    R1[Entrance Hall] -->|north| R2[Dining Room]
    R2 -->|south| R1
    R2 -->|east| R3[Kitchen]
    R3 -->|west| R2
    R3 -->|north| R4[Servant's Quarters]
    R4 -->|south| R3
    R4 -->|east| R5[Library]
    R5 -->|west| R4
    R5 -->|north| R6[Armory]
    R6 -->|south| R5
    R6 -->|east| R7[Courtyard]
    R7 -->|west| R6
    R7 -->|north| R8[Dungeon Entrance]
    R8 -->|south| R7
    R8 -->|north | R9[Dungeon Cell]
    R9 -->|south| R8
    R9 -->|east| R10[Alchemy Lab]
    R10 -->|west| R9
    R10 -->|north| R11[Hidden Passage]
    R11 -->|south| R10
    R11 -->|north| R12[Chapel]
    R12 -->|south| R11
    R12 -->|east| R13[Tower Stairs]
    R13 -->|west| R12
    R13 -->|north| R14[Bat Cave]
    R14 -->|south| R13
    R14 -->|east| R15[Gargoyle Room]
    R15 -->|west| R14
    R15 -->|north| R16[Werewolf's Lair]
    R16 -->|south| R15
    R16 -->|east| R17[Treasure Room]
    R17 -->|west| R16
    R17 -->|north| R18[Observatory]
    R18 -->|south| R17
    R18 -->|north| R19[Vampire's Antechamber]
    R19 -->|south| R18
    R19 -->|north| R20[Vampire's Lair]
    R20 -->|south| R19
