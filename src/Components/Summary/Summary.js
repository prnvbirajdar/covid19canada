import React, { useState, useEffect } from "react";
import { instance, provinces } from "../Api/Api";
import CovidMap from "../CovidMap/CovidMap";
import TotalChart from "../../Containers/Charts/TotalChart";
import DailyChart from "../../Containers/Charts/DailyChart";
import RegionsChart from "../../Containers/Charts/RegionsChart";
import Table from "../../Containers/Table/Table";
import Header from "../Header/Header";
import UpdateDate from "../UpdateDate/UpdateDate";

import { Dimmer, Loader } from "semantic-ui-react";

function Summary() {
  //state for summary
  const [summaryInfo, setSummaryInfo] = useState(null);
  //const [loadingSummaryInfo, setLoadingSummaryInfo] = useState(true);

  //state for provincial reports
  const [reportInfo, setReportInfo] = useState(null);
 // const [loadingReportInfo, setLoadingReportInfo] = useState(true);

  //state for tables, graphs and maps
  const [basicData, setBasicData] = useState([]);
 // const [loadingBasicData, setLoadingBasicData] = useState(true);

  //api call to get the summary data
  const fetchMain = async () => {
    try {
      const response = await instance.get("/summary");
      setSummaryInfo(response);
     // setLoadingSummaryInfo(false);
    } catch (error) {
      console.error("summary error", error);
    }
  };

  useEffect(() => {
    fetchMain();
    return () => {
      fetchMain();
    };
  }, []);

  //api call to get the report data all the line graphs
  const fetchReport = async () => {
    try {
      const response = await instance.get("/reports");
      setReportInfo(response);
     // setLoadingReportInfo(false);
    } catch (error) {
      console.error("report error", error);
    }
  };

  useEffect(() => {
    fetchReport();
    return () => {
      fetchReport();
    };
  }, []);

  const fetchProvcincialData = async () => {
    try {
      //api call to get the data for the regions graph, map data and table
      //provinceURL goes over all the province array and give a promise containing urls for each province
      const provinceURL = provinces.map((p) =>
        instance.get(`/reports/province/${p.Code}`)
      );
      //resp resolves the promise and gives the array data for each province
      const resp = await Promise.all(provinceURL);
      setBasicData(resp);
     // setLoadingBasicData(false);
    } catch (error) {
      console.log(`province data error: ${error}`);
    }
  };

  useEffect(() => {
    fetchProvcincialData();
  }, []);

  return (
    <div>
      <h1
        className="province__title"
        style={{
          fontSize: "2.5rem",
          marginTop: "5.5rem",
          padding: "0.75rem 0 0",
          textAlign: "center",
        }}
      >
        COVID-19 Data for Canada
      </h1>

      {!summaryInfo ? (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      ) : (
        <>
          <Header data={summaryInfo?.data?.data[0]} />
          <UpdateDate date={summaryInfo?.data?.last_updated} />
        </>
      )}
      {!reportInfo && !basicData ? (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      ) : (
        <>
          <div className="ui four column centered stackable grid container item__size">
            <TotalChart className="column" report={reportInfo?.data?.data} />

            <DailyChart className="column" report={reportInfo?.data?.data} />
          </div>
          <div className="ui four column centered stackable grid container item__size">
            <RegionsChart className="column" basicData={basicData} />
            <CovidMap
              className="column"
              basicData={basicData}
              provinces={provinces}
            />
          </div>
          <div className="ui four column centered stackable grid container item__size">
            <Table
              basicData={basicData}
              provinces={provinces}
              className="column"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Summary;
