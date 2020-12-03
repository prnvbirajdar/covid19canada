import React, {useState, useEffect} from 'react'
import ProvinceHeader from './ProvinceHeader/ProvinceHeader'
import TotalCharts from '../../Containers/Charts/TotalCharts'
import {reportInstance} from '../Api/Api'

function Reports({match}) {
    const [report, setReport] = useState([])
    // const [latestReport, setlatestReport] = useState({})

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await reportInstance.get(`/reports${match.url}`)
                .catch(err=>console.log(`province error: ${err}`))
            setReport(response.data.data)

            return response
        }
        fetchData()
    },[match.url])

    const latestReport = report[report.length - 1]
   
    return (
        
       <div>
            <ProvinceHeader latestReport={latestReport}/>
            <TotalCharts report={report}/>
       </div> 
    )
}

export default Reports

