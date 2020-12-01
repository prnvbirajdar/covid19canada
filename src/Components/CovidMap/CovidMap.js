import React, {useState} from 'react'
import {mapboxKey} from '../Api/Api'
// import './covid-map.css'
// import {Popup, TileLayer, MapContainer, Marker, GeoJSON} from 'react-leaflet'
// import {Icon} from 'leaflet'
// import canadaData from '../../Data/canada.json'

import ReactMapGL from 'react-map-gl'

function CovidMap() {
    const [viewport, setViewport] = useState({
        latitude: 56.130367,
        longitude: -106.346771,
        zoom: 2,
        width:"100%",
        height:"60vh"
    })


    return (
        <div>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={mapboxKey}
                onViewportChange={(viewport)=>setViewport(viewport)}
                mapStyle="mapbox://styles/cg709/cki5nad1m2r4b19qnk5tiva6g"></ReactMapGL>
            
        </div>
    )
}

export default CovidMap


// <MapContainer center={[61.938950,-98.964961]} zoom={2.5} scrollWheelZoom={false}>
//                 <TileLayer
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={[56.130367, -106.346771]}>
//                     <Popup>
//                         A pretty CSS3 popup. <br /> Easily customizable.
//                     </Popup>
//                 </Marker>
//             </MapContainer>