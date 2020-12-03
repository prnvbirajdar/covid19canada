import React from 'react'
import { Line } from 'react-chartjs-2';

function DailyCases({report}) {


    const date = report.map(d=>d.date)
    const total = report.map(t=>t.change_cases)
    const tests = report.map(t=>t.change_tests)
    const recoveries = report.map(t=>t.change_recoveries)
    const fatalities = report.map(t=>t.change_fatalities)
    const criticals = report.map(t=>t.change_critical)
    const hospitalizations = report.map(t=>t.change_hospitalizations)
    const active =  report.map(t=>(t.change_cases - t.change_recoveries - t.change_fatalities))

console.log(total);

//     change_cases: null
// change_criticals: 0
// change_fatalities: null
// change_hospitalizations: 0
// change_recoveries: 0
// change_tests: 0
// change_vaccinations: null
// date: "2020-01-25"
// total_cases: 0
// total_criticals: 0
// total_fatalities: 0
// total_hospitalizations: 0
// total_recoveries: 0
// total_tests: 0





    return (
       report === [] || total === [] || recoveries === [] || criticals === [] || fatalities === [] || hospitalizations === [] || tests === []  ? null :

        <div>
            chart
            <Line 
                data={{
                    labels: date,
                    datasets:[
                    {
                        label:'Cases',
                        data: total,
                        backgroundColor:'rgba(39, 39, 223, 0.35)',
                        borderWidth: 2,
                        borderColor:'blue',
                        pointRadius:0
                    },{                         
                        label:'Deaths',
                        data: fatalities,
                        backgroundColor:'rgba(222, 79, 79, 0.35)',
                        borderWidth: 2,
                        borderColor:'red',
                        pointRadius:0,
                        hidden: true
                    },{                         
                        label:'Recoveries ',
                        data: recoveries,
                        backgroundColor:'rgba(36, 219, 36, 0.35)',
                        borderWidth: 2,
                        borderColor:'green',
                        pointRadius:0,
                        hidden: true
                    },{
                        label:'Active',
                        data: active,
                        backgroundColor:'rgba(214, 42, 214, 0.35)',
                        borderWidth: 2,
                        borderColor:'purple',
                        pointRadius:0,
                        hidden: true,
                    },{                         
                        label:'Hospitalizations',
                        data: hospitalizations,
                        backgroundColor:"rgba(230, 166, 47, 0.35)",
                        borderWidth: 2,
                        borderColor:'orange',
                        pointRadius:0,
                        hidden: true,
                    }
                ] 
                }} 

                options={{
                    maintainAspectRatio:false,
                    responsive: true,
                    title: {
                        display: false,
                        text: "Cumulative Cases"
                    },
                    scales: {
                        xAxes: [{
                          type: 'time',
                          time: {
                            displayFormats: {
                              'month': 'MMM YY'
                            }
                          },
                          ticks:{
                              beginAtZero: true,
                              maxTicksLimit:8
                          },
                          gridLines: {
                            display:false
                        }
                        }],
                        yAxes: [{
                            ticks:{
                                beginAtZero: true,
                                maxTicksLimit:7,
                                suggestedMin: 0
                            }
                        }],
                    },
                }}  
            />

        </div>
    )
}

export default DailyCases





// {
//     label:'total tests',
//     data: tests,
//     backgroundColor:'purple',
//  },