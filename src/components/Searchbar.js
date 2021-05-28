import React from 'react';
import '../styles/Searchbar.scss'
function Searchbar(props){
    return(
    // return (<div className= 'searchbox'>
    // <input 
    // className='searchbar'
    // type='search'
    // onChange={props.handleChange} 
    // placeholder={props.placeholder}/>       
    // </div>
    <div className="form__group field">
    <input 
    type="input" 
    className="form__field" 
    placeholder={props.placeholder}
    onChange={props.handleChange} 
    name="name" 
    id='name' 
    autofill='off'
     />
    <label for="name" class="form__label">{props.placeholder}</label>
    </div>
    )
}
export default Searchbar;