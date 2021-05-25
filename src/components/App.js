import '../App.css';
import React,{useState} from "react";
import GetStateData from './GetStateData';
function App() {
  var [view,setView]=useState()

  function showStates() {
    setView(<GetStateData/>)
  }
  
  function ShowCountries() {
    setView()
  }
  function home() {
    setView()
  }
  return (
    <div className="App">
      <button onClick={showStates}>State Data</button>
      <button onClick={home}>Home page</button>
      {view}
    </div>
  );
}

export default App;
