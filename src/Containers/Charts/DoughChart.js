import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { provinces } from "../../Components/Api/Api";

function DoughChart({ basicData }) {
  //get the data array from the main object
  const lData = basicData.map((e) => e.data.data);

  //get the latest cases from the last array
  let lastData = lData.map((e) => e[e.length - 1]);

  //looped over all the object of lastData array and added name of each province.
  for (let i = 0; i < lastData.length; i++) {
    lastData[i].name = provinces[i].Name;
  }

  const abData = lastData[0];
  const bcData = lastData[1];
  const mbData = lastData[2];
  const nbData = lastData[3];
  const nlData = lastData[4];
  const nsData = lastData[5];
  const ntData = lastData[6];
  const nuData = lastData[7];
  const onData = lastData[8];
  const peData = lastData[9];
  const qcData = lastData[10];
  const skData = lastData[11];
  const ytData = lastData[12];

  const prairieCases =
    abData.total_cases + mbData.total_cases + skData.total_cases;
  const prairieFatalities =
    abData.total_fatalities + mbData.total_fatalities + skData.total_fatalities;
  const prairieRecoveries =
    abData.total_recoveries + mbData.total_recoveries + skData.total_recoveries;
  const prairieHospitalizations =
    abData.total_hospitalizations +
    mbData.total_hospitalizations +
    skData.total_hospitalizations;

  const centralCases = onData.total_cases + qcData.total_cases;
  const centralFatalities = onData.total_fatalities + qcData.total_fatalities;
  const centralRecoveries = onData.total_recoveries + qcData.total_recoveries;
  const centralHospitalizations =
    onData.total_hospitalizations + qcData.total_hospitalizations;

  const northernCases =
    ytData.total_cases + ntData.total_cases + nuData.total_cases;
  const northernFatalities =
    ytData.total_fatalities + ntData.total_fatalities + nuData.total_fatalities;
  const northernRecoveries =
    ytData.total_recoveries + ntData.total_recoveries + nuData.total_recoveries;
  const northernHospitalizations =
    ytData.total_hospitalizations +
    ntData.total_hospitalizations +
    nuData.total_hospitalizations;

  const pacificCases = bcData.total_cases;
  const pacificFatalities = bcData.total_fatalities;
  const pacificRecoveries = bcData.total_recoveries;
  const pacificHospitalizations = bcData.total_hospitalizations;

  const atlanticCases =
    nlData.total_cases +
    peData.total_cases +
    nsData.total_cases +
    nbData.total_cases;
  const atlanticFatalities =
    nlData.total_fatalities +
    peData.total_fatalities +
    nsData.total_fatalities +
    nbData.total_fatalities;
  const atlanticRecoveries =
    nlData.total_recoveries +
    peData.total_recoveries +
    nsData.total_recoveries +
    nbData.total_recoveries;
  const atlanticHospitalizations =
    nlData.total_hospitalizations +
    peData.total_hospitalizations +
    nsData.total_hospitalizations +
    nbData.total_hospitalizations;

  return (
    <div className="map__container">
      <div className="ui card ">
        <div className="content">
          <div className="header">Regional COVID-19 Count</div>
        </div>
        <div className="content">
          <Bar
            data={{
              labels: [
                "Central Region",
                "Prairie Region",
                "Pacific Region",
                "Atlantic Region",
                "Northern Region",
              ],
              datasets: [
                {
                  label: "Cases",
                  data: [
                    centralCases,
                    prairieCases,
                    pacificCases,
                    atlanticCases,
                    northernCases,
                  ],
                  backgroundColor: "rgba(39, 39, 223, 0.35)",
                  borderColor: "rgba(39, 39, 223, 1)",
                  borderWidth: 2,
                },
                {
                  label: "Deaths",
                  data: [
                    centralFatalities,
                    prairieFatalities,
                    pacificFatalities,
                    atlanticFatalities,
                    northernFatalities,
                  ],
                  backgroundColor: "rgba(222, 79, 79, 0.35)",
                  borderColor: "rgba(222, 79, 79, 1)",
                  borderWidth: 2,
                  hidden: true,
                },
                {
                  label: "Recoveries",
                  data: [
                    centralRecoveries,
                    prairieRecoveries,
                    pacificRecoveries,
                    atlanticRecoveries,
                    northernRecoveries,
                  ],
                  backgroundColor: "rgba(36, 219, 36, 0.35)",
                  borderColor: "rgba(36, 219, 36, 1)",
                  borderWidth: 2,
                  hidden: true,
                },
                {
                  label: "Hospitalizations",
                  data: [
                    centralHospitalizations,
                    prairieHospitalizations,
                    pacificHospitalizations,
                    atlanticHospitalizations,
                    northernHospitalizations,
                  ],
                  backgroundColor: "rgba(230, 166, 47,0.354)",
                  borderColor: "rgba(230, 166, 47, 1)",
                  borderWidth: 2,
                  hidden: true,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              title: {
                display: false,
                text: "Regioncal Cases",
              },
              legend: {
                labels: {
                  fontSize: 11,
                  usePointStyle: true,
                  padding: 15,
                },
              },
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      maxTicksLimit: 6,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DoughChart;

// <Doughnut
//         data={{
//           labels: names,
//           datasets: [
//             {
//               label: "Cases",
//               data: total,
//               backgroundColor: [
//                 "rgba(255, 99, 132, 0.4)",
//                 "rgba(68, 162, 23, 0.4)",
//                 "rgba(255, 206, 86, 0.4)",
//                 "rgba(75, 192, 192, 0.4)",
//                 "rgba(153, 102, 255, 0.4)",
//                 "rgba(255, 159, 64, 0.4)",
//                 "rgba(128, 0, 0, 0.4)",
//                 "rgba(0, 0, 128, 0.4)",
//                 "rgba(170, 110, 40, 0.4)",
//                 "rgba(136, 128, 128, 0.4)",
//                 "rgba(250, 2, 9, 0.4)",
//                 "rgba(145, 30, 180, 0.4)",
//                 "rgba(170, 255, 9, 0.4)",
//               ],
//               borderColor: [
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(68, 162, 23, 1)",
//                 "rgba(255, 206, 86, 1)",
//                 "rgba(75, 192, 192, 1)",
//                 "rgba(153, 102, 255, 1)",
//                 "rgba(255, 159, 64, 1)",
//                 "rgba(128, 0, 0, 1)",
//                 "rgba(0, 0, 128, 1)",
//                 "rgba(170, 110, 40, 1)",
//                 "rgba(136, 128, 128, 1)",
//                 "rgba(250, 2, 9, 1)",
//                 "rgba(145, 30, 180, 1)",
//                 "rgba(70, 255, 9, 1)",
//               ],
//               borderWidth: 1,
//             },
//           ],
//         }}
//         options={{
//           responsive: true,
//           legend: {
//             position: "left",
//           },
//           cutoutPercentag: 50,
//         }}
//       />
