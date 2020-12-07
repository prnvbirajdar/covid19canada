import axios from 'axios'

// Axios Create Instance
const instance = axios.create({ 
    baseURL: "https://api.covid19tracker.ca",  
})

const reportInstance = axios.create({
    baseURL:"https://api.covid19tracker.ca" 
})

// List of Country and Provinces
const provinces = [
        {Code:"AB", Name: "Alberta"},
        {Code:"BC", Name: "British Columbia"}, 
        {Code:"MB", Name: "Manitoba"}, 
        {Code:"NB", Name:"New Brunswick"},
        {Code:"NL", Name: "Newfoundland and Labrador"},
        {Code:"NS", Name: "Nova Scotia"},
        {Code:"NT", Name: "Northwest Territories"}, 
        {Code:"NU", Name: "Nunavat"},
        {Code:"ON", Name: "Ontario"},
        {Code:"PE", Name: "Prince Edward Island"},
        {Code:"QC", Name: "Quebec"}, 
        {Code:"SK", Name: "Saskatchewan"}, 
        {Code:"YT", Name: "Yukon"}
]
// MAPBOX KEY

const mapboxKey = "pk.eyJ1IjoiY2c3MDkiLCJhIjoiY2tpNW05YThmMWozbjJ0bno0MGV6MW9reCJ9.7_QzeN9el8dzcDrUg-FURw"

export {instance, reportInstance, mapboxKey, provinces}


// PROVINCE CODES


