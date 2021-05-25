import '../App.css';
import React,{useState} from "react";
import GetStateData from './GetStateData';
import GetCountryData from './GetCountryData';
function App() {
  var [view,setView]=useState()

  function showStates() {
    setView(<GetStateData/>)
  }
  
  function ShowCountries() {
    setView(<GetCountryData/>)
  }
  function home() {
    setView()
  }
  return (
    <div className="App">
      <button onClick={showStates}>Indian States Data</button>
      <button onClick = {ShowCountries}>World Countries Data</button>
      <button onClick={home}>Home page</button>
      {view}
    </div>
  );
}

export default App;
