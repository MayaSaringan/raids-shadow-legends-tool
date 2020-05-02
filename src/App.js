import React, {Component} from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import Utility from './Utility'
import FilterOption from './Components/FilterOption'

import {Categories, Factions, Types, RarityValue, TypeValue, FactionValue, RarityColors} from './Defines.js'
import {FavoriteHeroes} from './UserDefines.js'
// CSV Ranks
const CSVRankings = {
  ChoseN : {
    csvFile: "ChoseN-rankings.csv",
    categoryNaming: { // CSV Naming Scheme : Our naming scheme
      "Overall": "Overall",
      "Clan Boss": "ClanBoss",
     "Camp / FW": "Campaign",
     "XP Farmer": "XPFarming",
     "Champion": "Name",
     "Faction": "Faction",
     "Arena" : "Arena",
     "Dragon":"Dragon",
     "Spider":"Spider",
     "Fire Knight":"FireKnight",
     "Ice Golem":"IceGolem",
     "Minotaur":"Minotaur",
     "Void Kp":"VoidKeep"
    }
  }
}
Object.freeze(CSVRankings.ChoseN)

const CSVRankingsList = [CSVRankings.ChoseN]
class  App extends Component {
  constructor(props){
    super(props)
    this.state = {
      rankingsObjList: null,
      sortingRule:{
        category:Categories.Overall,
        descending:true
      },
      showOverall:true,
      showCampaign:true, 
      showClanBoss:true,
      showXPFarming:true,
      categoriesList:  [Categories.Name, Categories.Rarity, Categories.Type, Categories.Overall, Categories.Campaign, Categories.ClanBoss, Categories.XPFarming, Categories.Faction,
        Categories.Arena,
        Categories.Dragon, Categories.Spider, Categories.FireKnight, Categories.IceGolem, Categories.Minotaur, Categories.VoidKeep],
      filteredCategories: [],
      filteredCategoryValues: { Type:[]}, //items are : {CategoryName: value},
      favoriteHeroes:FavoriteHeroes
    }
  }
  componentDidMount = () =>{
    CSVRankingsList.map(item => {
      Utility.parseCSVRankings(item.csvFile, item.categoryNaming)
      .then((rankingsList)=>{
        console.log(rankingsList)
        Utility.parseCSVHeroDetails()
        .then((res)=>{
         
          rankingsList.map(item=>{
            console.log(res)
            console.log(item.Name)
            let name =item.Name.trim().toLowerCase();
            console.log(res[name])
         //   console.log(name=="Venus")
         //   console.log(res["Venus"])
          if (!res[name]){
            name = name.replace(/\s+/g, '-')
          }
          console.log("looking for: "+name)

          if (!res[name]){
            console.log("cannot find details skip")
            item["Rarity"] = "-"
            // console.log(res[name]["Rarity"])
            item["Type"] = "-"
          }else{
            item["Rarity"] = res[name]["Rarity"];
          // console.log(res[name]["Rarity"])
          item["Type"] = res[name]["Type"];
          }
          
          })
          this.setState({rankingsObjList: rankingsList})
        });
        
      });
    })

    
    
  }

  addSortingRule = (category, descending) =>{
    this.setState({sortingRule:{category:category, descending:descending}})
  }
  renderCategoriesRow = () => {
    //prepend name category
    
    return (
      <thead>
        <tr>
          <th>Favorite?</th>
          {this.state.categoriesList.map((item) =>  {
            if (this.state.filteredCategories.indexOf(item)!==-1) return null
          return (
            <th>
              <div style={{flexDirection:'row', display:'flex',flex:0, alignItems:'center', justifyContent:'space-between'}}>
                {item}
                <div style={{flexDirection:'column', display:'flex',flex:1, justifyContent:'center',alignItems:'flex-end'}}>
                  <button onClick={()=>this.addSortingRule(item, false)} className="sort-button">^</button>
                  <button onClick={()=>this.addSortingRule(item, true)}  className="sort-button">v</button>
                </div>
              </div>
            </th>
            )
          
          }) }
        </tr>
      </thead>
    )
  }

  //takes category rule and -1 and +1 if descending / ascending order
  //favorites ignore descending/ascending order
  renderHeroes = (category, descending) => {
    //takes state rankingsList and sorts them by the rule given, in the order specified
    if (!this.state.rankingsObjList) return null

    let sortedRankingList = []
    let sortedIndices = []
    for (let i=0;i<this.state.rankingsObjList.length;i++){
      if (this.state.favoriteHeroes.indexOf(this.state.rankingsObjList[i][Categories.Name])!==-1) continue;
      this.addHero(this.state.rankingsObjList[i], category, descending,sortedRankingList)
    }
    return sortedRankingList.map(item => this.renderHeroRow(item))
  }

  addHero = (heroObj, category,descending, sortedRankingList) =>{
    let added= false
    for (let j=0;j<sortedRankingList.length;j++){
      //if category is non int
      if (typeof  parseInt(sortedRankingList[j][category]) === 'number' && !isNaN(parseInt(sortedRankingList[j][category])) ){
        // console.log(category)
        if (category==="Rarity") console.log(parseInt(sortedRankingList[j][category]))
        if (descending && parseInt(heroObj[category]) > parseInt(sortedRankingList[j][category])){
          sortedRankingList.splice(j,0, heroObj)
          added = true
          break;
        }
        else if (!descending && parseInt(heroObj[category]) < parseInt(sortedRankingList[j][category])){
          sortedRankingList.splice(j,0,heroObj)
          added = true
          break;
        }
      }else{
        // console.log(`${RarityValue[sortedRankingList[i][category]]} vs ${RarityValue[sortedRankingList[j][category]] }` )
        
        if  (descending &&heroObj[category] === undefined){
          sortedRankingList.splice(j,0, heroObj)
          added = true
          break;
        }
          if  (!descending &&heroObj[category] === undefined){
          sortedRankingList.splice(j,0, heroObj)
          added = true
          break;
        }
        let categorySortRule = {}

        if (category ==="Rarity"){
          categorySortRule = RarityValue
        }else if (category==="Type"){
          categorySortRule = TypeValue
        }else if (category==="Faction"){
          categorySortRule = FactionValue
        }
        if ( heroObj !== undefined && descending && categorySortRule[heroObj[category]] > categorySortRule[sortedRankingList[j][category]]){
          sortedRankingList.splice(j,0, heroObj)
          added = true
          break;
        }else  if (heroObj !== undefined &&!descending && categorySortRule[heroObj[category]] < categorySortRule[sortedRankingList[j][category]]){
          sortedRankingList.splice(j,0, heroObj)
          added = true
          break;
        }
      }
      
    }
    if (!added)
    {
      sortedRankingList.push(heroObj)
    }
  }
  renderFavoriteHeroes = (category, descending) => {
    //takes state rankingsList and sorts them by the rule given, in the order specified
    if (!this.state.rankingsObjList) return null

    let sortedRankingList = []
    let sortedIndices = []
    for (let i=0;i<this.state.rankingsObjList.length;i++){
      if (this.state.favoriteHeroes.indexOf(this.state.rankingsObjList[i][Categories.Name])===-1) continue;
      this.addHero(this.state.rankingsObjList[i], category, descending,sortedRankingList)
    }
    return sortedRankingList.map(item => this.renderHeroRow(item))
  }

  favoriteHero = (heroObj) => {
    console.log(this.state.favoriteHeroes)
    this.setState({favoriteHeroes:[...this.state.favoriteHeroes,heroObj[Categories.Name]]})

  }
  renderHeroRow = (heroObj) => {
    let heroRankList = []
    const keys = Object.keys(heroObj)
   

    if (heroObj[Categories.Faction] === this.state.filteredCategoryValues[Categories.Faction]) {
      console.log("Hero "+heroObj[Categories.Name])
      console.log("Belongs in faction: "+this.state.filteredCategoryValues[Categories.Faction])
      return null
    }
    console.log(this.state.filteredCategoryValues)
    if (this.state.filteredCategoryValues[Categories.Type].indexOf(heroObj[Categories.Type])!==-1) {
      console.log("Hero "+heroObj[Categories.Name])
      console.log("Belongs in faction: "+this.state.filteredCategoryValues[Categories.Faction])
      return null
    }
    return (
      <tbody>
        <tr className={RarityColors[heroObj.Rarity]}>
        <th><div onClick={() => this.favoriteHero(heroObj)} className={`filter-option-status${this.state.favoriteHeroes.indexOf(heroObj[Categories.Name])===-1?``:`-selected`}`}/></th>
          {this.state.categoriesList.map((item) => {
               if (this.state.filteredCategories.indexOf(item)!==-1) return null
            if (heroObj[item]){
              return (
                <th>{heroObj[item]}</th>
              )
            }
            else{
              return (
                <th>{"-"}</th>
              )
            }
            
          }) }
        </tr>
      </tbody>
    )
  }

  toggleFilter = (category) =>{
    if (this.state.filteredCategories.indexOf(category) === -1){

      console.log("not found in filters")
      this.setState({filteredCategories:[...this.state.filteredCategories, category]})
    }
    else{
      let index = this.state.filteredCategories.splice(this.state.filteredCategories.indexOf(category),1)
      this.setState({filteredCategories:[...this.state.filteredCategories]})
    }
    
  }


  toggleFactionFilter = (category) =>{
    console.log("hit factionfilter")
    console.log(this.state.filteredCategoryValues[Categories.Faction])
    
    if (this.state.filteredCategoryValues[Categories.Faction] === category){
      console.log("!st condition")

      let copy = {...this.state.filteredCategoryValues}
      copy[Categories.Faction] = null
      this.setState({filteredCategoryValues:{copy}})
    }
    else{
      let copy = {...this.state.filteredCategoryValues}
      copy[Categories.Faction] = category
      console.log("2nd condition")
      this.setState({filteredCategoryValues:copy})
    }
    
  }

  toggleTypeFilter = (category) =>{
    console.log("hit typefilter")
    console.log(this.state.filteredCategoryValues[Categories.Type])
    
   
    //if category already filtered
    if (this.state.filteredCategoryValues[Categories.Type].indexOf(category)!==-1){
      console.log("!st condition")

      let copy = {...this.state.filteredCategoryValues}
      copy[Categories.Type].splice(copy[Categories.Type].indexOf(category),1)
      console.log(copy)
      this.setState({filteredCategoryValues:copy})
    }
    else{
      let copy = {...this.state.filteredCategoryValues}
      copy[Categories.Type].push(category)
      console.log("2nd condition")
      console.log(copy)
      this.setState({filteredCategoryValues:copy})
    }
    
  }

  isFactionFiltered = (faction) => this.state.filteredCategoryValues[Categories.Faction] === faction

  isTypeFiltered = (type) =>  this.state.filteredCategoryValues[Categories.Type].indexOf(type) !== -1
  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./raid-logo.jpg" className="raid-logo"/>Raids Shadow Legends Ranker
        </header>
        <div className="content">
         <div className="table-display">
          <div className="table-container">
              <Table striped bordered hover variant="dark">
                {this.renderCategoriesRow()}
                {this.renderFavoriteHeroes(this.state.sortingRule.category, this.state.sortingRule.descending)}
              </Table>
            </div>
            <div className="table-container">
              <Table striped bordered hover variant="dark">
                {this.renderCategoriesRow()}
                {this.renderHeroes(this.state.sortingRule.category, this.state.sortingRule.descending)}
              </Table>
            </div>
          </div>
         


          <div className="controls-container">
              <div className="accordion-container">
                <FilterOption label="Campaign" checked={this.state.filteredCategories.indexOf("Campaign")===-1} onToggleFilter={this.toggleFilter}/>
                <FilterOption label={Categories.ClanBoss} checked={this.state.filteredCategories.indexOf(Categories.ClanBoss)===-1} 
                onToggleFilter={this.toggleFilter}></FilterOption>
                <FilterOption label={Categories.XPFarming} checked={this.state.filteredCategories.indexOf(Categories.XPFarming)===-1} onToggleFilter={this.toggleFilter}></FilterOption>
                <FilterOption 
                  label={Categories.Faction}
                  checked={this.state.filteredCategories.indexOf(Categories.Faction)===-1}
                  onToggleFilter={this.toggleFilter}
                >
                  <FilterOption 
                    label={Factions.SacredOrder}
                    checked={!this.isFactionFiltered(Factions.SacredOrder)} 
                    onToggleFilter={this.toggleFactionFilter}
                  />
                  <FilterOption 
                    label={Factions.Barbarians}
                    checked={!this.isFactionFiltered(Factions.Barbarians)} 
                    onToggleFilter={this.toggleFactionFilter}
                  />
                  <FilterOption 
                    label={Factions.LizardMen}
                    checked={!this.isFactionFiltered(Factions.LizardMen)} 
                    onToggleFilter={this.toggleFactionFilter}
                  />
                </FilterOption>
                <FilterOption 
                  label={Categories.Type}
                  checked={!this.state.filteredCategories[Categories.Type]}
                  onToggleFilter={this.toggleFilter}
                >
                  <FilterOption 
                    label={Types.Attack}
                    checked={!this.isTypeFiltered(Types.Attack)} 
                    onToggleFilter={this.toggleTypeFilter}
                  />
                  <FilterOption 
                    label={Types.Support}
                    checked={!this.isTypeFiltered(Types.Support)} 
                    onToggleFilter={this.toggleTypeFilter}
                  />
                  <FilterOption 
                    label={Types.Defense}
                    checked={!this.isTypeFiltered(Types.Defense)} 
                    onToggleFilter={this.toggleTypeFilter}
                  />
                  <FilterOption 
                    label={Types.Unknown}
                    checked={!this.isTypeFiltered(Types.Unknown)} 
                    onToggleFilter={this.toggleTypeFilter}
                  />
                </FilterOption>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
