import React from 'react'
import WorldGraph from './WorldGraph';
import WorldData from './WorldData';
function Home(){ 
    return(<div className='Home'>
    <WorldData/>
    <br/>
    <span className="heading">Numbers for the current month</span>
    <br/>
    <br/>
    <WorldGraph/>
    </div>)
}
export default Home;