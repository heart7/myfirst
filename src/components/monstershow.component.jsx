import  React,{Component}  from 'react';
import { CardList } from './carditems/cardlist.component';
import '../App.css';
import { SearchBox } from './searchbox/search-box-component';


export class MonsterShow extends Component{
 
    constructor(){
        super();

        this.state={
          Monsters: [],
          searchfield: ''
        }
    }
    eventhanddler = (e)=>{
     this.setState({searchfield:e.target.value});
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(result=>{this.setState({Monsters:result})})
        console.log(this.state);
    }
render(){
    const {Monsters, searchfield} = this.state;
    const searchitems = Monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    return(

    <div className='App'>
   <h1> MONSTER CARDS </h1> 
    <SearchBox Placeholder='Search Monsters' eventhanddler={this.eventhanddler}/>
    <CardList Monsters={searchitems}/>

    </div>
    );

}

}


