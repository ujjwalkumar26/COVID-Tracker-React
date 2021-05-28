import React from 'react'
function StateData(params){
    return(
        <div class="card bg-light mb-3 wide2">
        <div class="card-header">{params.params.loc}</div>
        <div class="card-body">
        <h6 class="card-title">Total confirmed cases: {params.params.totalConfirmed}</h6>
        <h6 class="card-title">Cases Foreign: {params.params.confirmedCasesForeign}</h6>
         <h6 class="card-title">Cases Indian: {params.params.confirmedCasesIndian}</h6>
         <h6 class="card-title">Deaths: {params.params.deaths}</h6>
         <h6 class="card-title">Discharged: {params.params.discharged}</h6>
        </div>
      </div>
        )
}
export default StateData;