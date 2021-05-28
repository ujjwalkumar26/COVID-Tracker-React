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

    return(
        <div class="card bg-light mb-3 wide">
        <div class="card-header">Global COVID-19 Data</div>
            <div class="card-body">
            <h6 class="card-title">New confirmed cases: {Data.NewConfirmed}</h6>
            <h6 class="card-title">Total confirmed cases: {Data.TotalConfirmed}</h6>
            <h6 class="card-title">New deaths: {Data.NewDeaths}</h6>
            <h6 class="card-title">New recovered: {Data.NewRecovered}</h6>
            <h6 class="card-title">Total recovered: {Data.TotalRecovered}</h6>
            <br></br>
            <span >Last updated: {Data.Date}</span>
        </div>
      </div>
    )
}
export default WorldData;