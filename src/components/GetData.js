// eslint-disable-next-line
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import StateData from './StateData';
function GetData(){
    var [info,setInfo] = useState([]);
    var [view,setView] = useState(<div></div>)
    // eslint-disable-next-line 
    const reqOptions= {
        method: 'GET',
        body: JSON.stringify(),
        headers: { 'Accept': 'application/json',
        "Content-type": "application/json; charset=UTF-8",
        "api":1.0
        }
    }
        const apiURL = "https://api.rootnet.in/covid19-in/stats/latest";

        const fetchData = async () => {
        const response = await axios.get(apiURL)
        //console.log(response);
        setInfo(response.data.data.regional)
        }
        useEffect(()=>{
        console.log("res=="+info);})
        console.log(info);
        useEffect(()=>{setView(<div>
            {info.map((state)=>(
                //console.log("state here");
                <StateData params={state} key={state.loc}/>
            ))}
        </div>)},[info])
    return(
        <div>
            <button onClick={fetchData}>COVID INFO</button>
             {view}
        </div>
    )
}
export default GetData;