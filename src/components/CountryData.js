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
                setImg(<img src={Countrydata.flag} class="card-img-top imght" />)
                //class="card-img-top"  className='flag'
            }
            catch(err){
                if(err)console.log(err);
            }
         }
         useEffect(()=>{
            fetchData();// eslint-disable-next-line
          },[]);

          return(
            <div class="card bg-light mb-3 wide2">
            {img}
            <div class="card-header">{params.params.Country}</div>
                <div class="card-body">
                <h6 class="card-title">Total confirmed cases: {params.params.TotalConfirmed}</h6>
                <h6 class="card-title">Total Deaths: {params.params.TotalDeaths}</h6>
                <h6 class="card-title">Total Recovered: {params.params.TotalRecovered}</h6>
            </div>
          </div>
          )

}
export default CountryData;