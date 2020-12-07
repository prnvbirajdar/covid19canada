import React from 'react'
import { provinces} from '../../Components/Api/Api'


function Table({ basicData}) {

    const lData = basicData.map((e)=>e.data.data)

    let lastData = lData.map((e)=>e[e.length -1])

    let newData = lastData.map((e,i)=>e['name'] = (provinces[i].Name))

    return (

            <table class="ui striped celled table unstackable seven column">
                <thead>
                    <tr>
                        <th>Province</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Hospitalizations</th>
                        <th>Recoveries</th>
                        <th>Tests</th>
                    </tr>
                </thead>
                <tbody>  
                    {lastData.map(data=>{
                        return(
                            <tr>
                                <td data-label="Province">{data.name}</td>
                                <td data-label="Cases">{data.total_cases}</td>
                                <td data-label="Deaths">{data.total_fatalities}</td>
                                <td data-label="Active">{data.total_cases - data.total_recoveries - data.total_fatalities}</td>
                                <td data-label="Recoveries">{data.total_recoveries}</td>
                                <td data-label="Hospitalizations">{data.total_hospitalizations}</td>
                                <td data-label="Cases">{data.total_tests}</td>
                            </tr>  
                        )
                    })}
                </tbody>
            </table>
    )
}

export default Table
