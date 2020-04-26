const fs = require('fs') 

let Utility = function () {
    this.name="Utility"
};


Utility.parseCSVRankings = (csvFile, categoryNaming) => {
    
    return new Promise((resolve, reject) => {
        let csv = ""
        let rankingsObj = []
        if (csvFile === "ChoseN-rankings.csv"){
            csv = "Champion,Faction,Rarity,Overall,Book Value,Clan Boss,Arena,XP Farmer,Camp / FW,Dragon,Spider,Fire Knight,Ice Golem,Minotaur,Void Kp,Spirit Kp,Magic Kp,Force Kp\n"
            csv += "Venus,Sacred Order,Legendary,9.6,10,10,9,7,10,10,9,10,10,10,10,9,10,10\n"
            csv +=  "Valkyrie,Barbarians,Legendary,9.1,10,10,9,6,10,9,6,10,10,9,8,8,8,10\n"
            csv += "Dracomorph,Lizardmen,Legendary,8.9,10,10,8,3,10,10,10,7,8,10,10,8,8,9\n"
            csv += "Martyr,Sacred Order,Legendary,8.9,10,10,9,6,10,8,5,10,9,9,8,8,8,10\n"
            csv += "Bad el Kazar,Undead,Legendary,8.8,10,10,8,3,10,10,8,6,10,9,9,9,9,10\n"
            csv += "Sir Nicholas,Sacred Order,Legendary,8.6,10,7,10,8,10,10,7,6,10,10,9,9,9,10\n"
           csv += "Siphi The Lost Bride,Undead,Legendary,8.5,10,9,10,5,10,9,5,5,10,9,8,8,8,9\n"
            csv += "Duchess Lilitu,Demonspawn,Legendary,8.4,10,8,10,5,10,8,6,7,10,10,9,8,8,8\n"
            csv += "Rhazin Scarhide,Lizardmen,Legendary,8.4,10,9,8,7,10,8,7,9,5,9,7,4,10,10\n"
            csv += "Ma'Shalled,Undead,Legendary,8.4,10,7,10,8,10,9,5,6,10,10,10,10,8,9\n"
            csv += "Rotos The Lost Groom,Undead,Legendary,8.2,9,9,10,7,10,9,2,5,10,9,9,9,7,8\n"
            csv +=  "Krisk The Ageless,Lizardmen,Legendary,8.2,10,8,9,7,10,8,6,6,9,9,8,8,7,7\n"
            csv += "Ignatius,Ogryn Tribes,Legendary,8.1,9,7,9,9,10,9,9,4,10,9,9,7,6,5\n"
            csv += "Cruetraxa,Demonspawn,Legendary,8.0,8,8,10,8,8,9,2,10,7,9,8,7,7,10\n"
            csv += "Arbiter,High Elves,Legendary,8.0,9,6,10,2,10,9,5,9,10,10,9,10,9,8\n"
            csv += "Rae,Dark Elves,Legendary,8.0,9,4,10,10,10,10,9,4,10,10,10,10,10,8\n"
           csv += "Prince Kymar,Demonspawn,Legendary,8.0,9,5,8,6,10,10,10,7,10,10,10,8,10,7\n"
            csv += "Zavia,Dark Elves,Legendary,7.9,9,6,8,9,9,10,6,9,8,10,10,6,7,8\n"
            csv += "Tyrant Ixlimor,Demonspawn,Legendary,7.9,9,9,8,5,9,7,8,5,8,8,8,7,6,7\n"
            csv += "Raglin,Banner Lords,Legendary,7.8,9,8,7,4,10,8,5,8,9,9,8,8,8,8\n"
            csv += "Altan,Barbarians,Legendary,7.6,10,10,8,5,10,7,2,3,8,8,7,7,6,7\n"
            csv += "Tayrel,High Elves,Epic,7.5,10,8,6,6,8,8,7,6,8,9,7,8,8,6\n"
            csv += "Skullcrusher,Ogryn Tribes,Epic,7.5,10,9,7,1,10,6,2,9,8,8,7,9,6,6\n"
            csv += "Nethril,Undead,Legendary,7.5,7,7,7,7,8,7,8,9,8,8,7,6,9,9\n"
            csv += "Khoronar,Skinwalkers,Legendary,7.4,9,5,8,7,10,8,7,6,8,9,9,7,7,9\n"
            csv += "Lyssandra,High Elves,Legendary,7.1,8,4,10,3,9,7,7,8,8,8,8,7,8,8\n"
            csv += "Madame Serris,Dark Elves,Epic,7.1,10,4,10,7,10,7,5,3,9,9,7,7,9,7\n"
            csv += "Big 'Un,Ogryn Tribes,Legendary,7.1,9,2,9,10,10,9,8,4,9,10,10,8,8,6\n"


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
                heroRankObj[categoryMapToIndex[idx]] = item
            })
            rankingsObj.push(heroRankObj)
        }
        resolve(rankingsObj)
    });
}

export default Utility;