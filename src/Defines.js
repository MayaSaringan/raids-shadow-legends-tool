


// Treat as enum for categories of Hero Ranking
export const Categories = {
    Overall: "Overall",
    Campaign: "Campaign",
    XPFarming: "XPFarming",
    ClanBoss: "ClanBoss",
    Name: "Name",
    Faction: "Faction",
    Rarity: "Rarity",
    Type: "Type",
    Arena:"Arena",
    Dragon:"Dragon",
    Spider:"Spider",
    FireKnight:"FireKnight",
    IceGolem:"IceGolem",
    Minotaur:"Minotaur",
    VoidKeep:"VoidKeep"
}
Object.freeze(Categories)

export const Factions = {
    SacredOrder: "Sacred Order",
    Barbarians: "Barbarians",
    LizardMen: "Lizardmen",
    Undead: "Undead",
    DemonSpawn: "DemonSpawn"
}

export const Types = {
    Unknown: "-",
    Attack: "Attack",
    Defense: "Defense",
    HP: "HP",
    Support :"Support"

}

export const RarityValue = {
    "-":0,
    "Common":1,
    "Uncommon":2,
    "Rare":3,
    "Epic":4,
    "Legendary":5
}
export const TypeValue = {
    "-":0,
    "Attack":1,
    "Defense":2,
    "HP":3,
    "Support":4
}
export const FactionValue = {
    "-":0,
    "Skinwalkers":1,
    "Lizardmen":2,
    "Orcs":3,
    "Knight Ref":4,
    "Dark Elves":5,
    "Banner Lords":6,
    "High Elves": 7,
    "Undead":8,
    "Barbarians":9,
    "Sacred Order":10,
    "Orgyn Tribes":11
}

export const RarityColors ={
    "-":"rarity-unknown",
    "Rare":"rare",
    "Epic":"epic",
    "Legendary":"legendary"
}