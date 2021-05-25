// eslint-disable-next-line
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import StateData from './StateData';
import Searchbar from './Searchbar'
function GetStateData(){
    var [info,setInfo] = useState([]);
    var [view,setView] = useState(<div></div>)

        const apiURL = "https://api.rootnet.in/covid19-in/stats/latest";

        const fetchData = async () => {
        const response = await axios.get(apiURL)
        await setInfo(response.data.data.regional)

        }
        useEffect(()=>{
            fetchData();
        },[]);
        var [filteredInfo, setFilteredInfo]= useState([])
        //eslint-disable-next-line
         useEffect(async ()=>{
         await setFilteredInfo(info);},[info])

        useEffect(()=>{setView(<div>
            {   filteredInfo.map((state)=>(
                <StateData params={state} key={state.loc}/>
            ))}
            </div>)},[filteredInfo])
         async function searchChange(e){
            var updatedArray=info.filter((state)=>(state.loc.toLowerCase().includes(e.target.value.toLowerCase())));
            await setFilteredInfo(updatedArray);
            setView(<div>
                {   updatedArray.map((state)=>(
                    <StateData params={state} key={state.loc}/>
                ))}
                </div>)
        }
    return(
        <div>
            <Searchbar handleChange={searchChange} placeholder=' Enter the State/UT'/>
             {view}
        </div>
    )
}
export default GetStateData;