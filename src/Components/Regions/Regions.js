import React, { useState, useEffect } from "react";
import RegionsDropdown from "../../Containers/RegionsDropdown/RegionsDropdown";

import TotalChart from "../../Containers/Charts/TotalChart";
import DailyChart from "../../Containers/Charts/DailyChart";
import { instance, provinces } from "../Api/Api";
import Header from "../Header/Header";
// import "./provinces.css";

function Regions({ match }) {
  //const [report, setReport] = useState([]);

  console.log(match);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await instance
  //       .get(`/reports/${match.params.code}`)
  //       .catch((err) => console.log(`province error: ${err}`));
  //     setReport(response.data.data);

  //     console.log(response);

  //     return response;
  //   };
  //   fetchData();
  // }, [match.url]);

  // const latestReport = report[report.length - 1];

  // const selectedProvince = provinces.map((p) =>
  //   p.Code === match.params.code ? p.Name : null
  // );

  return (
    <div>
      <h1
        className="province__title"
        style={{ marginTop: "5.5rem", padding: "0.75rem" }}
      >
        COVID-19 Data for {/*selectedProvince*/}
      </h1>
      {/*<Header data={latestReport} />
      <RegionsDropdown provinces={provinces} match={match} />
      <div className="ui four column centered stackable grid container item__size">
        <TotalChart
          className="column"
          report={report}
          selectedProvince={selectedProvince}
        />
        <DailyChart
          className="column"
          report={report}
          selectedProvince={selectedProvince}
        />
  </div> */}
    </div>
  );
}

export default Regions;

// function Reports({ match }) {
//   const [report, setReport] = useState([]);

//   console.log(match.params.code);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await instance
//         .get(`/reports/${match.params.code}`)
//         .catch((err) => console.log(`province error: ${err}`));
//       setReport(response.data.data);

//       console.log(response);

//       return response;
//     };
//     fetchData();
//   }, [match.url]);

//   const latestReport = report[report.length - 1];

//   const selectedProvince = provinces.map((p) =>
//     p.Code === match.params.code ? p.Name : null
//   );

//   return (
//     <div>
//       <h1
//         className="province__title"
//         style={{ marginTop: "5.5rem", padding: "0.75rem" }}
//       >
//         COVID-19 Data for {selectedProvince}
//       </h1>
//       <Header data={latestReport} />
//       <RegionsDropdown provinces={provinces} match={match} />

//       <div className="ui four column centered stackable grid container item__size">
//         <TotalChart
//           className="column"
//           report={report}
//           selectedProvince={selectedProvince}
//         />
//         <DailyChart
//           className="column"
//           report={report}
//           selectedProvince={selectedProvince}
//         />
//       </div>
//     </div>
//   );
// }
