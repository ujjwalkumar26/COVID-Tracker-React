import '../App.css';
import React,{useState} from "react";
import GetStateData from './GetStateData';
import GetCountryData from './GetCountryData';
import Home from './Home';
import Header from './Header';
function App() {
  var [view,setView]=useState(<Home/>)
  const changeView = (show)=>{
    if (show ==='home'){
      setView(<Home/>);
    }
    if(show==='states'){
      setView(<GetStateData/>);
    }
    if(show==='countries'){
      setView(<GetCountryData/>);
    }

  }
  return (
    <div className="App">
      <Header showDisplay={changeView}/>
      {view}
    </div>
  );
}

export default App;
