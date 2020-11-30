import React, {useState, useEffect} from 'react'
import {reportInstance} from '../Api/Api'

function Reports() {
    const [report, setReport] = useState([])

    useEffect(()=>{

        const fetchData = async()=>{
            const response = await reportInstance.get('./reports')
            console.log(response.data);

            console.log(response.data.data);
        }

        fetchData()

    })


    return (
        <div>
            Report
        </div>
    )
}

export default Reports
