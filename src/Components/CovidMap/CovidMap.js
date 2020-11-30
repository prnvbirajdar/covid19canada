import React from 'react'
import './covid-map.css'
import {Popup, TileLayer, MapContainer, Marker} from 'react-leaflet'
import {Icon} from 'leaflet'

function CovidMap() {
    return (
        <div>
            <MapContainer center={[56.130367, -106.346771]} zoom={3} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[56.130367, -106.346771]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
        </MapContainer>
        </div>
    )
}

export default CovidMap
