import React from "react";
import { TileLayer, MapContainer, CircleMarker, Tooltip } from "react-leaflet";
import "./covid-map.css";

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

  return (
    <div className="map__container">
      <div className="ui card ">
        <div className="content">
          <div className="header">Canada COVID-19 Cases Provincial Map</div>
        </div>
        <div className="content">
          <MapContainer
            center={[59.933, -99.035684]}
            zoom={3.5}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://api.mapbox.com/styles/v1/cg709/cki6bfur32hye19o47s7r367b/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2c3MDkiLCJhIjoiY2tpNW05YThmMWozbjJ0bno0MGV6MW9reCJ9.7_QzeN9el8dzcDrUg-FURw" />

            {lastData.map((p) => {
              return (
                <CircleMarker
                  center={[p.coordinates[0], p.coordinates[1]]}
                  radius={
                    p.total_cases < 200
                      ? 12 * Math.log(p.total_cases / 10)
                      : 8 * Math.log(p.total_cases / 10)
                  }
                  fillOpacity={p.total_cases < 500 ? 0.3 : 0.6}
                  stroke={true}
                  weight="2"
                  color="red"
                >
                  <Tooltip direction="right" opacity={1}>
                    <span>
                      <b>{p.name}</b>
                    </span>
                    <br />
                    <span>
                      Active Cases:{" "}
                      {p.total_cases - p.total_recoveries - p.total_fatalities}
                    </span>{" "}
                    <br />
                    <span>Total Cases: {p.total_cases}</span> <br />
                    <span>Deaths: {p.total_fatalities}</span> <br />
                    <span>Hospitalized: {p.total_hospitalizations}</span> <br />
                    <span>Recovered: {p.total_recoveries}</span> <br />
                    <span>Critical: {p.total_criticals}</span> <br />
                  </Tooltip>
                </CircleMarker>
              );
            })}
          </MapContainer>
        </div>
      </div>
    </div>
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

// console.log(lastData);

// <GeoJSON
// style={canadaStyle}
// data={canadaData.features}
// onEachFeature={onEachProvince}
// />

// const canadaStyle = {
//   color: "#141414",
//   weight: 1,
//   fillColor: "purple",
//   fillOpacity: 0.3,
// };

// const onEachProvince = (province, layer) => {
//   const provinceName = province.properties.NAME;
//   layer.bindPopup(provinceName);

//   layer.on({
//     mouseover: (event) => {
//       layer.openTooltip();
//       event.target.setStyle({
//         fillColor: "yellow",
//       });
//     },
//     mouseout: (event) => {
//       layer.closeTooltip();
//       event.target.setStyle({
//         fillColor: "purple",
//       });
//     },
//   });
// };

// <div class="ui card">
//   <div class="content">
//     <div class="header">Project Timeline</div>
//   </div>
//   <div class="content">
//   <div className="map__container">
//   <MapContainer
//     center={[59.933, -99.035684]}
//     zoom={3.5}
//     scrollWheelZoom={false}
//   >
//     <TileLayer url="https://api.mapbox.com/styles/v1/cg709/cki6bfur32hye19o47s7r367b/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2c3MDkiLCJhIjoiY2tpNW05YThmMWozbjJ0bno0MGV6MW9reCJ9.7_QzeN9el8dzcDrUg-FURw" />

//     {lastData.map((p) => {
//       return (
//         <CircleMarker
//           center={[p.coordinates[0], p.coordinates[1]]}
//           radius={
//             p.total_cases < 300
//               ? 10 * Math.log(p.total_cases / 10)
//               : 8 * Math.log(p.total_cases / 10)
//           }
//           fillOpacity={p.total_cases < 500 ? 0.3 : 0.6}
//           stroke={false}
//           color="red"
//         >
//           <Tooltip direction="right" opacity={1}>
//             <span>
//               <b>{p.name}</b>
//             </span>
//             <br />
//             <span>
//               Active Cases:{" "}
//               {p.total_cases - p.total_recoveries - p.total_fatalities}
//             </span>{" "}
//             <br />
//             <span>Total Cases: {p.total_cases}</span> <br />
//             <span>Deaths: {p.total_fatalities}</span> <br />
//             <span>Hospitalized: {p.total_hospitalizations}</span> <br />
//             <span>Recovered: {p.total_recoveries}</span> <br />
//             <span>Critical: {p.total_criticals}</span> <br />
//           </Tooltip>
//         </CircleMarker>
//       );
//     })}
//   </MapContainer>
// </div>
//   </div>
// </div>


// <div className="map__container">
// <div className="ui card ">
//   <div className="content">
//     <div className="header">Canada COVID-19 Cases Provincial Map</div>
//   </div>
//   <div className="content">
//   </div>
//   </div>
//   </div>
