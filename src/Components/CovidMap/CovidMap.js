import React, {useState} from 'react'
import {mapboxKey} from '../Api/Api'
// import './covid-map.css'
// import {Popup, TileLayer, MapContainer, Marker, GeoJSON} from 'react-leaflet'
// import {Icon} from 'leaflet'
// import canadaData from '../../Data/canada.json'

import ReactMapGL from 'react-map-gl'

// latitude: 56.130367,
// longitude: -106.346771,

function CovidMap() {
    const [viewport, setViewport] = useState({
        latitude: 58.859224,
        longitude: -96.260852,
        zoom: 3,
        width:"100%",
        height:"60vh"
    })


    return (
        <React.Fragment>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={mapboxKey}
                onViewportChange={(viewport)=>setViewport(viewport)}
                mapStyle="mapbox://styles/cg709/cki6bfur32hye19o47s7r367b"></ReactMapGL>
        </React.Fragment>
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