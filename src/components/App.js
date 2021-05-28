import '../styles/App.css';
import React,{useState} from "react";
import GetStateData from './GetStateData';
import GetCountryData from './GetCountryData';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
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
      <Footer showDisplay={changeView}/>
    </div>
  );
}

export default App;
