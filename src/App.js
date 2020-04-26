import React, {Component} from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import Utility from './Utility'
// Treat as enum for categories of Hero Ranking
const Categories = {
  Overall: "Overall",
  Campaign: "Campaign",
  XPFarming: "XPFarming",
  ClanBoss: "ClanBoss",
  Name: "Name"
}
Object.freeze(Categories)

// CSV Ranks
const CSVRankings = {
  ChoseN : {
    csvFile: "ChoseN-rankings.csv",
    categoryNaming: {
      "Overall": "Overall",
      "Clan Boss": "ClanBoss",
     "Camp / FW": "Campaign",
     "XP Farmer": "XPFarming",
     "Champion": "Name"
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
      showClanBoxx:true,
      showXPFarming:true,
      categoriesList:  [Categories.Name, Categories.Overall, Categories.Campaign, Categories.ClanBoss, Categories.XPFarming]
    }
  }
  componentDidMount = () =>{
    CSVRankingsList.map(item => {
      Utility.parseCSVRankings(item.csvFile, item.categoryNaming)
      .then((rankingsList)=>{
        console.log(rankingsList)
        this.setState({rankingsObjList: rankingsList})
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
          {this.state.categoriesList.map((item) =>  {
          return (
            <th>
              <div style={{flexDirection:'row', display:'flex',flex:0, alignItems:'center', justifyContent:'center'}}>
                {item}
                <div style={{flexDirection:'column', display:'flex',flex:0}}>
                  <button onClick={()=>this.addSortingRule(item, false)} style={{width:50, height:50}}>^</button><button onClick={()=>this.addSortingRule(item, true)} style={{width:50, height:50}}>v</button>
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
  renderHeroes = (category, descending) => {
    //takes state rankingsList and sorts them by the rule given, in the order specified
    if (!this.state.rankingsObjList) return null

    let sortedRankingList = []
    let sortedIndices = []
    for (let i=0;i<this.state.rankingsObjList.length;i++){
      let added= false
      for (let j=0;j<sortedRankingList.length;j++){
        if (descending && parseInt(this.state.rankingsObjList[i][category]) > parseInt(sortedRankingList[j][category])){
          sortedRankingList.splice(j,0, this.state.rankingsObjList[i])
          added = true
          break;
        }
        else if (!descending && parseInt(this.state.rankingsObjList[i][category]) < parseInt(sortedRankingList[j][category])){
          sortedRankingList.splice(j,0, this.state.rankingsObjList[i])
          added = true
          break;
        }
      }
      if (!added)
      {
        sortedRankingList.push(this.state.rankingsObjList[i])
      }
    }
    return sortedRankingList.map(item => this.renderHeroRow(item))
  }
  renderHeroRow = (heroObj) => {
    let heroRankList = []
    const keys = Object.keys(heroObj)
   

    
    return (
      <tbody>
        <tr>
          {this.state.categoriesList.map((item) => {
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
    if (category === "Campaign"){
      if (this.state.showCampaign){
        if (this.state.categoriesList.indexOf(category)==-1) return
      
        let index = this.state.categoriesList.splice(this.state.categoriesList.indexOf(category),1)
        
        this.setState({showCampaign: !this.state.showCampaign,
          categoriesList: this.state.categoriesList
          })

      
      }else{
        this.state.categoriesList.splice(2,0, category);
        this.setState({showCampaign: !this.state.showCampaign,  categoriesList: this.state.categoriesList});
   
      }
    }
      
  }
  /*
 <input
            type="checkbox"
            value={"Campaign"}
            checked={!this.state.showCampaign}
            onChange={() => this.toggleFilter("Campaign")}
          />

  */
  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          Raids Shadow Legends Ranker
         
          <Table striped bordered hover variant="dark">
            {this.renderCategoriesRow()}
            {this.renderHeroes(this.state.sortingRule.category, this.state.sortingRule.descending)}
          </Table>
        </header>
      </div>
    );
  }
  
}

export default App;
