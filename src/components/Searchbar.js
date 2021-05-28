import React from 'react';
import '../styles/Searchbar.scss'
function Searchbar(props){
    return(
    <div className="form__group field">
    <input 
    type="input" 
    className="form__field" 
    placeholder={props.placeholder}
    onChange={props.handleChange} 
    name="name" 
    id='name' 
    autocomplete="off"
    />
    <label for="name" class="form__label">{props.placeholder}</label>
    </div>
    )
}
export default Searchbar;