import {React} from 'react';
import '../search/search_style.css';

export const Search =(props)=>{
    return(

    <div>
    <input className='searchbox' type='search' placeholder={props.Placeholder} onChange ={props.searchHanddler} />
    </div>
);
}