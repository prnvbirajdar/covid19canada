import React, { useState, useEffect } from "react";
import { instance, provinces } from "../Api/Api";
import CovidMap from "../CovidMap/CovidMap";
import TotalChart from "../../Containers/Charts/TotalChart";
import DailyChart from "../../Containers/Charts/DailyChart";
import DoughChart from "../../Containers/Charts/DoughChart";
import Table from "../../Containers/Table/Table";
import Header from "../Header/Header";

function Summary() {
  //state for summary
  const [data, setData] = useState({});
  const [date, setDate] = useState("");
  //state for provincial reports
  const [report, setReport] = useState([]);
  //state for tables, doughchart and maps
  const [basicData, setBasicData] = useState([]);

  const fetchData = async () => {
    //api call to get the main data
    const response = await instance
      .get("/summary")
      .catch((err) => console.log(`summary error: ${err}`));

    //api call to get the data for all the line graphs
    const res = await instance
      .get(`/reports`)
      .catch((err) => console.log(`reports error: ${err}`));

    //api call to get the data for the doughnut graph, map data and table
    //provinceURL goes over all the province array and give a promise containing urls for each province
    const provinceURL = provinces.map((p) =>
      instance.get(`/reports/province/${p.Code}`)
    );

    //resp resolves the promise and gives the array data for each province
    const resp = await Promise.all(provinceURL).catch((err) =>
      console.log(`province data error: ${err}`)
    );

    setBasicData(resp);
    setReport(res.data.data);
    setData(response.data.data[0]);
    setDate(response.data.last_updated);

    return { response, res, resp };
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    data &&
    report &&
    date &&
    basicData && (
      <div>
        <div style={{ padding: "0.5rem 0 2rem 1rem", marginTop: "6rem" }}>
          <b>Last Updated: {date}</b>
        </div>
        <Header data={data} />
        <CovidMap basicData={basicData} provinces={provinces} />
        <TotalChart report={report} />
        <DailyChart report={report} />
        <DoughChart basicData={basicData} />
        <Table basicData={basicData} provinces={provinces} />
      </div>
    )
  );
}

export default Summary;
