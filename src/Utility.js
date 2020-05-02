import HeroDetails from './HeroDetails'

const fs = require('fs') 

let Utility = function () {
    this.name="Utility"
};


Utility.parseCSVHeroDetails = () => {
    let csv = `faction,title,type,rarity,health,attack,defense,speed,crit_rate,crit_damage,resist,accuracy
    Banner Lords,Axeman,HP,Common,15030,507,694,92,15,50,30,0
    Banner Lords,Bandit,Attack,Common,8595,980,650,98,15,50,30,0
    Banner Lords,Pikeman,Defense,Common,11235,595,859,96,15,50,30,0
    Banner Lords,Swordsman,Attack,Common,8100,958,705,100,15,50,30,0
    Banner Lords,Azure,HP,Epic,19320,958,1057,87,15,50,45,0
    Banner Lords,Hordin,Attack,Epic,16845,1321,859,95,15,60,30,0
    Banner Lords,Knight-Errant,Attack,Epic,18660,1387,672,96,15,50,30,15
    Banner Lords,Oathbound,Defense,Epic,18330,782,1299,88,15,50,40,0
    Banner Lords,Rowan,Attack,Epic,16845,1487,694,108,15,60,30,0
    Banner Lords,Warcaster,Support,Epic,20145,1013,947,106,15,50,30,0
    Banner Lords,Baron,Attack,Legendary,15030,1575,1002,90,15,63,40,0
    Banner Lords,Black Knight,HP,Legendary,22470,914,1167,100,15,57,50,0
    Banner Lords,Lord Champfort,HP,Legendary,22305,1079,1013,97,15,50,40,20
    Banner Lords,Lugan the Steadfast,HP,Legendary,20475,925,1013,103,15,63,40,0
    Banner Lords,Raglin,Support,Legendary,20310,1156,1068,104,15,50,50,0
    Banner Lords,Richtoff the Bold,Attack,Legendary,18825,1398,925,95,15,43,30,0
    Banner Lords,Septimus,Attack,Legendary,13710,1674,991,102,15,63,30,0
    Banner Lords,Sethallia,Support,Legendary,18000,1024,1354,108,15,50,30,0
    Banner Lords,Cataphract,HP,Rare,18330,991,815,97,15,50,40,0
    Banner Lords,Chevalier,Defense,Rare,16680,804,1112,98,15,50,30,0
    Banner Lords,Conquerer,Attack,Rare,12225,1421,793,99,15,57,30,0
    Banner Lords,Courtier,Attack,Rare,12720,1277,903,92,15,57,30,0
    Banner Lords,Crossbowman,Attack,Rare,13875,1189,936,95,15,57,30,0
    Banner Lords,Grandmaster,HP,Rare,16185,892,1057,100,15,50,40,0
    Banner Lords,Halberdier,Attack,Rare,12060,1178,1046,97,15,57,30,0
    Banner Lords,Preserver,Defense,Rare,16350,771,1167,102,15,50,40,0
    Banner Lords,Valerie,Support,Rare,15855,969,1002,98,15,50,30,0
    Banner Lords,Archer,Attack,Uncommon,13050,1156,727,97,15,50,30,0
    Banner Lords,Commander,Support,Uncommon,15690,936,771,101,15,50,30,0
    Banner Lords,Duelist,Attack,Uncommon,11400,1200,793,101,15,50,30,0
    Banner Lords,Fireblade,Attack,Uncommon,10080,1178,903,95,15,50,30,0
    Banner Lords,Squire,Defense,Uncommon,15690,760,947,96,15,50,30,0
    Banner Lords,Stalwart,HP,Uncommon,18000,738,815,87,15,50,30,0
    Barbarians,Aina,Attack,Epic,15855,1487,760,105,15,60,30,0
    Barbarians,Atur,HP,Epic,19980,826,1145,96,15,50,45,0
    Barbarians,Jotun,HP,Epic,16680,991,1200,93,15,50,45,0
    Barbarians,Kallia,Attack,Epic,12885,1597,848,106,15,57,30,0
    Barbarians,Woad-Painted,HP,Epic,19815,1013,969,92,15,50,45,0
    Barbarians,Altan,Defense,Legendary,20145,837,1398,102,15,57,50,0
    Barbarians,Turvold,Attack,Legendary,17505,1498,914,93,15,63,40,0
    Barbarians,Valkyrie,Defense,Legendary,17835,793,1597,104,15,50,50,0
    Barbarians,Anointed,Support,Rare,15855,793,1178,91,15,50,30,0
    Barbarians,Berserker,Attack,Rare,14535,1266,793,98,15,57,30,0
    Barbarians,Bloodbraid,HP,Rare,19650,892,826,89,15,50,40,0
    Barbarians,Elder,Defense,Rare,14865,914,1123,92,15,50,40,0
    Barbarians,Marked,Support,Rare,19320,892,848,100,15,50,30,0
    Barbarians,Ox,Attack,Rare,12225,1167,1046,98,15,57,30,0
    Barbarians,Sentinel,HP,Rare,18825,914,859,86,15,50,30,10
    Barbarians,Skirmisher,Attack,Rare,15360,1211,793,94,15,50,30,0
    Barbarians,Slayer,Attack,Rare,15690,1233,782,90,15,57,30,0
    Barbarians,Warmaiden,Attack,Rare,14700,1321,727,97,15,57,30,0
    Barbarians,Crusher,Defense,Uncommon,14370,870,925,96,15,50,30,0
    Barbarians,Dervish,Attack,Uncommon,10080,1112,969,96,15,50,30,0
    Barbarians,Outlander,Attack,Uncommon,9255,1299,837,96,15,50,30,0
    Barbarians,Outrider,Attack,Uncommon,9915,1046,760,99,15,50,30,0
    Barbarians,Pit Fighter,HP,Uncommon,16185,892,793,93,15,50,30,0
    Barbarians,Ritualist,Attack,Uncommon,13545,1068,782,96,15,50,30,0
    Barbarians,Shieldguard,Defense,Uncommon,15360,705,1024,89,15,50,30,0
    Barbarians,Spiritwalker,Support,Uncommon,10740,1288,749,90,15,50,30,0
    Dark Elves,Magekiller,Attack,Common,8265,881,771,102,15,50,30,0
    Dark Elves,Ranger,Attack,Common,12720,815,540,92,15,50,30,0
    Dark Elves,Crimson Helm,Defense,Epic,15690,727,1531,85,15,50,30,15
    Dark Elves,Delver,Attack,Epic,16350,1299,914,91,15,60,30,0
    Dark Elves,Lua,Attack,Epic,14535,1564,771,97,15,60,30,0
    Dark Elves,Luria,Attack,Epic,13050,1487,947,104,15,50,30,10
    Dark Elves,Psylar,Support,Epic,18165,1123,969,105,15,50,30,0
    Dark Elves,Spider,Support,Epic,18330,1211,870,91,15,50,30,15
    Dark Elves,Warden,Defense,Epic,17340,870,1277,98,15,50,45,0
    Dark Elves,Astralith,Attack,Legendary,17175,1487,947,102,15,63,30,10
    Dark Elves,Blind Seer,Support,Legendary,18165,1332,1035,115,15,50,45,0
    Dark Elves,Ghostborn,Support,Legendary,18825,1211,1112,101,15,50,40,0
    Dark Elves,Queen Eva,Attack,Legendary,15690,1696,837,101,15,63,30,10
    Dark Elves,Rae,Attack,Legendary,15195,1343,1222,98,15,63,40,0
    Dark Elves,Zavia,Attack,Legendary,18660,1586,749,105,15,63,30,10
    Dark Elves,Coldheart,Attack,Rare,13710,1376,738,94,15,57,30,0
    Dark Elves,Hexweaver,Support,Rare,16515,914,1013,101,15,50,30,0
    Dark Elves,Judge,Attack,Rare,12225,1476,738,103,15,57,30,0
    Dark Elves,Kael,Attack,Rare,13710,1200,914,103,15,57,30,0
    Dark Elves,Mystic Hand,Support,Rare,16515,804,1123,88,15,50,30,10
    Dark Elves,Paragon,Defense,Rare,14370,958,1112,96,15,50,30,0
    Dark Elves,Retainer,Defense,Rare,16185,672,1277,93,15,50,40,0
    Dark Elves,Spirithost,Support,Rare,15360,1046,958,103,15,50,30,0
    Dark Elves,Wanderer,Attack,Rare,13050,1443,716,96,15,57,30,0
    Dark Elves,Heartpiercer,Attack,Uncommon,12555,1057,859,89,15,50,30,0
    Dark Elves,Redeemer,Attack,Uncommon,10905,1024,727,92,15,50,30,0
    Dark Elves,Sniper,Attack,Uncommon,12555,1211,705,97,15,57,30,0
    Demonspawn,Alure,Attack,Epic,14040,1575,793,96,15,60,30,0
    Demonspawn,Erinyes,Attack,Epic,13050,1553,881,103,15,50,30,0
    Demonspawn,Hellgazer,Attack,Epic,17670,1476,650,87,15,60,30,0
    Demonspawn,Nazana,HP,Epic,21480,859,1013,103,15,50,45,0
    Demonspawn,Peydma,Defense,Epic,17670,826,1299,101,15,50,45,0
    Demonspawn,Souldrinker,Attack,Epic,17340,1299,848,97,15,60,30,0
    Demonspawn,Lord Shazar,HP,Legendary,15690,1343,1189,101,15,63,30,0
    Demonspawn,Mortu-Macaab,Attack,Legendary,23130,1145,892,94,15,63,40,0
    Demonspawn,Prince Kymar,Support,Legendary,18990,1046,1266,103,15,50,40,0
    Demonspawn,Diabolist,Support,Rare,18660,1002,782,110,15,50,30,0
    Demonspawn,Fellhound,Defense,Rare,14865,958,1079,92,15,50,40,0
    Demonspawn,Hellfang,Attack,Rare,14370,1222,837,99,15,57,30,0
    Demonspawn,Hound Spawn,Attack,Rare,13050,1387,760,93,15,50,30,0
    Demonspawn,Ifrit,HP,Rare,18825,815,969,95,15,50,40,0
    Demonspawn,Marquess,Defense,Rare,17175,870,1013,89,15,50,30,10
    Demonspawn,Marquis,Defense,Rare,16845,892,1013,97,15,50,40,0
    Demonspawn,Incubus,Attack,Uncommon,11235,1145,859,95,15,50,30,0
    Demonspawn,Lemure,HP,Uncommon,18165,639,903,93,15,50,30,0
    Demonspawn,Pitspawn,Defense,Uncommon,13545,881,969,86,15,50,30,0
    High Elves,Battlesage,Support,Epic,18000,980,1123,100,15,50,30,0
    High Elves,Exemplar,Attack,Epic,13545,1509,892,94,15,60,30,0
    High Elves,Jinglehunter,Attack,Epic,14700,1498,826,101,15,60,30,0
    High Elves,Luthiea,Attack,Epic,14370,1277,1068,93,15,50,30,20
    High Elves,Marksman,Attack,Epic,14700,1432,892,92,15,60,30,0
    High Elves,Royal Guard,Attack,Epic,15030,1531,771,93,15,60,30,0
    High Elves,Tayrel,Defense,Epic,16185,881,1343,95,15,50,45,0
    High Elves,Thenasil,Support,Epic,15360,969,1035,105,15,50,30,0
    High Elves,Vergis,Defense,Epic,16020,925,1310,98,15,50,45,0
    High Elves,Belanor,Attack,Legendary,15195,1520,1046,105,15,63,30,10
    High Elves,Elenaril,Attack,Legendary,14535,1387,1222,96,15,43,30,0
    High Elves,Ithos,Attack,Legendary,18825,1608,716,99,15,63,30,10
    High Elves,Lyssandra,Support,Legendary,21480,969,1178,110,15,50,30,10
    High Elves,Royal Huntsman,Attack,Legendary,16350,1553,936,105,15,63,30,0
    High Elves,Shirimani,Support,Legendary,19980,1167,1079,104,15,50,40,0
    High Elves,Apothecary,Support,Rare,17175,881,1002,106,15,50,30,0
    High Elves,Avenger,Attack,Rare,12225,1398,815,104,15,57,30,0
    High Elves,Elhain,Attack,Rare,14370,1233,837,107,15,57,30,0
    High Elves,Heiress,Attack,Rare,12390,1167,1035,94,15,57,30,0
    High Elves,Hyria,Attack,Rare,12060,1476,749,101,15,57,30,0
    High Elves,Magister,Support,Rare,16845,782,848,101,15,50,30,0
    High Elves,Elfguard,Attack,Uncommon,13215,1156,716,92,15,50,30,0
    High Elves,Jaeger,Attack,Uncommon,14370,1200,595,100,15,50,30,0
    Knight Revenant,Crypt Witch,Attack,Epic,14865,1421,892,98,15,60,30,0
    Knight Revenant,Deathless,Defense,Epic,18990,881,1156,92,15,50,30,0
    Knight Revenant,Doompriest,Support,Epic,19320,980,1035,100,15,50,30,0
    Knight Revenant,Faceless,Attack,Epic,17505,1398,738,101,15,60,30,0
    Knight Revenant,Kytis,Attack,Epic,14865,1222,1079,95,15,60,30,0
    Knight Revenant,Sinesha,Support,Epic,17340,892,1255,101,15,50,30,0
    Knight Revenant,Skullcrown,Attack,Epic,14535,1509,826,96,15,60,30,0
    Knight Revenant,Bystophus,Attack,Legendary,14700,1795,804,94,15,63,30,10
    Knight Revenant,Soulless,Defense,Legendary,19650,1013,1255,87,15,50,50,10
    Knight Revenant,Tomb Lord,Support,Legendary,18165,1387,980,99,15,50,30,20
    Knight Revenant,Acolyte,Support,Rare,15195,749,1266,104,15,50,30,0
    Knight Revenant,Arcanist,Support,Rare,16185,936,738,98,15,50,30,0
    Knight Revenant,Daywalker,HP,Rare,16515,925,1002,91,15,60,30,0
    Knight Revenant,Executioner,Defense,Rare,14865,782,1255,89,15,50,40,0
    Knight Revenant,Gladiator,Attack,Rare,14040,1156,936,97,15,57,30,0
    Knight Revenant,Guardian,HP,Rare,19155,826,925,96,15,50,40,0
    Knight Revenant,Magus,Attack,Rare,13710,1299,804,94,15,50,30,0
    Knight Revenant,Renegade,Support,Rare,18495,1046,749,95,15,50,30,10
    Knight Revenant,Theurgist,Support,Rare,18495,947,848,103,15,50,30,0
    Knight Revenant,Admonitor,HP,Uncommon,18990,617,870,95,15,50,30,0
    Knight Revenant,Cultist,Attack,Uncommon,12390,1167,760,84,15,50,30,0
    Knight Revenant,Herald,Support,Uncommon,16845,782,848,99,15,50,30,0
    Lizardmen,Troglodyte,Defense,Common,9750,760,793,87,15,50,30,0
    Lizardmen,Broadmaw,Support,Epic,18660,1101,958,104,15,50,30,0
    Lizardmen,Drake,Attack,Epic,14040,1487,881,95,15,60,30,0
    Lizardmen,Jarang,Attack,Epic,12885,1608,837,100,15,50,30,15
    Lizardmen,Jizoh,Defense,Epic,16185,815,1376,94,15,50,45,0
    Lizardmen,Dracomorph,Attack,Legendary,15195,1520,1046,98,15,63,30,10
    Lizardmen,Fu-Shan,Attack,Legendary,16680,1443,1024,106,15,63,30,0
    Lizardmen,Rhazin Scarhide,Defense,Legendary,18330,1046,1310,91,15,50,50,0
    Lizardmen,Bogwalker,Defense,Rare,16020,848,1112,93,15,50,40,0
    Lizardmen,Flinger,Attack,Rare,13050,1266,892,104,15,57,30,0
    Lizardmen,Gator,Support,Rare,16515,892,1046,99,15,50,30,0
    Lizardmen,Hurler,Attack,Rare,14700,1432,617,96,15,57,30,0
    Lizardmen,Metalshaper,Support,Rare,16350,859,1079,90,15,57,30,0
    Lizardmen,Muckstalker,HP,Rare,20475,903,760,101,15,50,40,0
    Lizardmen,Skink,Attack,Rare,13380,1310,826,93,15,57,30,0
    Lizardmen,Skullsworn,Attack,Rare,12720,1365,815,87,15,57,30,0
    Lizardmen,Slasher,Attack,Rare,13050,1332,826,94,15,37,30,0
    Lizardmen,Slitherbrute,Attack,Rare,12885,1310,859,98,15,57,30,0
    Lizardmen,Hardscale,Defense,Uncommon,13050,716,1167,99,15,50,30,0
    Lizardmen,Saurus,Attack,Uncommon,12720,1244,661,83,15,50,30,0
    Lizardmen,Skinner,Attack,Uncommon,12885,1255,639,89,15,50,30,0
    Lizardmen,Stalker,HP,Uncommon,16185,749,925,94,15,50,30,0
    Ogryn Tribes,Galkut,Attack,Epic,11400,1321,1222,91,15,60,30,0
    Ogryn Tribes,Grimskin,Defense,Epic,16350,793,1421,99,15,50,45,0
    Ogryn Tribes,Maneater,Attack,Epic,15360,1432,848,98,15,60,30,0
    Ogryn Tribes,Shatterbones,Attack,Epic,13875,1498,881,97,15,60,30,0
    Ogryn Tribes,Skullcrusher,Defense,Epic,19320,826,1189,98,15,50,45,0
    Ogryn Tribes,BigUn,Attack,Legendary,17505,1575,837,104,15,63,30,10
    Ogryn Tribes,Gurgoh the Augur,Attack,Legendary,16020,1465,1046,92,15,63,30,0
    Ogryn Tribes,Ignatius,Defense,Legendary,18825,1057,1255,93,15,50,40,0
    Ogryn Tribes,Shamrock,Support,Legendary,20805,1002,1189,111,15,50,40,0
    Ogryn Tribes,War Mother,Attack,Legendary,18495,1387,958,99,15,63,30,10
    Ogryn Tribes,Bellower,Support,Rare,16515,1013,914,99,15,50,30,15
    Ogryn Tribes,Flesheater,Support,Rare,14535,1024,1035,94,15,50,30,10
    Ogryn Tribes,Furystoker,Support,Rare,14865,1024,1013,100,15,50,40,0
    Ogryn Tribes,Magmablood,Attack,Rare,13710,1387,727,93,15,50,30,15
    Ogryn Tribes,Pounder,Defense,Rare,14700,859,1222,95,15,50,30,10
    Ogryn Tribes,Rocktooth,Attack,Rare,15525,1211,782,101,15,57,30,0
    Ogryn Tribes,Siegebreaker,Attack,Rare,14040,1211,881,90,15,50,40,0
    Ogryn Tribes,Stoneskin,HP,Rare,19485,892,837,95,15,50,30,10
    Ogryn Tribes,Brute,Attack,Uncommon,16185,1189,760,92,15,50,30,0
    Ogryn Tribes,Frostskin,Support,Uncommon,14865,1046,705,96,15,50,30,0
    Ogryn Tribes,Oldbeard,Defense,Uncommon,14040,716,1101,91,15,50,30,0
    Orcs,Warboy,Defense,Common,13215,584,738,91,15,50,30,0
    Orcs,Bloodfeather,Attack,Epic,13875,1542,837,102,15,60,30,0
    Orcs,Bonekeeper,Attack,Epic,13545,1531,870,98,15,60,30,0
    Orcs,Seer,Support,Epic,19320,1145,870,104,15,50,30,0
    Orcs,Shaman,Support,Epic,17505,1112,1024,106,15,50,30,0
    Orcs,Terrorbeast,HP,Epic,20970,1057,837,93,15,60,30,0
    Orcs,Torturehelm,HP,Epic,19980,881,1090,96,15,60,30,0
    Orcs,Vrask,HP,Epic,23460,870,870,97,15,50,45,0
    Orcs,Zargala,Attack,Epic,16680,1398,793,103,15,60,30,0
    Orcs,Angar,HP,Legendary,21975,826,1288,98,15,50,45,10
    Orcs,Robar,Attack,Legendary,18990,1619,694,87,15,63,30,10
    Orcs,Warlord,Support,Legendary,22305,914,1178,100,15,50,30,20
    Orcs,Chopper,Attack,Rare,15855,1046,925,99,15,57,30,0
    Orcs,Deathchanter,HP,Rare,19650,815,903,89,15,50,40,0
    Orcs,Galek,Attack,Rare,13710,1200,914,103,15,57,30,0
    Orcs,Goremask,Attack,Rare,12225,1509,705,98,15,57,30,0
    Orcs,Huntress,Attack,Rare,11895,1310,925,94,15,57,30,0
    Orcs,Ironclad,HP,Rare,18825,947,826,104,15,50,40,0
    Orcs,Raider,Attack,Rare,14205,1156,925,92,15,50,30,10
    Orcs,Spikehead,Attack,Rare,11895,1465,771,102,15,50,40,0
    Orcs,Totem,Support,Rare,14700,1002,1046,94,15,50,30,10
    Orcs,Veteran,Defense,Rare,15360,683,1321,97,15,57,30,0
    Orcs,Throatcutter,Attack,Uncommon,12225,1189,749,88,15,50,30,0
    Orcs,Warchanter,HP,Uncommon,17340,628,694,94,15,50,30,0
    Skinwalkers,Basher,Attack,Epic,13545,1498,903,95,15,60,30,0
    Skinwalkers,Flesh-Tearer,Support,Epic,18495,991,1079,89,15,50,30,15
    Skinwalkers,Reinbeast,Defense,Epic,18660,826,1233,94,15,50,45,0
    Skinwalkers,Ripper,Attack,Epic,16020,1299,936,96,15,60,30,0
    Skinwalkers,Steelskull,Support,Epic,16020,1277,958,111,15,50,30,0
    Skinwalkers,Taurus,Attack,Epic,17010,1310,859,101,15,50,30,15
    Skinwalkers,Longbeard,Attack,Legendary,17835,1409,980,97,15,63,30,0
    Skinwalkers,Norog,Defense,Legendary,16845,1156,1299,106,15,50,50,0
    Skinwalkers,Warchief,Defense,Legendary,17340,903,1520,98,15,50,50,10
    Skinwalkers,Bloodhorn,HP,Rare,17505,870,991,89,15,50,40,0
    Skinwalkers,Bloodpainter,Attack,Rare,15855,1134,837,102,15,50,30,0
    Skinwalkers,Channeler,Support,Rare,17175,881,1002,103,15,50,30,0
    Skinwalkers,Gnarlhorn,HP,Rare,17010,958,936,96,15,50,45,0
    Skinwalkers,Grappler,Defense,Rare,14700,859,1189,94,15,50,30,10
    Skinwalkers,Graybeard,Defense,Rare,15525,1024,1112,92,15,50,40,0
    Skinwalkers,Satyr,HP,Uncommon,15195,892,848,83,15,50,30,0
    Skinwalkers,Windtalker,Support,Uncommon,13710,903,936,87,15,50,30,0
    The Sacred Order,Knecht,Defense,Common,12225,650,738,98,15,50,30,0
    The Sacred Order,Novitiate,Attack,Common,10245,892,628,83,15,50,30,0
    The Sacred Order,Preacher,HP,Common,10080,837,694,96,15,50,30,0
    The Sacred Order,Sister Militant,Attack,Common,10410,870,639,98,15,50,30,0
    The Sacred Order,Yeoman,Attack,Common,9090,903,694,97,15,50,30,0
    The Sacred Order,Adriel,Support,Epic,18330,1101,980,98,15,50,30,15
    The Sacred Order,Aothar,Attack,Epic,14535,1509,826,92,15,60,30,0
    The Sacred Order,Bushi,Attack,Epic,15690,1476,782,90,15,60,30,0
    The Sacred Order,Canoness,Defense,Epic,17670,804,1321,89,15,50,45,0
    The Sacred Order,Cardinal,Support,Epic,17340,1002,1145,104,15,50,30,0
    The Sacred Order,Fenax,Attack,Epic,13875,1454,925,96,15,60,30,0
    The Sacred Order,Frostbringer,Support,Epic,20310,870,1079,110,15,50,30,0
    The Sacred Order,Hope,HP,Epic,21315,1079,804,104,15,50,45,0
    The Sacred Order,Juliana,Attack,Epic,15360,1398,881,103,15,60,30,0
    The Sacred Order,Lightsworn,Defense,Epic,16350,738,1476,97,15,50,45,0
    The Sacred Order,Relickeeper,Attack,Epic,14370,1365,980,90,15,60,30,0
    The Sacred Order,Romero,Defense,Epic,18000,804,1299,99,15,50,45,0
    The Sacred Order,Tallia,Attack,Epic,12390,1343,1134,98,15,60,30,0
    The Sacred Order,Abbess,Attack,Legendary,14040,1564,1079,96,15,63,30,10
    The Sacred Order,Cupidus,Attack,Legendary,18825,1520,804,107,15,63,30,10
    The Sacred Order,Errol,Attack,Legendary,16020,1674,837,104,15,63,30,0
    The Sacred Order,Martyr,Defense,Legendary,20145,826,1409,93,15,50,50,10
    The Sacred Order,Roshcard the Tower,HP,Legendary,24780,947,980,100,15,50,50,0
    The Sacred Order,Sir Nicholas,HP,Legendary,22800,936,1123,105,15,50,50,0
    The Sacred Order,Venus,Support,Legendary,22635,1090,980,112,15,50,30,20
    The Sacred Order,Athel,Attack,Rare,13545,1189,936,104,15,57,30,0
    The Sacred Order,Chaplain,Support,Rare,13710,1035,804,102,15,50,30,0
    The Sacred Order,Confessor,Attack,Rare,12060,1409,815,98,15,57,30,0
    The Sacred Order,Harrier,Attack,Rare,13545,1376,749,96,15,57,30,0
    The Sacred Order,Hospitaller,Support,Rare,17175,1035,848,101,15,50,30,0
    The Sacred Order,Judicator,Attack,Rare,11895,1398,837,104,15,57,30,0
    The Sacred Order,Justiciar,Defense,Rare,14700,914,1134,93,15,50,40,0
    The Sacred Order,Lamellar,HP,Rare,19650,837,881,93,15,50,40,0
    The Sacred Order,Maiden,Attack,Rare,11730,1343,903,87,15,57,30,0
    The Sacred Order,Penitent,Defense,Rare,14865,793,1244,93,15,50,40,0
    The Sacred Order,Templar,Defense,Rare,15855,881,1090,92,15,50,40,0
    The Sacred Order,Warpriest,Support,Rare,18165,683,1134,97,15,50,30,0
    The Sacred Order,Armiger,Defense,Uncommon,15195,793,947,92,15,50,30,0
    The Sacred Order,Battle Sister,Attack,Uncommon,14205,1090,716,101,15,50,30,0
    The Sacred Order,Crusader,Attack,Uncommon,12390,1123,804,92,15,57,30,0
    The Sacred Order,Intercessor,Support,Uncommon,13380,947,914,102,15,50,30,0
    The Sacred Order,Militia,Attack,Uncommon,13215,1178,694,102,15,50,30,0
    The Sacred Order,Outlaw Monk,Attack,Uncommon,12225,1244,694,96,15,50,30,0
    The Sacred Order,Pilgrim,Support,Uncommon,14865,793,947,98,15,50,30,0
    The Sacred Order,Sergeant,Attack,Uncommon,12555,1112,804,92,15,50,30,0
    The Sacred Order,Sharpshooter,Attack,Uncommon,10575,1255,793,93,15,50,30,0
    The Sacred Order,Vigilante,HP,Uncommon,17505,760,826,98,15,50,30,0
    Undead Hordes,Death Hound,Attack,Common,10740,914,573,94,15,50,30,0
    Undead Hordes,Deathknight,HP,Common,13545,551,749,99,15,50,30,0
    Undead Hordes,Hellhound,Attack,Common,10245,760,760,94,15,50,30,0
    Undead Hordes,Gorgorab,Support,Epic,17670,1057,1068,97,15,50,30,0
    Undead Hordes,Hexia,Attack,Epic,14205,1564,793,97,15,60,30,0
    Undead Hordes,Husk,HP,Epic,20970,969,936,98,15,50,45,0
    Undead Hordes,Karam,Attack,Epic,13215,1354,1068,100,15,60,30,0
    Undead Hordes,Lich,Defense,Epic,18495,694,1376,99,15,50,45,0
    Undead Hordes,Seeker,Defense,Epic,16845,1002,1178,103,15,50,45,0
    Undead Hordes,Zelotah,Support,Epic,20640,826,1101,95,15,50,30,15
    Undead Hordes,Bad-el-Kazar,Support,Legendary,20145,1079,1156,102,15,50,40,20
    Undead Hordes,Bloodgorged,Attack,Legendary,18990,1465,848,90,15,63,40,0
    Undead Hordes,MaShalled,Attack,Legendary,17835,1454,936,103,15,63,30,0
    Undead Hordes,Nethril,Attack,Legendary,17010,1454,991,94,15,63,40,0
    Undead Hordes,Skartorsis,Support,Legendary,20145,859,1376,109,15,50,40,0
    Undead Hordes,Arbalester,Attack,Rare,14205,1421,661,96,15,57,30,0
    Undead Hordes,Banshee,Support,Rare,16515,980,947,92,15,50,30,0
    Undead Hordes,Death Knight,Attack,Rare,14370,1090,980,93,15,57,30,0
    Undead Hordes,Doomscreech,HP,Rare,20310,925,749,95,15,50,45,0
    Undead Hordes,Grinner,Support,Rare,14370,936,1134,110,15,30,30,0
    Undead Hordes,Hollow,Attack,Rare,13050,1299,859,89,15,57,30,0
    Undead Hordes,Seducer,Defense,Rare,16185,628,1321,95,15,50,40,0
    Undead Hordes,Sorceress,Attack,Rare,12555,1321,870,101,15,57,30,0
    Undead Hordes,Temptress,Attack,Rare,11565,1343,914,99,15,57,30,0
    Undead Hordes,Wretch,Attack,Rare,13215,1432,716,97,15,57,30,0
    Undead Hordes,Dhampir,Attack,Uncommon,10410,1068,991,98,15,50,30,0
    Undead Hordes,Skellag,Defense,Uncommon,12555,859,1057,100,15,50,30,0
    Undead Hordes,Skullsquire,Attack,Uncommon,12885,1178,716,107,15,50,30,0
    Undead Hordes,Vulpine,Attack,Uncommon,11070,1189,826,87,15,50,30,0
    Barbarians,Sikara,Support,Epic`

    let detailsObj = {}
    //faction,title,type,rarity,health,attack,defense,speed,crit_rate,crit_damage,resist,accuracy
    let csvHeadersMapToNames =  { // CSV Naming Scheme : Our naming scheme
        "faction": "Faction",
        "title": "Name",
       "type": "Type",
       "rarity": "Rarity",
    //   "health": "Health",
   //    "attack": "Attack",
   //    "defense":"Defense",
    //   "speed": "Speed",

      }
    return new Promise((resolve, reject) => {
        let csvLines = csv.split("\n")
        //headers is first line
        let headers = csvLines[0].split(",")

        let categoryMapToIndex = {}
        headers.map((item, idx) => {
            if (csvHeadersMapToNames[item]) categoryMapToIndex[idx] = csvHeadersMapToNames[item]; 
        })
        
        for (let i = 1;i <csvLines.length ;i++){
            let heroList = csvLines[i].split(",");
            let heroObj = {}

            heroList.map((item, idx) =>{
                if (categoryMapToIndex[idx] === "Name" ||categoryMapToIndex[idx] === "name"  ) return
                if (categoryMapToIndex[idx])
                heroObj[categoryMapToIndex[idx]] = item.trim()
            })
            detailsObj[heroList[1].trim().toLowerCase()] =  heroObj
        }
        resolve(detailsObj)
    });
}

Utility.parseCSVRankings = (csvFile, categoryNaming) => {
    // corrected speeling of Bad el Kazar to have dashes
    return new Promise((resolve, reject) => {
        let csv = ""
        let rankingsObj = []
        if (csvFile === "ChoseN-rankings.csv"){
            csv = `Champion,Faction,Rarity,Overall,Book Value,Clan Boss,Arena,XP Farmer,Camp / FW,Dragon,Spider,Fire Knight,Ice Golem,Minotaur,Void Kp,Spirit Kp,Magic Kp,Force Kp
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


        }
        let csvLines = csv.split("\n")
        //headers is first line
        let headers = csvLines[0].split(",")

        let categoryMapToIndex = {}
        /*
            Overall: "Overall",
            ClanBoss: "Clan Boss",
            Campaign: "Camp / FW",
            XPFarming: "XP Farmer",
            Name: "Champion"
        */
        headers.map((item, idx) => {
            if (categoryNaming[item]) categoryMapToIndex[idx] = categoryNaming[item]; 
        })
        
        for (let i = 1;i <csvLines.length ;i++){
            let heroRankList = csvLines[i].split(",");
            let heroRankObj = {}

            heroRankList.map((item, idx) =>{
                if (categoryMapToIndex[idx])
                heroRankObj[categoryMapToIndex[idx]] = item.trim()
            })
            rankingsObj.push(heroRankObj)
        }
        resolve(rankingsObj)
    });
}

export default Utility;