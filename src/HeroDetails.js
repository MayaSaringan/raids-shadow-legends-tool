export default class HeroDetails{
    rawCSV = `faction,title,type,rarity,health,attack,defense,speed,crit_rate,crit_damage,resist,accuracy
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
    Undead Hordes,Vulpine,Attack,Uncommon,11070,1189,826,87,15,50,30,0`

    
}