import axios from 'axios'

// Axios Create Instance
const instance = axios.create({ 
    baseURL: "https://api.covid19tracker.ca",  
})

export default instance
