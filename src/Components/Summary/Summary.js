import React, {useState, useEffect} from 'react'
import {instance, provinces} from '../Api/Api'
import CovidMap from '../CovidMap/CovidMap'
import TotalChart from '../../Containers/Charts/TotalChart'
import DailyChart from '../../Containers/Charts/DailyChart'
import DoughChart from '../../Containers/Charts/DoughChart'


function Summary() {
    const [data,setData] = useState({})
    const [date,setDate] = useState('')

    const [report, setReport] = useState([])

    const [provinceData, setProvinceData] = useState([])

    const fetchData = async ()=>{
        //api call to get the main data
        const response = await instance.get('/summary')
            .catch(err=>console.log(`summary error: ${err}`))

        //api call to get the data for all the line graphs
        const res = await instance.get(`/reports`)
            .catch(err=>console.log(`reports error: ${err}`))

        //api call to get the data for the doughnut graph, map data and table
        //provinceURL goes over all the province array and give a promise containing urls for each province
        const provinceURL = provinces.map(p => instance.get(`/reports/province/${p.Code}`))

        
        //await instance.get(`/reports/province/${provinces.map(p=>p.Code)}`)
        
        //resp resolves the promise and gives the array data for each province
        const resp = await Promise.all(provinceURL)
            .catch(err=>console.log(`province data error: ${err}`))

        // const albertaData = resp[0].data.data
        // console.log(albertaData);

        // if(!resp){
        //     return null
        // } else {

            for (let i = 0; i < resp.length; i++) {
                const provData = resp[i].data.data;
                const provName = resp[i].data.province
                setProvinceData(provData)
            }
        // }

        
        // resp.forEach(i=>{
        //     const provData = resp[i].data.data;
        //     const provName = resp[i].data.province
        //     console.log(provName);
        //     console.log(provData);
        // })


        setReport(res.data.data)
        setData(response.data.data[0])
        setDate(response.data.last_updated)
        // setProvinceData(provData)

        return { response, res, resp}
    }

    useEffect (()=>{
        fetchData()
    },[])

    const latestData = provinceData[provinceData.length - 1]

    console.log(latestData);

    
    return (
        data && report && date && provinceData &&
            <div>
                <h3>Last updated: {date}</h3>
                <p>Total Cases: {data.total_cases} <span>⬆️ {data.change_cases}</span></p>
                <p>Total Critical Cases:{data.total_criticals} <span>⬆️ {data.change_criticals}</span></p>
                <p>Total Recoveries: {data.total_recoveries} <span>⬆️ {data.change_recoveries}</span></p>
                <p>Total Fatalities: {data.total_fatalities} <span>⬆️ {data.change_fatalities}</span></p>
                <CovidMap/>
                <TotalChart report={report}/>
                <DailyChart report={report}/>
                <DoughChart/>
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

