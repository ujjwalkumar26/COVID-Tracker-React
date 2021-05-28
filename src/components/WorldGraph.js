import React from 'react'
import {useEffect,useState} from 'react';
import axios from 'axios'; 
import {Line} from 'react-chartjs-2';
import '../styles/Home.css'


function WorldGraph(){ 
    var [dailyData, setdailyData] = useState([]);
    const apiURL = "https://corona-api.com/timeline";


     // eslint-disable-next-line
     useEffect(()=>{
        async function fetchData(){
            try{
                const {data} = await axios.get(apiURL)
                //console.log(data.data);
                setdailyData(data.data)
                //console.log(response.data.data)
            }
            catch(err){
                console.log(err)
            }
        }
        //console.log(dailyData);
        fetchData();
        
    },[])

    const linechart =(
        dailyData.length ?
        (<Line
        data={{
            labels: dailyData.slice(0,31).map(({date})=>date),
            redraw: true,
            datasets:[{
                data: dailyData.slice(0,31).map(({new_confirmed})=>new_confirmed),
                label: 'New Confirmed',
                borderColor: '#e60000',
                fill: true,
                tension: 0.3,
                backgroundColor: 'rgba(255,0,0,0.1)'
            },{
                data: dailyData.slice(0,31).map(({new_recovered})=>new_recovered),
                label: 'New Recovered',
                borderColor: '#33cc33',
                backgroundColor:'rgb(45, 235, 60,0.1)',
                fill: true,
                tension: 0.3
            },{
                data: dailyData.slice(0,31).map(({new_deaths})=>new_deaths),
                label: 'New Deaths',
                borderColor: '#8c8c8c',
                fill: true,
                tension: 0.3
            }]
        }}
        />) :null
    )
    return(<div className="chart">
    {linechart}
    </div>)
}
export default WorldGraph;