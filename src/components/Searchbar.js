import React from 'react';
function Searchbar(props){
    return (<div>
    <input 
    type='search'
    onChange={props.handleChange} 
    placeholder={props.placeholder}/>       
    </div>)
}
export default Searchbar;