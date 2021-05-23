// eslint-disable-next-line
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import StateData from './StateData';
import Searchbar from './Searchbar'
function GetData(){
    var [info,setInfo] = useState([]);
    var [view,setView] = useState(<div></div>)

        const apiURL = "https://api.rootnet.in/covid19-in/stats/latest";

        const fetchData = async () => {
        const response = await axios.get(apiURL)
        //console.log(response);
        setInfo(response.data.data.regional)
        }
        //var [filteredInfo, setFilteredInfo]= useState([])
        // useEffect(()=>{
        // setFilteredInfo(info);})
        console.log(info);
        useEffect(()=>{setView(<div>
            {   info.map((state)=>(
                <StateData params={state} key={state.loc}/>
            ))}
            </div>)},[info])
         function searchChange(e){
            console.log(e.target.value);
            //var updatedArray=info.filter((state)=>(state.loc.toLowerCase().includes(e.target.value.toLowerCase())));
            //setFilteredInfo(updatedArray);
            //console.log("new data"+updatedArray);
        }
    return(
        <div>
            <button onClick={fetchData}>COVID INFO</button>
            <Searchbar handleChange={searchChange} placeholder=' Enter the State/UT'/>
             {view}
        </div>
    )
}
export default GetData;