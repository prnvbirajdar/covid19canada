import React, {useState, useEffect} from 'react'

function Table({provinces, data, basicData}) {
    const[latestData,setLatestData] = useState([])

    const [name, setName] = useState('')
    // setLatestData(recentData)

    // console.log(recentData);

//     console.log(basicData);

//     const AB = basicData[0].data.data
// console.log(AB);

// const arrayAB = AB[AB.length -1]
// console.log(arrayAB);


// for (let i = 0; i < basicData.length; i++) {
//     const provData = basicData[i].data.data;
//     const provName = basicData[i].data.province
//     const recentData = provData[provData.length - 1]

//     // console.log(provName , provData);
//     console.log(recentData.total_cases);

//     const totalCases = recentData.total_cases
//     const totalRecoveries = recentData.total_recoveries
//     const totalDeaths = recentData.total_fatalities
//     const totalHospitalizations = recentData.total_hospitalizations
//     const totalTests = recentData.total_tests

//     console.log(totalCases);

// }

useEffect(()=>{
    basicData.forEach((e,i) => {
        const provName = basicData[i].data.province
        setName(provName);
        console.log(provName);

    });
    
},[basicData, name])


    return (

        <div>
            <table class="ui table striped">
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

                  

                    <tr>
                        <td data-label="Province">{name}</td>
                        <td data-label="Cases">26</td>
                        <td data-label="Deaths">Engineer</td>
                        <td data-label="Active">Engineer</td>
                        <td data-label="Recoveries">Engineer</td>
                        <td data-label="Hospitalizations">Engineer</td>
                        <td data-label="Cases">Engineer</td>
                    </tr>
                    
                </thead>
                <tbody>    
                    
                </tbody>
            </table>
        </div>
    )
}

export default Table


// {provinces.map(p=>{
//     return (
//         <tr>
//             <td data-label="Province">{p.Name}</td>
//             <td data-label="Cases">{p.Name}</td>

//         </tr>
//     )
// })}