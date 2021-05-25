import '../styles/State.css'
import React from 'react'
//import {useEffect,useState} from 'react';
//import axios from 'axios'; 
function CountryData(params){
    // var[countryInfo,setCountryInfo] = useState()
    // var countryName=params.Country;
    // const apiURL = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`;
    //     const fetchData = async () => {
    //     const response = await axios.get(apiURL)
    //     var Countrydata = response.data[0]; 
    //     await setCountryInfo(Countrydata);
    //     console.log(CountryData);
    //     }
    //     useEffect(()=>{
    //        fetchData();
    //      },[]);
    return(<div className="box effect5">
    <h1>{params.params.Country}</h1>
        <h5>Total confirmed cases: {params.params.TotalConfirmed}</h5>
        <h5>Total Deaths: {params.params.TotalDeaths}</h5>
        <h5>Total Recovered: {params.params.TotalRecovered}</h5>
    </div>)
}
export default CountryData;