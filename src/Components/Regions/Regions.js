import React, { useState, useEffect } from "react";

import TotalChart from "../../Containers/Charts/TotalChart";
import DailyChart from "../../Containers/Charts/DailyChart";
import { instance } from "../Api/Api";
import Header from "../Header/Header";

function Regions({ match, location }) {
  const [report, setReport] = useState([]);

  console.log(match);

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance
        .get(`/reports${match.url}`)
        .catch((err) => console.log(`province error: ${err}`));
      setReport(response.data.data);

      console.log(response);

      return response;
    };
    fetchData();
  }, [match]);

  const latestReport = report[report.length - 1];

  console.log(location.state);

  const selectedProvince = location.state;

  return (
    <div>
      <h1
        className="province__title"
        style={{ marginTop: "5.5rem", padding: "0.75rem" }}
      >
        COVID-19 Data for {selectedProvince}
      </h1>
      <Header data={latestReport} />
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
      </div>
    </div>
  );
}

export default Regions;
