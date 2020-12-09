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
    <div className="map__container">
      <div className="ui card ">
        <div className="content">
          <div className="header">Canada COVID-19 Cases Provincial Map</div>
        </div>
        <div className="content">
          <table class="ui striped celled table unstackable seven column">
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
                      {data.total_cases}
                    </td>
                    <td className="collapsing" data-label="Deaths">
                      {data.total_fatalities}
                    </td>
                    <td className="collapsing" data-label="Active">
                      {data.total_cases -
                        data.total_recoveries -
                        data.total_fatalities}
                    </td>
                    <td className="collapsing" data-label="Recoveries">
                      {data.total_recoveries}
                    </td>
                    <td className="collapsing" data-label="Hospitalizations">
                      {data.total_hospitalizations}
                    </td>
                    <td className="collapsing" data-label="Cases">
                      {data.total_tests}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
