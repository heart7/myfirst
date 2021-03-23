import React, { Component } from 'react';
import { CardList } from '../cardlist/cardlist_component';
import { Search } from './../search/search_component';
import '../search/search_style.css';

class Apicall  extends Component {
    constructor(props){
        super(props);
        this.state={
            monsters:[],
            searchfield: ''

        }
    }
    searchHanddler =(e)=>{
     this.setState({searchfield: e.target.value});

    }
     
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(result=>this.setState({monsters:result}))
        console.log(this.state.monsters)
    }

    render() {
        const {monsters,searchfield}= this.state;
        const onDisplay = monsters.filter(monster=>monster.name.toLowerCase().includes(searchfield.toLowerCase()));
        return (
            <div>
            <h1>MONSTER CARDS</h1>
            <Search searchHanddler ={this.searchHanddler}  Placeholder='Search Monster' />
            <CardList monsters= {onDisplay} />
            
            </div>
        );
    }
}

export default Apicall;