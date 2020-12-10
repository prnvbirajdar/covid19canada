import React from "react";
// import { provinces} from '../../Components/Api/Api'

function Table({ basicData, provinces }) {
  //get the data array from the main object
  const lData = basicData.map((e) => e.data.data);

  //get the latest cases from the last array
  let lastData = lData.map((e) => e[e.length - 1]);

  //looped over all the object of lastData array and added name of each province.
  for (let i = 0; i < lastData.length; i++) {
    lastData[i].name = provinces[i].Name;
  }

  return (
      <div className="ui card" id="ui__card">
        <div className="content">
          <div className="header">COVID-19 Data by Province</div>
        </div>
        <div className="content " style={{ overflowX: "auto" }}>
          <table
            class="ui selectable celled table unstackable seven column"
            id="ui__table"
          >
            <thead>
              <tr>
                <th>Province</th>
                <th>Cases</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Hospitalizations</th>
                <th>Recoveries</th>
                <th>Tests</th>
              </tr>
            </thead>
            <tbody>
              {lastData.map((data) => {
                return (
                  <tr>
                    <td className="collapsing" data-label="Province">
                      <b>{data.name}</b>
                    </td>
                    <td className="collapsing" data-label="Cases">
                      {data.total_cases} <br /> (
                      {data.change_cases === null ? 0 : data.change_cases}{" "}
                      today)
                    </td>
                    <td className="collapsing" data-label="Deaths">
                      {data.total_fatalities} <br /> (
                      {data.change_fatalities === null
                        ? 0
                        : data.change_fatalities}{" "}
                      today)
                    </td>
                    <td className="collapsing" data-label="Active">
                      {data.total_cases -
                        data.total_recoveries -
                        data.total_fatalities}{" "}
                      <br />(
                      {data.change_cases -
                        data.change_recoveries -
                        data.change_fatalities ===
                      null
                        ? 0
                        : data.change_cases -
                          data.change_recoveries -
                          data.change_fatalities}{" "}
                      today)
                    </td>
                    <td className="collapsing" data-label="Recoveries">
                      {data.total_recoveries} <br /> (
                      {data.change_recoveries === null
                        ? 0
                        : data.change_recoveries}{" "}
                      today)
                    </td>
                    <td className="collapsing" data-label="Hospitalizations">
                      {data.total_hospitalizations} <br /> (
                      {data.change_hospitalizations === null
                        ? 0
                        : data.change_hospitalizations}{" "}
                      today)
                    </td>
                    <td className="collapsing" data-label="Cases">
                      {data.total_tests} <br /> (
                      {data.change_tests === null ? 0 : data.change_tests}{" "}
                      today)
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default Table;
