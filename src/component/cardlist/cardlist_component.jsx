import { React } from 'react';
import '../cardlist/calldisplay.css';
import { Card } from './../card/card_component';

export const CardList = (props)=>
    (
<div className='showcard'>
{props.monsters.map(monster=> <div  key={monster.id} > 
<Card monster={monster}/>

</div>)}
   </div>

);

   



