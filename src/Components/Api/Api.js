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
        {Code:"AB", coordinates: [55.078367, -114.581950], Name: "Alberta"},
        {Code:"BC", coordinates: [54.622978, -125.135867], Name: "British Columbia"}, 
        {Code:"MB", coordinates: [54.977614, -97.695682], Name: "Manitoba"}, 
        {Code:"NB", coordinates: [45.945278, -66.666667], Name:"New Brunswick"},
        {Code:"NL", coordinates: [48.516604, -56.007709], Name: "Newfoundland and Labrador"},
        {Code:"NS", coordinates: [44.646244, -63.573566], Name: "Nova Scotia"},
        {Code:"NT", coordinates: [64.396938, -119.946857], Name: "Northwest Territories"}, 
        {Code:"NU", coordinates: [65.730626, -94.793355], Name: "Nunavat"},
        {Code:"ON", coordinates: [51.069017, -85.646627], Name: "Ontario"},
        {Code:"PE", coordinates: [46.240278, -63.134722], Name: "Prince Edward Island"},
        {Code:"QC", coordinates: [53.435719, -71.926534], Name: "Quebec"}, 
        {Code:"SK", coordinates: [54.876607, -105.523171], Name: "Saskatchewan"}, 
        {Code:"YT", coordinates: [63.273182, -135.337987], Name: "Yukon"}
]
// MAPBOX KEY

const mapboxKey = "pk.eyJ1IjoiY2c3MDkiLCJhIjoiY2tpNW05YThmMWozbjJ0bno0MGV6MW9reCJ9.7_QzeN9el8dzcDrUg-FURw"

export {instance, reportInstance, mapboxKey, provinces}


// PROVINCE CODES


