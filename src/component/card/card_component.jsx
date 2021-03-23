import {React} from 'react';
import '../card/card_style.css';

export const Card = (props)=>{
 return(
     <div className="card">
      <img alt = 'monster' src = {`https://robohash.org/${props.monster.id}?set=set2&size=185x185`} />
      <h2>{props.monster.name}</h2>
      <h3>{props.monster.email}</h3>
     </div>
 );

} 
