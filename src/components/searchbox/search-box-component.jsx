import React from 'react';
import '../searchbox/search-style.css';

export const SearchBox=({Placeholder,eventhanddler})=>(
   
        <input className="search-style"  type= 'search' placeholder= {Placeholder} 
    onChange={eventhanddler} />
   
);