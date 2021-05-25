import React from 'react';
import '../styles/Searchbar.css'
function Searchbar(props){
    return (<div className= 'searchbox'>
    <input 
    className='searchbar'
    type='search'
    onChange={props.handleChange} 
    placeholder={props.placeholder}/>       
    </div>)
}
export default Searchbar;