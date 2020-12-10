import React, { useState, useEffect } from "react";
import { instance, provinces } from "../Api/Api";
import CovidMap from "../CovidMap/CovidMap";
import TotalChart from "../../Containers/Charts/TotalChart";
import DailyChart from "../../Containers/Charts/DailyChart";
import RegionsChart from "../../Containers/Charts/RegionsChart";
import Table from "../../Containers/Table/Table";
import Header from "../Header/Header";
import "./summary.css";

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
        <div className="ui four column centered stackable grid container">
          <CovidMap
            className="column"
            basicData={basicData}
            provinces={provinces}
          />
          <TotalChart className="column" report={report} />
        </div>
        <div className="ui four column centered stackable grid container">
          <DailyChart className="column" report={report} />
          <RegionsChart className="column" basicData={basicData} />
        </div>
        <div className="ui four column centered stackable grid container">
          <Table
            basicData={basicData}
            provinces={provinces}
            className="column"
          />
        </div>
      </div>
    )
  );
}

export default Summary;

// <div>
// <div style={{ padding: "0.5rem 0 2rem 1rem", marginTop: "6rem" }}>
//   <b>Last Updated: {date}</b>
// </div>
// <Header data={data} />
// <div className="summary__flex">
//   <CovidMap
//     basicData={basicData}
//     provinces={provinces}
//     className="flex__items"
//   />
//   <TotalChart report={report} className="flex__items" />
// </div>
// <div className="summary__flex ">
//   <DailyChart report={report} className="flex__items" />
//   <RegionsChart basicData={basicData} className="flex__items" />
// </div>
// <Table
//   basicData={basicData}
//   provinces={provinces}
//   className="flex__items"
// />
// </div>
