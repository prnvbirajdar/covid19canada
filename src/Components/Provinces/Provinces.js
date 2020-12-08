import React, {useState, useEffect} from 'react'
import TotalChart from '../../Containers/Charts/TotalChart'
import DailyChart from '../../Containers/Charts/DailyChart'
import {instance} from '../Api/Api'
import Header from '../Header/Header'

function Reports({match}) {
    const [report, setReport] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await instance.get(`/reports${match.url}`)
                .catch(err=>console.log(`province error: ${err}`))
            setReport(response.data.data)

            return response
        }
        fetchData()
    },[match.url])

    const latestReport = report[report.length - 1]
   
    return (
        
       <div>
            <Header data={latestReport} />
            <TotalChart report={report}/>
            <DailyChart report={report}/>
       </div> 
    )
}

export default Reports

