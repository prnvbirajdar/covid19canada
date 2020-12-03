import React from 'react'

function ProvinceHeader({latestReport}) {
    return (
        latestReport === undefined ? 
        null :
       <div>
            <p>Total Cases: {latestReport.total_cases} <span>⬆️ {latestReport.change_cases || 0}</span></p>
            <p>Total Critical Cases:{latestReport.total_criticals} <span>⬆️ {latestReport.change_criticals || 0}</span></p>
            <p>Total Recoveries: {latestReport.total_recoveries} <span>⬆️ {latestReport.change_recoveries || 0}</span></p>
            <p>Total Fatalities: {latestReport.total_fatalities} <span>⬆️ {latestReport.change_fatalities || 0}</span></p>
       </div>
    )
}

export default ProvinceHeader
