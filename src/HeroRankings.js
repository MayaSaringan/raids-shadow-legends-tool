let HeroRanking = function () {
   // this.name="HeroRankings"
    this.name="assdsddsds";
    this.rawCSV = `Champion,Faction,Rarity,Overall,Book Value,Clan Boss,Arena,XP Farmer,Camp / FW,Dragon,Spider,Fire Knight,Ice Golem,Minotaur,Void Kp,Spirit Kp,Magic Kp,Force Kp
    Venus,Sacred Order,Legendary,9.6,10,10,9,7,10,10,9,10,10,10,10,9,10,10
    Valkyrie,Barbarians,Legendary,9.1,10,10,9,6,10,9,6,10,10,9,8,8,8,10
    Dracomorph,Lizardmen,Legendary,8.9,10,10,8,3,10,10,10,7,8,10,10,8,8,9
    Martyr,Sacred Order,Legendary,8.9,10,10,9,6,10,8,5,10,9,9,8,8,8,10
    Bad el Kazar,Undead,Legendary,8.8,10,10,8,3,10,10,8,6,10,9,9,9,9,10
    Sir Nicholas,Sacred Order,Legendary,8.6,10,7,10,8,10,10,7,6,10,10,9,9,9,10
    Siphi The Lost Bride,Undead,Legendary,8.5,10,9,10,5,10,9,5,5,10,9,8,8,8,9
    Duchess Lilitu,Demonspawn,Legendary,8.4,10,8,10,5,10,8,6,7,10,10,9,8,8,8
    Rhazin Scarhide,Lizardmen,Legendary,8.4,10,9,8,7,10,8,7,9,5,9,7,4,10,10
    Ma'Shalled,Undead,Legendary,8.4,10,7,10,8,10,9,5,6,10,10,10,10,8,9
    Rotos The Lost Groom,Undead,Legendary,8.2,9,9,10,7,10,9,2,5,10,9,9,9,7,8
    Krisk The Ageless,Lizardmen,Legendary,8.2,10,8,9,7,10,8,6,6,9,9,8,8,7,7
    Ignatius,Ogryn Tribes,Legendary,8.1,9,7,9,9,10,9,9,4,10,9,9,7,6,5
    Cruetraxa,Demonspawn,Legendary,8.0,8,8,10,8,8,9,2,10,7,9,8,7,7,10
    Arbiter,High Elves,Legendary,8.0,9,6,10,2,10,9,5,9,10,10,9,10,9,8
    Rae,Dark Elves,Legendary,8.0,9,4,10,10,10,10,9,4,10,10,10,10,10,8
    Prince Kymar,Demonspawn,Legendary,8.0,9,5,8,6,10,10,10,7,10,10,10,8,10,7
    Zavia,Dark Elves,Legendary,7.9,9,6,8,9,9,10,6,9,8,10,10,6,7,8
    Tyrant Ixlimor,Demonspawn,Legendary,7.9,9,9,8,5,9,7,8,5,8,8,8,7,6,7
    Raglin,Banner Lords,Legendary,7.8,9,8,7,4,10,8,5,8,9,9,8,8,8,8
    Altan,Barbarians,Legendary,7.6,10,10,8,5,10,7,2,3,8,8,7,7,6,7
    Tayrel,High Elves,Epic,7.5,10,8,6,6,8,8,7,6,8,9,7,8,8,6
    Skullcrusher,Ogryn Tribes,Epic,7.5,10,9,7,1,10,6,2,9,8,8,7,9,6,6
    Nethril,Undead,Legendary,7.5,7,7,7,7,8,7,8,9,8,8,7,6,9,9
    Khoronar,Skinwalkers,Legendary,7.4,9,5,8,7,10,8,7,6,8,9,9,7,7,9
    Lyssandra,High Elves,Legendary,7.1,8,4,10,3,9,7,7,8,8,8,8,7,8,8
    Madame Serris,Dark Elves,Epic,7.1,10,4,10,7,10,7,5,3,9,9,7,7,9,7
    Big 'Un,Ogryn Tribes,Legendary,7.1,9,2,9,10,10,9,8,4,9,10,10,8,8,6
    Skullcrown,Knight Rev,Epic,7.0,9,3,10,10,9,8,9,3,7,10,9,6,6,7
    Turvold,Barbarians,Legendary,7.0,6,7,7,7,8,8,3,8,9,8,8,8,8,7
    Ithos,High Elves,Legendary,6.9,7,3,8,9,9,9,8,6,9,9,8,8,8,8
    Minaya,Banner Lords,Legendary,6.9,7,7,7,4,9,8,4,5,8,8,7,9,8,8
    Miscreated Monster,Knight Rev,Epic,6.8,9,5,6,7,9,7,10,4,10,8,7,6,5,5
    Royal Guard,High Elves,Epic,6.8,10,4,4,6,9,10,10,5,8,10,9,7,7,7
    Stag Knight,Banner Lords,Epic,6.8,9,6,6,4,8,7,7,7,8,8,7,6,5,8
    Bloodgorged,Undead,Legendary,6.8,7,3,8,9,9,9,7,4,9,9,6,9,10,10
    Sethallia,Banner Lords,Legendary,6.7,7,7,7,2,9,8,5,5,8,8,7,7,7,6
    Vizier Ovelis,Dark Elves,Legendary,6.7,9,10,4,1,7,7,4,9,3,3,5,5,9,5
    Longbeard,Skinwalkers,Legendary,6.7,5,5,8,3,9,8,4,9,8,9,9,9,10,5
    Tormin the Cold,Dwarves,Legendary,6.7,10,2,10,7,10,6,8,3,9,9,7,4,10,5
    Royal Huntsman,High Elves,Legendary,6.7,7,5,8,8,9,9,6,2,7,9,9,6,5,10
    Steelskull,Skinwalkers,Epic,6.6,9,9,3,1,10,7,5,7,6,6,6,5,4,4
    Foli,Dark Elves,Legendary,6.6,6,6,7,8,8,7,5,7,8,7,7,7,6,4
    Wurlim Frostking,Knight Rev,Legendary,6.6,8,4,8,7,10,8,4,3,10,8,9,7,7,8
    Apothecary,High Elves,Rare,6.6,10,7,6,1,7,7,5,7,8,7,7,5,5,5
    Harvest Jack,Undead,Legendary,6.6,7,4,9,6,9,7,3,8,8,8,7,6,6,9
    Gorgorab,Undead,Epic,6.5,7,6,8,1,9,8,5,5,9,7,5,5,7,5
    Shirimani,High Elves,Legendary,6.5,7,3,8,5,10,8,4,8,8,8,7,8,8,6
    Elenaril,High Elves,Legendary,6.4,5,7,5,6,7,9,5,5,9,8,9,8,7,5
    Norog,Skinwalkers,Legendary,6.4,6,7,7,5,9,8,2,3,8,8,8,9,6,5
    Peydma,Demonspawn,Epic,6.4,8,7,4,6,8,7,3,5,8,8,6,9,9,6
    Jareg,Lizardmen,Epic,6.4,9,9,6,3,7,7,5,3,3,6,5,3,5,5
    Zargala,Orcs,Epic,6.4,8,2,8,7,8,8,7,7,8,9,8,5,7,8
    Kael,Dark Elves,Rare,6.3,10,6,7,8,7,7,7,3,7,7,5,1,1,1
    Lugan the Steadfast,Banner Lords,Legendary,6.3,7,7,7,6,10,6,3,3,9,8,6,2,2,5
    Black Knight,Banner Lords,Legendary,6.3,6,6,6,4,9,8,4,5,8,7,6,7,7,6
    Skartorsis,Undead,Legendary,6.3,7,4,6,7,9,9,5,3,8,8,7,10,8,8
    Hegemon,Knight Rev,Legendary,6.3,8,2,10,9,10,8,3,6,6,6,6,5,5,5
    Scyl of the Drakes,Barbarians,Legendary,6.2,9,1,8,7,10,8,9,7,8,8,8,1,1,5
    Rearguard Sergeant,Dwarves,Epic,6.2,7,7,4,4,9,7,5,6,8,6,6,1,6,9
    Drexthar Bloodtwin,Demonspawn,Legendary,6.2,4,7,7,4,7,6,5,8,7,5,6,5,6,5
    Robar,Orcs,Legendary,6.2,7,5,7,6,9,7,6,6,3,7,5,3,5,9
    Golden Reaper,Knight Rev,Epic,6.2,6,6,6,1,9,7,6,6,7,7,6,6,6,6
    Coldheart,Dark Elves,Rare,6.2,10,3,3,5,7,7,9,10,6,8,8,10,6,5
    Souless,Knight Rev,Legendary,6.2,7,1,8,6,10,6,9,6,8,8,7,7,9,6
    Crypt King Graal,Undead,Legendary,6.2,3,7,5,6,8,8,6,4,9,7,8,8,5,6
    Trunda Giltmallet,Dwarves,Legendary,6.1,8,1,10,5,10,7,9,5,7,9,6,1,4,6
    Cupidus,Sacred Order,Legendary,6.1,3,5,7,7,7,8,6,7,8,7,7,6,5,7
    Warlord,Orcs,Legendary,6.1,6,8,6,2,9,6,1,3,9,7,8,6,6,7
    Septimus,Banner Lords,Legendary,6.1,6,6,5,8,7,8,2,6,8,7,8,8,6,7
    Errol,Sacred Order,Legendary,6.1,5,5,6,7,8,8,3,4,8,8,7,9,10,9
    Basileus Roanas,High Elves,Legendary,6.1,5,2,8,8,8,8,7,5,8,9,7,5,10,10
    Rowan,Banner Lords,Epic,6.1,7,5,6,6,8,7,3,6,6,6,7,10,6,6
    Sepulcher Sentinel,Knight Rev,Epic,6.1,9,10,4,2,8,7,2,3,4,7,3,2,4,3
    Shamrock,Ogryn Tribes,Legendary,6.1,4,5,7,1,9,7,4,8,8,7,6,8,7,7
    Mausoleum Mage,Undead,Epic,6.0,7,6,5,1,8,7,7,6,6,6,9,5,5,5
    Bellower,Ogryn Tribes,Rare,6.0,9,2,6,10,9,8,7,2,6,9,9,7,7,8
    Lanakis The Chosen,Dark Elves,Legendary,6.0,7,6,5,3,7,6,4,8,7,6,7,7,6,6
    Grizzled Jarl,Dwarves,Epic,5.9,6,8,2,3,9,7,7,2,7,5,8,9,5,4
    Zelotah,Undead,Epic,5.9,5,6,5,1,9,7,6,7,8,6,5,5,5,5
    Ghostborn,Dark Elves,Legendary,5.9,5,4,7,4,8,7,6,5,7,8,8,9,4,10
    Tomb Lord,Knight Rev,Legendary,5.9,5,5,6,5,8,7,3,7,8,7,7,6,5,9
    Fu-Shan,Lizardmen,Legendary,5.9,6,3,8,6,8,7,7,7,4,7,7,3,3,9
    Valla,Barbarians,Epic,5.9,7,4,7,6,8,7,3,5,7,7,7,5,8,7
    Yannica,High Elves,Legendary,5.9,3,4,7,7,8,7,6,4,8,8,8,9,7,7
    Warmaiden,Barbarians,Rare,5.9,9,4,7,7,7,7,5,3,5,7,7,3,6,8
    Brakus The Shifter,Skinwalkers,Legendary,5.9,4,5,8,5,7,6,2,9,7,7,7,4,6,6
    Vrask,Orcs,Epic,5.8,1,7,5,3,9,7,6,7,7,6,5,5,5,5
    Queen Eva,Dark Elves,Legendary,5.8,4,2,7,10,8,7,7,4,8,8,9,10,7,8
    Blind Seer,Dark Elves,Legendary,5.8,6,4,6,4,9,7,2,9,8,7,7,5,5,5
    Lord Shazar,Demonspawn,Legendary,5.7,5,2,9,5,8,7,3,7,7,7,8,8,7,7
    Thenasil,High Elves,Epic,5.7,7,5,5,1,9,7,7,6,7,6,3,3,4,3
    Sikara,Barbarians,Epic,5.7,3,4,7,8,8,8,7,3,7,7,8,6,5,3
    Bystophus,Knight Rev,Legendary,5.7,6,2,8,8,9,7,5,3,7,8,8,5,6,8
    Maulie Tankard,Dwarves,Legendary,5.7,8,4,7,4,9,5,4,5,5,7,5,5,5,5
    Lord Champfort,Banner Lords,Legendary,5.7,5,5,6,5,8,7,4,4,7,6,7,7,6,5
    War Mother,Ogryn Tribes,Legendary,5.6,2,5,7,6,8,7,3,5,8,6,8,7,6,7
    Roshcard The Tower,Sacred Order,Legendary,5.6,4,6,10,2,7,6,2,3,6,5,5,5,5,5
    Athel,Sacred Order,Rare,5.5,7,4,5,7,6,6,6,7,6,6,5,5,5,3
    Baron,Banner Lords,Legendary,5.5,5,5,6,6,7,7,2,3,6,7,7,7,8,9
    Psylar,Dark Elves,Epic,5.5,9,1,7,6,10,5,8,3,7,7,6,4,4,3
    Belanor,High Elves,Legendary,5.5,4,4,6,6,7,7,5,4,7,6,7,7,7,8
    Doompriest,Knight Rev,Epic,5.4,9,6,5,1,7,7,3,3,8,9,8,1,1,4
    Cardinal,Sacred Order,Epic,5.4,8,3,5,1,8,7,6,7,7,6,5,5,5,5
    Sandlashed Survivor,Orcs,Epic,5.4,7,8,5,1,8,5,2,4,6,5,5,1,1,4
    Whisper,Knight Rev,Epic,5.4,6,6,6,6,6,7,1,6,6,7,6,1,1,5
    Abbess,Sacred Order,Legendary,5.4,3,2,8,8,7,8,6,3,7,8,8,6,7,7
    Rock Breaker,Dwarves,Epic,5.3,7,1,7,6,8,5,9,7,5,5,5,5,2,5
    Umbral Enchantress,Demonspawn,Epic,5.3,5,1,7,3,9,5,9,6,7,5,5,5,9,5
    Maneater,Ogryn Tribes,Epic,5.3,5,5,6,1,9,6,5,5,6,5,8,1,1,6
    Gala Longbraids,Dwarves,Epic,5.3,7,3,4,5,8,7,2,7,8,7,7,5,5,9
    Reliquary Tender,High Elves,Rare,5.2,8,4,5,1,8,6,2,6,7,6,6,5,5,6
    Inithwe Bloodtwin,Demonspawn,Legendary,5.2,5,2,8,5,7,7,2,6,7,7,8,8,5,6
    Elhain,High Elves,Rare,5.2,7,1,7,9,7,7,7,3,6,8,8,5,4,3
    Sinesha,Knight Rev,Epic,5.2,7,1,6,6,9,7,7,6,8,6,6,1,1,6
    Suzerain Katonn,Undead,Legendary,5.2,2,2,7,9,8,6,5,4,5,8,10,8,8,8
    Soulbond Bowyer,Barbarians,Rare,5.2,8,1,6,9,7,5,8,4,6,7,7,5,2,8
    Alure,Demonspawn,Epic,5.2,7,1,5,4,8,5,5,10,6,7,5,8,8,4
    Seeker,Undead,Epic,5.2,7,3,8,1,8,7,5,3,5,7,6,3,3,5
    Painkeeper,Dark Elves,Rare,5.2,9,4,4,1,8,6,6,6,6,6,5,1,1,5
    Teela Goremane,Orcs,Legendary,5.2,3,6,4,5,8,5,3,2,7,5,6,10,10,4
    Elder Skarg,Barbarians,Legendary,5.2,3,3,6,5,8,6,2,7,8,7,6,8,7,7
    Skull Lord Var-Gall,LIzardmen,Legendary,5.1,2,4,6,5,7,6,2,7,8,9,8,5,6,6
    Frozen Banshee,Undead,Rare,5.1,8,9,3,1,6,7,1,1,6,6,5,1,1,4
    Mountain King,Dwarves,Legendary,5.1,5,1,10,6,9,7,1,2,7,7,8,2,8,8
    Catacomb Councilor,Undead,Epic,5.1,7,6,3,1,6,5,5,7,4,6,5,3,3,5
    Hakkorhn Smashlord,Skinwalkers,Legendary,5.1,5,3,9,1,8,6,3,3,7,8,6,4,4,4
    Aothar,Sacred Order,Epic,5.0,6,7,2,3,5,7,3,5,5,5,5,3,8,5
    Juliana,Sacred Order,Epic,5.0,6,8,3,4,5,7,1,1,7,5,5,5,7,1
    Spirithost,Dark Elves,Rare,5.0,8,3,6,1,7,7,6,5,6,6,3,1,1,3
    Cillian the Lucky,Banner Lords,Legendary,4.9,3,2,8,5,9,6,1,7,8,7,8,4,3,2
    Hordin,Banner Lords,Epic,4.9,4,3,6,6,7,7,1,6,6,6,7,7,6,3
    Renegade,Knight Rev,Rare,4.9,7,3,3,1,6,6,6,6,6,6,6,9,6,6
    Skytouched Shaman,Barbarians,Epic,4.8,7,4,5,1,8,6,2,2,7,8,6,5,5,5
    Mistress of Hymns,Sacred Order,Epic,4.8,8,2,4,1,7,6,6,6,7,6,5,5,5,5
    Skirmisher,Barbarians,Rare,4.8,7,2,5,6,7,6,4,3,5,5,6,6,8,5
    Mother Superior,Sacred Order,Rare,4.8,8,4,3,1,6,7,5,4,7,6,4,4,3,5
    Warpriest,Sacred Order,Rare,4.7,7,4,4,1,5,7,6,4,6,4,4,4,3,5
    Coffin Smasher,Knight Rev,Rare,4.7,8,8,1,1,6,3,1,7,5,5,5,1,1,1
    Lightsworn,Sacred Order,Epic,4.7,6,6,3,1,6,5,2,8,4,5,5,1,1,5
    Galek,Orcs,Rare,4.6,5,2,6,7,7,6,4,3,5,6,7,6,5,2
    Fellhound,Demonspawn,Rare,4.6,6,1,5,9,7,5,6,7,5,5,6,2,2,2
    Nazana,Demonspawn,Epic,4.6,7,4,4,1,7,6,5,4,4,5,4,3,1,4
    Captain Temila,Dark Elves,Epic,4.5,6,4,4,1,6,6,5,6,6,5,4,1,1,3
    Richtoff The Bold,Banner Lords,Legendary,4.5,2,4,3,7,7,6,6,4,5,6,7,4,6,
    Kallia,Barbarians,Epic,4.5,4,6,2,2,6,5,2,5,5,3,5,8,5,5
    Ultimate Galek,Orcs,Epic,4.4,7,4,3,2,6,4,9,1,6,6,6,1,1,4
    Flesh Tearer,Skinwalkers,Epic,4.4,6,6,1,1,7,6,1,5,6,4,4,3,4,3
    Occult Brawler,Ogryn Tribes,Epic,4.4,6,9,2,1,5,2,2,3,4,2,2,3,1,3
    Oathbound,Banner Lords,Epic,4.4,5,3,5,3,7,5,2,6,5,5,5,2,4,4
    Seer,Orcs,Epic,4.4,7,2,4,1,7,7,2,2,9,7,7,8,4,5
    Angar,Orcs,Legendary,4.4,3,1,7,3,8,6,1,7,7,5,6,4,4,5
    Aina,Barbarians,Epic,4.2,4,5,3,4,5,6,2,3,4,5,6,4,5,7
    Battlesage,High Elves,Epic,4.2,5,3,3,3,6,5,6,4,6,5,5,4,3,4
    Seducer,Undead,Rare,4.2,7,2,3,1,8,6,5,4,6,5,8,1,1,5
    Gurgoh Augur,Ogryn Tribes,Legendary,4.2,3,1,8,2,8,5,2,4,7,5,5,4,4,5
    Candraphon,Demonspawn,Legendary,4.2,2,2,5,6,7,6,4,2,6,6,7,5,6,5
    Grinner,Undead,Rare,4.2,7,2,3,1,9,6,3,3,6,5,5,1,6,5
    Ragemonger,Barbarians,Rare,4.2,6,6,3,1,4,6,5,1,5,4,5,1,1,1
    Adriel,Sacred Order,Epic,4.1,5,3,3,1,6,5,4,7,4,5,5,4,4,4
    Basher,Skinwalkers,Epic,4.1,7,3,6,2,6,4,3,2,3,5,5,1,6,1
    Lua,Dark Elves,Epic,4.1,7,1,5,6,6,5,8,1,5,5,5,1,1,3
    Frostbringer,Sacred Order,Epic,4.1,6,2,5,1,5,5,2,7,4,5,4,9,2,4
    Crimson Helm,Dark Elves,Epic,4.1,6,1,6,1,7,6,6,4,6,4,4,1,1,1
    Warcaster,Banner Lords,Epic,4.1,4,2,6,2,6,4,3,3,5,3,3,9,10,2
    Lutheia,High Elves,Epic,4.1,5,4,4,3,5,6,5,1,5,5,5,1,1,5
    Marksman,High Elves,Epic,4.0,6,6,3,1,5,5,1,3,4,4,4,1,1,5
    Bogwalker,Lizardmen,Rare,4.0,7,7,1,1,5,5,2,2,3,4,4,1,1,4
    Shatterbones,Ogryn Tribes,Epic,4.0,6,1,5,1,5,5,4,6,5,5,5,5,5,5
    Ursine Ironhide,Skinwalkers,Epic,4.0,6,1,5,2,7,5,5,5,5,5,5,1,1,4
    Diabolist,Demonspawn,Rare,4.0,5,3,7,2,5,4,3,2,4,3,4,4,3,3
    Warchief,Skinwalkers,Legendary,4.0,2,2,3,2,6,5,2,8,5,5,6,7,10,7
    Myrmidon,Banner Lords,Rare,4.0,3,3,5,2,7,6,3,2,5,4,4,5,4,3
    Chaplain,Sacred Order,Rare,4.0,7,3,4,1,6,5,4,2,6,4,5,1,1,4
    Doomscreech,Undead,Rare,4.0,5,3,5,1,5,5,4,4,5,5,5,1,1,5
    Hospitaller,Sacred Order,Rare,4.0,7,3,5,1,5,5,3,2,4,4,4,1,6,3
    Knight Errant,Banner Lords,Epic,3.9,2,3,6,5,6,5,1,2,5,6,5,5,3,7
    Gravechill Killer,Undead,Rare,3.9,7,6,1,1,5,6,2,1,5,5,5,1,1,5
    Dark Elhain,Undead,Epic,3.9,5,1,7,4,6,5,5,1,7,7,5,1,1,1
    Chevalier,Banner Lords,Rare,3.9,6,4,4,2,6,3,2,4,5,2,3,2,2,2
    High Khatun,Barbarians,Epic,3.8,2,2,6,2,7,5,2,3,5,5,5,5,5,5
    Grohak The Bloodied,Orcs,Legendary,3.8,2,1,5,3,7,3,1,5,7,7,8,8,7,5
    Jotun,Barbarians,Epic,3.8,3,6,2,2,6,3,1,2,4,3,4,7,4,5
    Conquerer,Banner Lords,Rare,3.8,5,4,5,4,4,3,1,1,5,3,4,2,8,4
    Valerie,Banner Lords,Rare,3.8,4,4,5,1,7,5,1,1,4,3,3,4,3,2
    Spider,Dark Elves,Epic,3.8,5,3,3,1,5,4,6,1,5,6,5,1,7,7
    Ursine Icecrusher,Skinwalkers,Epic,3.8,7,1,5,2,8,5,3,2,4,5,5,1,1,4
    Gladiator,Knight Rev,Rare,3.7,6,6,3,1,4,3,3,1,3,4,4,1,1,3
    Broadmaw,Lizardmen,Epic,3.7,6,3,2,1,10,3,2,2,4,5,5,2,2,5
    Gnarlhorn,Skinwalkers,Rare,3.7,5,4,4,3,6,3,4,1,4,3,3,1,1,3
    Husk,Undead,Epic,3.7,6,1,5,1,5,6,7,1,5,5,5,1,1,5
    Fenax,Sacred Order,Epic,3.7,6,1,6,1,6,5,3,1,6,4,4,1,4,7
    Hyria,High Elves,Rare,3.7,6,5,3,1,3,4,1,4,3,6,6,1,1,5
    Baerdal Fellhammer,Dwarves,Epic,3.7,6,1,4,4,4,4,1,8,2,5,5,10,1,4
    Haruspex,Lizardmen,Rare,3.7,6,4,2,1,5,5,3,3,4,4,4,2,2,4
    Luria,Dark Elves,Epic,3.6,5,1,5,1,5,5,6,1,5,4,4,5,5,5
    Jarang,Lizardmen,Epic,3.6,6,4,3,1,5,4,1,4,4,5,5,1,1,3
    Arcanist,Knight Rev,Rare,3.6,7,2,4,1,5,5,3,4,4,4,4,1,1,3
    Witness,Sacred Order,Rare,3.6,7,3,3,1,5,5,3,2,5,4,6,1,1,2
    Erinyes,Demonspawn,Epic,3.5,6,6,1,1,3,5,1,3,3,3,3,1,5,1
    Lameller,Sacred Order,Rare,3.5,5,3,4,1,5,4,4,1,4,4,4,1,1,6
    Bulwark,Dwarves,Rare,3.4,7,6,1,1,4,4,1,1,3,3,3,1,1,4
    Suwai Firstborn,Barbarians,Epic,3.4,3,3,2,4,5,5,2,2,4,5,5,4,5,7
    Dark Athel,Undead,Epic,3.4,6,2,4,1,4,3,7,1,4,4,4,1,1,5
    Paragon,Dark Elves,Rare,3.4,6,1,5,1,4,4,4,3,3,3,3,8,1,3
    Marked,Barbarians,Rare,3.4,5,3,3,1,4,5,4,1,5,4,6,1,1,6
    Banshee,Undead,Rare,3.4,4,1,4,4,6,4,6,1,4,4,3,1,6,1
    Executioner,Knight Rev,Rare,3.3,7,1,3,6,5,4,3,3,4,5,5,1,1,1
    Excruciator,Demonspawn,Epic,3.3,4,1,6,5,5,3,4,4,1,3,3,1,1,3
    Fleshmonger,Skinwalkers,Rare,3.3,7,2,5,1,5,2,1,4,3,3,3,1,1,5
    Centurion,Knight Rev,Rare,3.3,6,2,3,1,5,4,1,4,4,4,4,4,4,4
    Reinbeast,Skinwalkers,Epic,3.3,2,1,6,4,8,5,1,1,5,5,5,1,1,4
    Lordly Legionary,Banner Lords,Epic,3.3,7,1,3,1,4,4,1,8,5,5,5,1,1,1
    Yaga the Insatiable,Skinwalkers,Epic,3.3,5,5,1,1,4,5,1,1,5,5,5,1,1,5
    Halberdier,Banner Lords,Rare,3.3,4,3,4,5,5,4,1,2,3,2,3,2,1,3
    Hexweaver,Dark Elves,Rare,3.3,4,3,4,1,4,4,3,3,3,4,4,1,1,4
    Azure,Banner Lords,Epic,3.2,2,1,4,2,6,5,2,4,6,4,4,4,4,4
    Shaman,Orcs,Epic,3.2,4,2,5,2,6,3,1,4,5,4,1,1,1,1
    Tallia,Sacred Order,Epic,3.2,5,2,3,1,4,3,2,7,3,6,5,1,1,4
    Fang Cleric,Dark Elves,Epic,3.2,7,1,1,1,7,5,2,5,4,4,4,1,1,4
    Corpse Collector,Undead,Epic,3.2,5,4,2,1,3,4,4,2,4,4,4,1,1,1
    Hollow,Undead,Rare,3.1,5,3,1,1,4,4,4,4,4,4,4,1,1,4
    Astralith,Dark Elves,Legendary,3.1,1,3,5,3,6,4,1,1,3,5,2,2,1,6
    Metalshaper,Lizardmen,Rare,3.1,6,2,2,1,4,4,3,3,4,4,4,3,4,3
    Relickeeper,Sacred Order,Epic,3.1,6,1,4,6,5,4,1,1,4,5,5,1,1,4
    Romero,Sacred Order,Epic,3.1,5,2,4,1,5,4,3,1,4,4,4,1,1,3
    Mortu-Macaab,Demonspawn,Legendary,3.1,5,1,5,1,6,1,1,1,4,4,4,10,3,4
    Teshada,Barbarians,Epic,3.1,2,3,2,3,6,4,2,3,5,3,4,1,3,2
    Magus,Knight Rev,Rare,3.1,8,1,3,1,5,4,1,4,4,4,4,1,1,1
    Lady Etessa,Sacred Order,Epic,3.1,5,3,3,1,4,3,1,3,3,3,3,1,5,4
    Bloodpainter,Skinwalkers,Rare,3.1,5,3,3,1,3,4,3,2,4,4,4,1,1,3
    Grimskin,Ogryn Tribes,Epic,3.0,6,1,4,1,5,3,3,3,3,3,3,1,4,1
    Gator,Lizardmen,Rare,3.0,5,2,2,1,5,5,3,1,4,3,3,7,1,3
    Jinglehunter,High Elves,Epic,3.0,3,1,6,4,5,3,3,1,3,4,5,1,1,3
    Crimson Slayer,Knight Rev,Rare,3.0,7,1,3,1,3,3,1,6,3,3,3,7,1,3
    Theurgist,Knight Rev,Rare,3.0,6,3,2,1,3,3,2,3,3,3,3,1,5,3
    Galkut,Ogryn Tribes,Epic,3.0,5,2,4,2,4,4,2,1,3,3,3,1,1,8
    Jizoh,Lizardmen,Epic,3.0,6,1,3,4,5,4,1,4,2,5,4,1,1,2
    Infernal Baroness,Demonspawn,Epic,3.0,5,1,3,1,6,3,7,1,1,5,5,1,1,1
    Pitiless One,Knight Rev,Epic,3.0,5,1,4,4,3,3,6,1,3,5,5,1,1,1
    Templar,Sacred Order,Rare,2.9,6,1,4,4,4,4,2,1,4,4,4,1,1,3
    Runic Warder,Dwarves ,Rare,2.9,5,3,1,1,4,4,1,5,4,4,4,1,1,1
    Hope,Sacred Order,Epic,2.9,5,1,2,1,6,4,1,1,7,3,3,5,7,3
    Ironclad,Orcs,Rare,2.9,7,3,1,1,3,4,1,1,5,2,4,8,1,1
    Raider,Orcs,Rare,2.9,6,1,3,1,4,3,4,3,3,4,4,1,1,5
    Bombardier,Banner Lords,Rare,2.9,4,5,2,1,3,3,1,1,3,4,3,1,2,2
    Heiress,High Elves,Rare,2.9,6,3,2,1,3,4,3,1,4,2,4,1,1,3
    Sorceress,Undead,Rare,2.9,5,2,2,1,4,3,2,4,4,4,4,1,1,7
    Snorting Thug,Skinwalkers,Epic,2.9,7,1,1,1,6,5,1,1,1,5,5,1,9,5
    Judge,Dark Elves,Rare,2.9,4,1,4,4,3,3,5,1,4,5,5,1,1,3
    Alika,Barbarians,Epic,2.8,1,2,3,3,4,4,3,2,4,5,5,2,4,5
    Vanguard,Banner Lords,Rare,2.8,5,3,3,2,3,2,1,1,3,3,2,4,4,4
    Perforator,Dwarves,Rare,2.8,7,4,1,1,3,3,1,1,3,3,3,1,1,4
    Skullsworn,Lizardmen,Rare,2.8,7,1,3,3,4,3,1,4,2,3,3,1,1,3
    Courtier,Banner Lords,Rare,2.8,3,1,4,3,5,5,2,1,2,3,2,1,8,2
    Grandmaster,Banner Lords,Rare,2.8,2,4,3,2,3,3,1,4,3,1,1,2,1,1
    Slayer,Barbarians,Rare,2.8,3,4,3,1,3,3,3,1,1,3,3,1,1,3
    Berserker,Barbarians,Rare,2.8,5,1,3,4,5,4,1,1,4,4,4,1,1,5
    Graybeard,Skinwalkers,Rare,2.7,4,1,4,3,5,3,3,1,3,4,3,1,1,3
    Channeler,Skinwalkers,Rare,2.7,4,1,4,1,4,3,1,3,4,4,4,5,1,4
    Anointed,Barbarians,Rare,2.7,4,1,4,1,4,4,1,1,4,4,4,1,8,4
    Confessor,Sacred Order,Rare,2.7,6,1,3,1,3,3,4,3,3,4,4,1,1,1
    Lich,Undead,Epic,2.7,4,1,2,1,3,3,6,5,3,3,4,1,1,3
    Defiled Sinner,Undead,Epic,2.7,5,1,3,2,3,3,7,1,3,3,3,1,1,1
    Grappler,Skinwalkers,Rare,2.7,4,3,2,1,3,4,1,3,3,4,4,1,1,4
    Totem,Orcs,Rare,2.7,6,3,1,1,3,3,1,1,3,4,4,1,5,6
    Fencer,High Elves,Rare,2.7,5,1,4,1,3,3,4,1,3,5,5,1,1,4
    Veteran ,Orcs,Rare,2.7,5,5,1,1,3,2,1,1,2,2,2,1,3,1
    Interceptor,High Elves,Rare,2.7,6,1,2,1,4,4,4,1,4,4,4,1,1,4
    Guardian,Knight Rev,Rare,2.7,5,1,4,1,3,3,1,3,2,5,4,2,5,3
    Karam,Undead,Epic,2.7,5,3,1,1,4,5,1,1,3,4,4,1,1,4
    Seneschal,Banner Lords,Epic,2.7,2,3,3,1,4,3,2,2,3,3,3,2,2,2
    Stitched Beast,Undead,Rare,2.7,5,2,1,1,3,3,3,5,3,3,3,1,1,4
    Exemplar,High Elves,Epic,2.7,5,1,3,1,4,4,1,3,4,4,4,1,1,4
    Sentinel,Barbarians,Rare,2.6,4,1,4,4,5,1,3,1,1,3,3,3,1,4
    Hill Nomad,Barbarians,Rare,2.6,4,3,2,1,5,3,1,1,3,3,2,2,2,1
    Woad Painted,Barbarians,Epic,2.6,3,1,2,2,5,3,1,5,5,4,5,2,1,3
    Wretch,Undead,Rare,2.6,5,4,1,1,2,2,1,1,2,3,3,8,1,3
    Ogryn Jailer,Ogryn Tribes,Rare,2.6,8,1,1,1,5,2,1,1,2,5,3,1,10,1
    Preserver,Banner Lords,Rare,2.6,3,1,4,2,4,4,1,3,3,4,3,1,2,2
    Warden,Dark Elves,Epic,2.6,1,2,1,1,4,4,3,6,3,5,3,1,1,5
    Bone Knight,Undead,Rare,2.5,4,1,4,1,3,3,2,1,3,4,3,7,1,3
    Steel Bowyer,Dark Elves,Rare,2.5,3,3,1,1,1,5,5,1,1,6,6,1,1,5
    Atur,Barbarians,Epic,2.5,2,2,2,1,5,2,1,5,5,3,3,2,1,1
    Towering Titan,Ogryn Tribes,Epic,2.5,4,2,2,1,3,4,1,1,4,4,4,2,2,7
    Bloodfeather,Orcs,Epic,2.5,3,1,5,1,4,2,1,1,3,5,5,1,1,7
    Rotting Mage,Undead,Rare,2.5,6,1,2,1,5,4,1,1,4,4,4,1,1,1
    Acolyte,Knight Rev,Rare,2.5,5,1,2,1,3,4,3,1,5,4,6,1,1,4
    Grumbler,Dwarves,Rare,2.5,4,2,2,1,3,3,3,1,3,3,3,3,3,3
    Master Butcher,Dwarves,Rare,2.4,4,2,3,1,4,3,1,1,3,3,3,1,1,3
    Ghoulish Ranger,Undead,Rare,2.4,4,3,1,1,3,4,1,2,3,3,3,1,1,3
    Fortress Goon,Ogryn Tribes,Rare,2.4,5,2,2,1,3,3,2,2,2,2,2,4,1,1
    Pounder,Ogryn Tribes,Rare,2.4,4,2,4,1,4,2,1,1,3,1,1,1,1,1
    Marquess,Demonspawn,Rare,2.4,3,2,3,1,4,3,2,1,2,4,3,1,1,2
    Furystroker,Ogryn Tribes,Rare,2.4,4,2,2,1,2,4,4,1,4,2,2,1,1,1
    Faceless,Knight Rev,Epic,2.4,2,1,3,1,5,4,1,1,4,5,5,1,1,6
    Souldrinker,Demonspawn,Epic,2.4,5,1,5,1,5,1,1,1,1,1,1,1,1,1
    Mystic Hand,Dark Elves,Rare,2.3,3,1,1,1,5,3,1,1,3,4,5,3,9,5
    Basilisk,Lizardmen,Epic,2.3,2,1,3,6,3,3,4,1,2,3,3,1,1,1
    Madman,Dwarves,Rare,2.3,3,1,3,3,3,3,3,1,3,3,3,1,1,5
    Cannoness,Sacred Order,Epic,2.3,6,2,2,1,4,2,1,1,2,2,2,1,1,1
    Skink,Lizardmen,Rare,2.3,6,1,1,1,3,2,1,1,2,4,4,6,6,4
    Vergis,High Elves,Epic,2.3,4,1,2,1,5,3,1,3,2,4,2,1,1,2
    Necrohunter,Knight Rev,Epic,2.3,3,2,2,1,4,3,1,1,2,5,5,1,1,4
    Terrorbeast,Orcs,Epic,2.3,6,1,1,1,2,1,1,7,1,4,4,1,1,4
    Siegebreaker,Ogryn Tribes,Rare,2.3,4,1,3,1,3,2,3,2,3,3,3,1,1,1
    Cagebreaker,Ogryn Tribes,Epic,2.2,3,1,3,1,3,2,3,2,2,3,3,1,1,7
    Stoneskin,Ogryn Tribes,Rare,2.2,3,1,3,1,3,3,3,2,3,3,3,1,1,1
    Maiden,Sacred Order,Rare,2.2,4,1,3,1,3,2,2,1,3,4,4,1,1,4
    Deathless,Knight Rev,Epic,2.2,4,1,2,1,3,2,3,3,3,2,2,1,1,3
    Maeve,Barbarians,Epic,2.2,1,1,3,2,5,3,1,1,5,2,3,1,3,2
    Hellgazer,Demonspawn,Epic,2.1,3,1,3,1,3,3,3,1,1,1,3,1,1,6
    Steadfast Marshall,Banner Lords,Rare,2.1,3,2,3,1,4,2,1,1,2,1,1,1,1,1
    Eviscerator,Dark Elves,Rare,2.1,2,3,2,1,3,1,1,1,3,3,3,1,1,4
    Taurus,Skinwalkers,Epic,2.1,1,6,1,1,1,1,1,1,1,1,1,1,1,1
    Bloodhorn,Skinwalkers,Rare,2.1,3,2,1,1,4,3,1,1,3,4,4,1,1,3
    Flinger,Lizardmen,Rare,2.1,4,1,2,1,3,2,3,1,2,3,3,1,1,6
    Magmablood,Ogryn Tribes,Rare,2.1,4,2,2,1,3,2,2,1,2,2,2,1,1,1
    Kytis,Knight Rev,Epic,2.1,4,1,2,1,2,1,1,3,2,3,2,10,1,1
    Cudgeler,Dwarves,Rare,2.1,3,1,3,1,3,3,1,1,3,4,4,1,1,3
    Temptress,Undead,Rare,2.1,4,1,2,1,2,2,1,3,1,3,3,1,8,1
    Corpulent Cadaver,Undead,Rare,2.0,5,1,2,1,3,3,1,1,3,3,3,1,1,1
    Penitent,Sacred Order,Rare,2.0,5,2,1,1,2,2,1,3,2,2,2,1,1,1
    Magister,High Elves,Rare,2.0,4,1,2,1,2,2,1,3,2,3,3,5,1,2
    Crossbowman,Banner Lords,Rare,2.0,1,2,2,2,3,3,1,2,2,3,2,3,2,1
    Adjudicator,High Elves,Rare,2.0,6,1,1,1,2,1,2,2,2,3,3,5,1,1
    Justiciar,Sacred Order,Rare,2.0,5,1,3,1,2,2,1,1,2,3,3,1,1,2
    Crypt Witch,Knight Rev,Epic,2.0,3,1,2,1,3,3,1,1,1,5,2,1,6,4
    Ripper,Skinwalkers,Epic,1.9,3,1,2,1,3,2,2,2,1,2,2,3,1,2
    Treefeller,Orcs,Rare,1.9,3,1,2,1,3,2,2,2,2,3,3,1,1,1
    Twinclaw Disciple,Orcs,Rare,1.9,3,2,1,1,2,2,1,1,2,2,2,8,1,1
    Amaratine Skeleton,Undead,Rare,1.9,4,1,1,1,2,2,1,1,1,3,3,6,6,1
    Chopper,Orcs,Rare,1.8,4,1,1,1,3,2,1,1,2,3,2,1,5,3
    Stout Axeman,Dwarves,Rare,1.8,4,1,1,1,2,2,1,5,1,2,2,1,1,1
    Hexia,Undead,Epic,1.8,3,2,1,1,2,2,1,1,2,3,3,1,1,6
    Wanderer,Dark Elves,Rare,1.8,2,1,1,1,1,3,3,3,2,5,3,1,1,5
    Daywalker,Knight Rev,Rare,1.8,3,1,1,1,2,3,2,2,3,3,3,1,1,3
    Retainer,Dark Elves,Rare,1.8,2,1,1,1,1,1,4,4,3,3,3,1,1,4
    Hatchet Slinger,Dwarves,Rare,1.8,3,1,2,1,3,2,1,2,1,2,2,1,1,4
    Delver,Dark Elves,Epic,1.8,2,1,1,1,3,1,1,3,1,4,1,7,1,5
    Ifrit,Demonspawn,Rare,1.8,3,2,1,1,2,2,1,2,2,2,2,1,1,2
    Rocktooth,Ogryn Tribes,Rare,1.8,5,1,1,1,2,1,1,1,1,2,2,8,1,1
    Bonekeeper,Orcs,Epic,1.7,2,1,2,1,2,2,1,1,2,5,5,1,1,7
    Beast Wrestler,Dwarves,Rare,1.7,3,1,2,1,2,2,1,1,5,2,2,1,1,2
    Spikehead,Orcs,Rare,1.7,3,1,2,1,1,2,1,3,2,3,3,1,1,1
    Drake,Lizardmen,Epic,1.7,1,1,2,6,2,2,1,1,2,3,3,1,1,1
    Judicator,Sacred Order,Rare,1.7,4,1,1,1,2,1,2,1,2,3,3,1,1,5
    Bloodbraid,Barbarians,Rare,1.7,4,1,1,1,2,1,1,1,1,3,2,7,1,3
    Slitherbrute,Lizardmen,Rare,1.7,3,1,1,1,3,1,1,2,2,2,2,1,5,1
    Malbranche,Demonspawn,Rare,1.7,1,2,3,1,1,1,1,3,1,1,1,1,1,1
    Flesheater,Ogryn Tribes,Rare,1.7,3,1,2,1,3,2,1,1,1,2,2,1,1,1
    Avenger,High Elves,Rare,1.6,2,1,2,1,2,2,1,1,2,4,4,1,1,3
    Honor Guard,Dwarves,Rare,1.6,4,1,1,1,2,1,1,1,1,3,1,1,6,1
    Bushi,Sacred Order,Epic,1.6,3,1,2,1,1,1,1,1,1,3,3,3,3,3
    Hurler,Lizardmen,Rare,1.5,2,1,1,1,2,1,1,1,1,4,3,2,6,4
    Harvester,Dark Elves,Rare,1.5,4,1,1,1,1,1,1,1,1,1,1,3,5,3
    Slasher,Lizardmen,Rare,1.5,3,1,1,1,2,2,1,1,1,2,2,1,1,6
    Torturehelm,Orcs,Epic,1.5,3,1,1,1,2,1,1,1,1,3,1,1,6,1
    Arbalester,Undead,Rare,1.5,1,1,2,1,2,2,2,1,2,2,2,1,1,2
    Harrier,Sacred Order,Rare,1.5,3,1,1,1,1,1,1,2,2,3,3,1,1,5
    Ox,Barbarians,Rare,1.4,3,1,1,1,2,1,1,1,1,3,2,1,1,5
    Marquis,Demonspawn,Rare,1.4,2,1,2,1,1,1,3,1,1,1,1,1,1,1
    Painsmith,Dwarves,Rare,1.4,2,1,1,1,1,2,1,1,5,2,2,1,1,2
    Hellfang,Demonspawn,Rare,1.4,2,1,1,1,2,3,1,1,2,1,1,1,1,1
    Huntress,Orcs,Rare,1.4,2,1,1,1,2,2,1,1,2,2,2,1,1,2
    Tormenter,Demonspawn,Rare,1.3,1,1,2,1,2,1,1,2,1,1,1,1,1,1
    Deathchanter,Orcs,Rare,1.3,2,1,1,1,1,1,1,1,1,1,1,8,1,1
    Muckstalker,Lizardmen,Rare,1.3,2,1,1,1,2,1,1,1,1,2,1,1,4,1
    Missionary,Sacred Order,Epic,1.3,2,1,1,1,2,1,1,1,3,2,1,1,1,1
    Cataphract,Banner Lords,Rare,1.3,1,1,2,1,1,1,1,1,3,1,3,1,1,3
    Goremask,Orcs,Rare,1.2,1,1,1,1,1,1,1,1,1,3,3,1,4,1
    Houndspawn,Demonspawn,Rare,1.2,2,1,1,1,1,1,1,1,1,1,1,1,1,4
    Elder,Barbarians,Rare,1.1,2,1,1,1,1,1,1,1,1,3,1,1,1,1`

};
HeroRanking.parseCSVRankings = (rawCSV, categoryNaming) => {
    return new Promise((resolve, reject) => {
        let rankingsObj = []
        let csvLines = rawCSV.split("\n")
        console.log(rawCSV)

        //headers is first line
        let headers = csvLines[0].split(",")

        let categoryMapToIndex = {} // index of a category: our category naming
        headers.map((headerName, idx) => {
            if (categoryNaming[headerName]) categoryMapToIndex[idx] = categoryNaming[headerName]; 
        })
        
        for (let i = 1; i < csvLines.length ;i++){
            let heroRankList = csvLines[i].split(",");
            let heroRankObj = {}

            heroRankList.map((item, idx) =>{
                if (categoryMapToIndex[idx])
                heroRankObj[categoryMapToIndex[idx]] = item
            })
            rankingsObj.push(heroRankObj)
        }
        resolve(rankingsObj)
    });
}

export default HeroRanking;