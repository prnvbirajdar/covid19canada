import React, {useState, useEffect} from 'react'
import {instance} from '../Api/Api'
import CovidMap from '../CovidMap/CovidMap'
import TotalChart from '../../Containers/Charts/TotalChart'
import DailyChart from '../../Containers/Charts/DailyChart'

function Summary() {
    const [data,setData] = useState({})
    const [date,setDate] = useState('')

    const [report, setReport] = useState([])

    const fetchData = async ()=>{
        const response = await instance.get('/summary')
            .catch(err=>console.log(`summary error: ${err}`))
        const dataArray = response.data.data


        const res = await instance.get(`/reports`)
            .catch(err=>console.log(`province error: ${err}`))

        setReport(res.data.data)

        setData(dataArray[0])
        setDate(response.data.last_updated)

        return{ response, res}
    }

    useEffect (()=>{
        fetchData()
    },[])

    return (
        data &&
            <div>
                <h3>Last updated: {date}</h3>
                <p>Total Cases: {data.total_cases} <span>⬆️ {data.change_cases}</span></p>
                <p>Total Critical Cases:{data.total_criticals} <span>⬆️ {data.change_criticals}</span></p>
                <p>Total Recoveries: {data.total_recoveries} <span>⬆️ {data.change_recoveries}</span></p>
                <p>Total Fatalities: {data.total_fatalities} <span>⬆️ {data.change_fatalities}</span></p>
                <CovidMap/>
                <TotalChart report={report}/>
                <DailyChart report={report}/>
            </div>
    )
}


export default Summary


























// function Summary() {
//     const [data,setData] = useState([])
//     const [date,setDate] = useState('')

//     const fetchData = async ()=>{
//         const response = await reportInstance.get('/reports')
//         const dataArray = await response.data.data



//         // instance.get('/summary')
//         //     .then(res=> setData(res.data.data))
//         //     .catch(err=>console.log(err))

//         setData(dataArray)
//         setDate(response.data.date)

//     }

//     useEffect (()=>{
//         fetchData()
//     },[])

//     console.log(data);

//     const latestReport = data[data.length - 1]

//     console.log(latestReport);

//     if(latestReport === null || undefined) return null 

//     return (
//        'hi'
//     )
// }


// export default Summary









// function Summary() {
//     const [date,setDate] = useState('')
//     const [totalCases,setTotalCases] = useState('')
//     const [totalCriticals, setTotalCriticals] = useState('')
//     const [totalFatalities, setTotalFatalities] = useState('')
//     const [totalRecoveries, setTotalRecoveries] = useState('')

//     const [changeCases, setChangeCases] = useState('')
//     const [changeCriticals, setChangeCriticals] = useState('')
//     const [changeFatalities, setChangeFatalities] = useState('')
//     const [changeRecoveries, setChangeRecoveries] = useState('')


//     useEffect (()=>{
//         const fetchData = async ()=>{
//             const response = await instance.get('/summary')
//             const dataArray = response.data.data

//             setDate(response.data.last_updated)
//             setTotalCases(dataArray[0].total_cases)
//             setTotalCriticals(dataArray[0].total_criticals)
//             setTotalFatalities(dataArray[0].total_fatalities)
//             setTotalRecoveries(dataArray[0].total_recoveries)

//             setChangeCases(dataArray[0].change_cases)
//             setChangeCriticals(dataArray[0].change_criticals)
//             setChangeFatalities(dataArray[0].change_fatalities)
//             setChangeRecoveries(dataArray[0].change_recoveries)
//         }
    
//         fetchData()
//     },[])

  
//     return (
//        <div>
//             <p>Last updated: {date}</p>
//             <p>Total Cases: {totalCases} <span>⬆️ {changeCases}</span></p>
//             <p>Total Critical Cases: {totalCriticals} <span>⬆️ {changeCriticals}</span></p>
//             <p>Total Recoveries: {totalRecoveries} <span>⬆️ {changeRecoveries}</span></p>
//             <p>Total Fatalities: {totalFatalities} <span>⬆️ {changeFatalities}</span></p>
//             <CovidMap/>
//        </div>
//     )
// }

