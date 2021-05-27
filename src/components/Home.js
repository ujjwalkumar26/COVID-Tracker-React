import React from 'react'
//import {useEffect,useState} from 'react';
//import axios from 'axios'; 
import WorldGraph from './WorldGraph';
import WorldData from './WorldData';
function Home(){ 
    return(<div className='Home'>
    <WorldData/>
    <WorldGraph/>
    </div>)
}
export default Home;