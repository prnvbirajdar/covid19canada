import React, {useState} from 'react'
import {mapboxKey} from '../Api/Api'
import {Popup, TileLayer, MapContainer, Marker, GeoJSON} from 'react-leaflet'
import {Icon} from 'leaflet'
import canadaData from '../../Data/newCanada.geo.json'
import './covid-map.css'
import ReactMapGL from 'react-map-gl'

function CovidMap() {
    // const [viewport, setViewport] = useState({
    //     latitude: 58.859224,
    //     longitude: -96.260852,
    //     zoom: 3,
    //     width:"100%",
    //     height:"60vh"
    // })

    const canadaStyle = {
        color:'#141414',
        weight:1,
        fillColor:'purple',
        fillOpacity:0.5
    }

    console.log(canadaData)

    const onEachProvince = (province, layer)=>{
        const provinceName = province.properties.NAME
        layer.bindPopup(provinceName)

        layer.on({
            mouseover: (event)=>{
                layer.openTooltip()
               event.target.setStyle({
                   fillColor: 'yellow',
               })
            },
            mouseout: (event)=>{
                layer.closeTooltip()
               event.target.setStyle({
                   fillColor: 'purple',
               })
            },
        })
    }

    return (
        <React.Fragment>
            <MapContainer center={[61.938950,-98.964961]} zoom={2.5} scrollWheelZoom={false}>
                
                <GeoJSON style={canadaStyle} data={canadaData.features} onEachFeature={onEachProvince}/>
            </MapContainer>



           
        </React.Fragment>
    )
}

export default CovidMap



// <ReactMapGL 
// {...viewport} 
// mapboxApiAccessToken={mapboxKey}
// onViewportChange={(viewport)=>setViewport(viewport)}
// mapStyle="mapbox://styles/cg709/cki6bfur32hye19o47s7r367b"></ReactMapGL>

// <TileLayer
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />



//  <Marker position={[56.130367, -106.346771]}>
//                     <Popup>
//                         A pretty CSS3 popup. <br /> Easily customizable.
//                     </Popup>
//                 </Marker>