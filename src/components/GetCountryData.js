// eslint-disable-next-line
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import CountryData from './CountryData';
import Searchbar from './Searchbar'
function GetCountryData(){
    var [info,setInfo] = useState([]);
    var [view,setView] = useState(<div></div>)

        const apiURL = "https://api.covid19api.com/summary";

        const fetchData = async () => {
        const response = await axios.get(apiURL)
        //console.log(response.data.Countries)
        await setInfo(response.data.Countries)

        }
         useEffect(()=>{
            fetchData();
         },[]);
        var [filteredInfo, setFilteredInfo]= useState([])
        //eslint-disable-next-line
         useEffect(async ()=>{
         await setFilteredInfo(info);},[info])

        useEffect(()=>{setView(<div>
            {   filteredInfo.map((country)=>(
                <CountryData params={country} key={country.ID}/>
            ))}
            </div>)},[filteredInfo])
         async function searchChange(e){
            var updatedArray=info.filter((country)=>(country.Country.toLowerCase().includes(e.target.value.toLowerCase())));
            await setFilteredInfo(updatedArray);
            setView(<div>
                {   updatedArray.map((country)=>(
                    <CountryData params={country} key={country.ID}/>
                ))}
                </div>)
        }

    return(
        <div>
             <Searchbar handleChange={searchChange} placeholder=' Enter Country'/> 
             {view}
        </div>
    )
}
export default GetCountryData;