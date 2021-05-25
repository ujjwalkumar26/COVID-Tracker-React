import '../styles/State.css'
import React from 'react'
import {useEffect,useState} from 'react';
import axios from 'axios'; 
function CountryData(params){
    
    var [img,setImg]=useState()
    //var isImg=false;
    var countryName=params.params.Country;
    //console.log(countryName)
     const apiURL = 'https://restcountries.eu/rest/v2/name/'+countryName+'?fullText=true';
     //console.log(apiURL);
        const fetchData = async () => {
            try{
                const response = await axios.get(apiURL)
                var Countrydata = response.data[0]; 
                //console.log(CountryData);// 
                //eslint-disable-next-line
                setImg(<img src={Countrydata.flag} className='flag'/>)
            }
            catch(err){
                if(err)console.log(err);
            }
         }
         useEffect(()=>{
            fetchData();// eslint-disable-next-line
          },[]);
    return(<div className="box effect5">
    <h1>{params.params.Country}</h1>
        {img}
        <h5>Total confirmed cases: {params.params.TotalConfirmed}</h5>
        <h5>Total Deaths: {params.params.TotalDeaths}</h5>
        <h5>Total Recovered: {params.params.TotalRecovered}</h5>
    </div>)
}
export default CountryData;