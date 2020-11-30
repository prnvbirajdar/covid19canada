import axios from 'axios'

// Axios Create Instance
const instance = axios.create({ 
    baseURL: "https://api.covid19tracker.ca",  
})

const reportInstance = axios.create({
    baseURL:"https://api.covid19tracker.ca",
        params: {
            fill_dates:true,
        } 
})

// const provinces = {
//         {NL},
//         {PE},
//         {NS},
//         {NB},
//         {ON},
//         {QC}, 
//         {MB}, 
//         {AB},
//         {BC}, 
//         {SK}, 
//         {YT},
//         {NT}, 
//         {NU}
// }

export {instance, reportInstance}


// PROVINCE CODES


