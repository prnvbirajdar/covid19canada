import React from 'react'

function Header({date,data}) {

    const myStyle = {
        display:'flex',
        flexDirection:'column',
        alignItems: 'center'
    }





    return (
        <div style={myStyle}>
        <div>
            <h3>Last updated: {date}</h3>
        </div>
           
            <div class="ui five doubling cards">
                <div class="card">
                    <div class="content">
                        <div class="ui statistics" style={{margin:'auto', padding:0, display:'flex', justifyContent:"center"}}>
                            <div class=" blue statistic">
                                <div class="value">
                                    {data.total_cases}
                                </div>
                                <div class="label" style={{fontSize:"1.2rem"}}>
                                    Total Cases
                                </div>
                            </div>
                            <div class="ui blue statistic">
                                <div class="value">
                                {data.change_cases}
                                </div>
                                <div class="label" style={{fontSize:"1.2rem"}}>
                                   New Cases
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="ui statistics" style={{margin:'auto', padding:0, display:'flex', justifyContent:"center"}}>
                            <div class="red statistic">
                                <div class="value">
                                    {data.total_fatalities}
                                </div>
                                <div class="label" style={{fontSize:"1.2rem"}}>
                                    Total Deaths
                                </div>
                            </div>
                            <div class="ui red statistic">
                                <div class="value">
                                {data.change_fatalities}
                                </div>
                                <div class="label" style={{fontSize:"1.2rem"}}>
                                   New Deaths
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="ui statistics" style={{margin:'auto', padding:0, display:'flex', justifyContent:"center"}}>
                            <div class="green statistic">
                                <div class="value">
                                    {data.total_recoveries}
                                </div>
                                <div class="label" style={{fontSize:"1.2rem"}}>
                                    Total Recoveries
                                </div>
                            </div>
                            <div class="ui green statistic">
                                <div class="value">
                                {data.change_recoveries}
                                </div>
                                <div class="label" style={{fontSize:"1.2rem"}}>
                                New Recoveries
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div class="card">
                    <div class="content">
                        <div class="ui statistics" style={{margin:'auto', padding:0, display:'flex', justifyContent:"center"}}>
                            <div class="purple statistic">
                                <div class="value">
                                {data.total_cases - data.total_recoveries - data.total_fatalities}
                                </div>
                                <div class="label" style={{fontSize:"1.2rem"}}>
                                    Total Active
                                </div>
                            </div>
                            <div class="ui purple statistic">
                                <div class="value">
                                {data.change_cases - data.change_recoveries - data.change_fatalities}
                                </div>
                                <div class="label" style={{fontSize:"1.2rem"}}>
                                New Active
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div class="card">
                <div class="content">
                    <div class="ui statistics" style={{margin:'auto', padding:0, display:'flex', justifyContent:"center"}}>
                        <div class="purple statistic">
                            <div class="value">
                            {data.total_cases - data.total_recoveries - data.total_fatalities}
                            </div>
                            <div class="label" style={{fontSize:"1.2rem"}}>
                                Total Active
                            </div>
                        </div>
                        <div class="ui purple statistic">
                            <div class="value">
                            {data.change_cases - data.change_recoveries - data.change_fatalities}
                            </div>
                            <div class="label" style={{fontSize:"1.2rem"}}>
                            New Active
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header


// <p>Total Cases: {data.total_cases} <span>⬆️ {data.change_cases}</span></p>
// <p>Total Critical Cases:{data.total_criticals} <span>⬆️ {data.change_criticals}</span></p>
// <p>Total Recoveries: {data.total_recoveries} <span>⬆️ {data.change_recoveries}</span></p>
// <p>Total Fatalities: {data.total_fatalities} <span>⬆️ {data.change_fatalities}</span></p>