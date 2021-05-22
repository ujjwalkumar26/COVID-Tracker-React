
import React,{useState,useEffect} from 'react';
import axios from 'axios';
export const useGetData = ()=>{
    var [info,setInfo] = useState([]);
    // eslint-disable-next-line 
    
    const apiURL = "https://api.rootnet.in/covid19-in/stats/latest";

        const fetchData = async () => {
        const response = await axios.get(apiURL)
        //console.log(response);
        setInfo(response.data.data.regional)
        console.log("+++1+++"+info);
    }
    useEffect(()=>{fetchData()});
    return (info);
};