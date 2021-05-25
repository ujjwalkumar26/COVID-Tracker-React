import '../styles/State.css'
import React from 'react'
function StateData(params){
    return(<div className="box effect5">
    <h1 >{params.params.loc}</h1>
        <h5>Total confirmed cases: {params.params.totalConfirmed}</h5>
        <h5>Cases Foreign: {params.params.confirmedCasesForeign}</h5>
        <h5>Cases Indian: {params.params.confirmedCasesIndian}</h5>
        <h5>Deaths: {params.params.deaths}</h5>
        <h5>Discharged: {params.params.discharged}</h5>
    </div>)
}
export default StateData;