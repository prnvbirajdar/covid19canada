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
        {Code:"AB", coordinates: [53.5344445, -113.4902778], Name: "Alberta"},
        {Code:"BC", coordinates: [48.428333, -123.364722], Name: "British Columbia"}, 
        {Code:"MB", coordinates: [49.884444, -97.146389], Name: "Manitoba"}, 
        {Code:"NB", coordinates: [45.945278, -66.666667], Name:"New Brunswick"},
        {Code:"NL", coordinates: [47.482197, -52.797069], Name: "Newfoundland and Labrador"},
        {Code:"NS", coordinates: [44.646244, -63.573566], Name: "Nova Scotia"},
        {Code:"NT", coordinates: [62.4536, -114.37], Name: "Northwest Territories"}, 
        {Code:"NU", coordinates: [63.75, -68.516667], Name: "Nunavat"},
        {Code:"ON", coordinates: [43.7417, -79.3733], Name: "Ontario"},
        {Code:"PE", coordinates: [46.240278, -63.134722], Name: "Prince Edward Island"},
        {Code:"QC", coordinates: [46.813819, -71.207997], Name: "Quebec"}, 
        {Code:"SK", coordinates: [50.4548389, -104.6066083], Name: "Saskatchewan"}, 
        {Code:"YT", coordinates: [60.7242144, -135.0560981], Name: "Yukon"}
]
// MAPBOX KEY

const mapboxKey = "pk.eyJ1IjoiY2c3MDkiLCJhIjoiY2tpNW05YThmMWozbjJ0bno0MGV6MW9reCJ9.7_QzeN9el8dzcDrUg-FURw"

export {instance, reportInstance, mapboxKey, provinces}


// PROVINCE CODES


