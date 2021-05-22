import React, { useEffect, useState } from 'react';
import {useGetData} from '../hooks/useGetData';
function Info(){
    var [view, setView] = useState(<div></div>);
    const states = useGetData();
    useEffect(()=>{
        console.log(states);})

    return (<div>
        {view}
    </div>)
}
export default Info;