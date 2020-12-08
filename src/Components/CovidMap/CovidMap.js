import React from "react";
import {
  Popup,
  TileLayer,
  MapContainer,
  Marker,
  GeoJSON,
  CircleMarker,
  Tooltip,
} from "react-leaflet";
import { Icon } from "leaflet";
import canadaData from "../../Data/newCanada.geo.json";
import "./covid-map.css";

// <GeoJSON
// style={canadaStyle}
// data={canadaData.features}
// onEachFeature={onEachProvince}
// />

function CovidMap({ basicData, provinces }) {
  //get the data array from the main object
  const lData = basicData.map((e) => e.data.data);

  //get the latest cases from the last array
  let lastData = lData.map((e) => e[e.length - 1]);

  //looped over all the object of lastData array and added name and coordinates of each province.
  for (let i = 0; i < lastData.length; i++) {
    lastData[i].name = provinces[i].Name;
    lastData[i].coordinates = provinces[i].coordinates;
  }

  console.log(lastData);

  const canadaStyle = {
    color: "#141414",
    weight: 1,
    fillColor: "purple",
    fillOpacity: 0.3,
  };

  const onEachProvince = (province, layer) => {
    const provinceName = province.properties.NAME;
    layer.bindPopup(provinceName);

    layer.on({
      mouseover: (event) => {
        layer.openTooltip();
        event.target.setStyle({
          fillColor: "yellow",
        });
      },
      mouseout: (event) => {
        layer.closeTooltip();
        event.target.setStyle({
          fillColor: "purple",
        });
      },
    });
  };

  return (
    <React.Fragment>
      <MapContainer
        center={[59.933, -101.821377]}
        zoom={3.5}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/cg709/cki6bfur32hye19o47s7r367b/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2c3MDkiLCJhIjoiY2tpNW05YThmMWozbjJ0bno0MGV6MW9reCJ9.7_QzeN9el8dzcDrUg-FURw" />

        {lastData.map((p) => {
          return (
            <CircleMarker
              center={[p.coordinates[0], p.coordinates[1]]}
              radius={8 * Math.log(p.total_cases / 10)}
              fillOpacity={0.3}
              stroke={false}
              color="red"
              weight="3"
              onMouseOver={(e) => e.target.setStyle({ fillColor: "green" })}
              onMouseOut={(e) => e.target.setStyle({ fillColor: "blue" })}
            >
              <Tooltip direction="bottom" offset={[-8, -2]} opacity={1}>
                <span>
                  {p.Name + ": " + "Population" + " " + city["population"]}
                </span>
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </React.Fragment>
  );
}

export default CovidMap;

// <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

// <Marker position={[56.130367, -106.346771]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>

//         <Marker position={[53.933270, -116.576508]}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>

// <TileLayer
// attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// />;
