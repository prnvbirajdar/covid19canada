import React, { useState, useEffect } from "react";
import TotalChart from "../../Containers/Charts/TotalChart";
import DailyChart from "../../Containers/Charts/DailyChart";
import { instance, provinces } from "../Api/Api";
import Header from "../Header/Header";
import "./provinces.css";

function Reports({ match }) {
  const [report, setReport] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance
        .get(`/reports${match.url}`)
        .catch((err) => console.log(`province error: ${err}`));
      setReport(response.data.data);

      return response;
    };
    fetchData();
  }, [match.url]);

  const latestReport = report[report.length - 1];

  const selectedProvince = provinces.map((p) =>
    p.Code === match.params.code ? p.Name : null
  );

  return (
    <div>
      <h2 className="province__title">
        COVID-19 Data for <br /> {selectedProvince}
      </h2>
      <Header data={latestReport} />
      <TotalChart report={report} selectedProvince={selectedProvince} />
      <DailyChart report={report} selectedProvince={selectedProvince} />
    </div>
  );
}

export default Reports;
