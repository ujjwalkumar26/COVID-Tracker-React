import React from 'react';
import '../index.css';
import logo from '../logoimage.png';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header({showDisplay}){

  var states =() =>{
    showDisplay("states")
  }
  var countries = ()=>{
    showDisplay("countries")
  }
  var home =() =>{
    showDisplay("home")
  }
    return(
        <nav className="navbar navbar-expand-lg" >
  <div className="container-fluid">
    {/* eslint-disable-next-line */}
    <a className="navbar-brand" href="#" onClick={home}><img src={logo} className='logo'></img></a>

    <div className="navbar" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
                {/* eslint-disable-next-line */}
                <a className="nav-link" href="#" onClick={home}>Home</a>
            </li>
                
            <li className="nav-item">
                {/* eslint-disable-next-line */}
                <a className="nav-link" href="#" onClick={states}>India</a>
            </li>

            <li className="nav-item">
                {/* eslint-disable-next-line */}
                <a className="nav-link" href="#" onClick={countries}>World</a>
            </li>   
            <li className="nav-item">
                <a className="nav-link active "  rel="noreferrer"  href="https://docs.google.com/spreadsheets/d/1nHZ-UnRsKbkccAsgTmZvdyAuqrG3QsUWeTrnIuIKnII/edit#gid=605810228" target ="_blank">Resources</a>
            </li>
            
        </ul>
        
    </div>
  </div>
</nav>
    );
}

export default Header;