import React from 'react'
import {useEffect,useState} from 'react';
import axios from 'axios'; 

function WorldData(){
    var [Data, setData] = useState({});
    const apiURL = "https://api.covid19api.com/summary";

     // eslint-disable-next-line
     useEffect(()=>{
        async function fetchData(){
            try{
                const {data} = await axios.get(apiURL)
                //console.log(data.Global);
                setData(data.Global)
            }
            catch(err){
                console.log(err)
            }
        }
        //console.log(dailyData);
        fetchData();
    },[])

    return(<div className="boxy effect5">
        <h2>Global Data</h2>
        <h5>NewConfirmed: {Data.NewConfirmed}</h5>
        <h5>TotalConfirmed: {Data.TotalConfirmed}</h5>
        <h5>NewDeaths: {Data.NewDeaths}</h5>
        <h5>NewRecovered: {Data.NewRecovered}</h5>
        <h5>TotalRecovered: {Data.TotalRecovered}</h5>
        <span>Last updated: {Data.Date}</span>
    </div>)
}
export default WorldData;