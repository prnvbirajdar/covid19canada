import React from "react";
import { Bar } from "react-chartjs-2";
import { provinces } from "../../Components/Api/Api";

function DoughChart({ basicData }) {
  //get the data array from the main object
  const lData = basicData.map((e) => e?.data?.data);

  //get the latest cases from the last array
  let lastData = lData.map((e) => e[e.length - 1]);

  //looped over all the object of lastData array and added name of each province.
  for (let i = 0; i < lastData.length; i++) {
    lastData[i].name = provinces[i].Name;
  }

  //get individual array of each province
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

  //prairie region info
  const prairieCases =
    abData?.total_cases + mbData?.total_cases + skData?.total_cases;
  const prairieFatalities =
    abData?.total_fatalities +
    mbData?.total_fatalities +
    skData?.total_fatalities;
  const prairieRecoveries =
    abData?.total_recoveries +
    mbData?.total_recoveries +
    skData?.total_recoveries;
  const prairieHospitalizations =
    abData?.total_hospitalizations +
    mbData?.total_hospitalizations +
    skData?.total_hospitalizations;
  const prairieVaccinated =
    abData?.total_vaccinations +
    mbData?.total_vaccinations +
    skData?.total_vaccinations;

  //central region info
  const centralCases = onData?.total_cases + qcData?.total_cases;
  const centralFatalities = onData?.total_fatalities + qcData?.total_fatalities;
  const centralRecoveries = onData?.total_recoveries + qcData?.total_recoveries;
  const centralHospitalizations =
    onData?.total_hospitalizations + qcData?.total_hospitalizations;
  const centralVaccinated =
    onData?.total_vaccinations + qcData?.total_vaccinations;

  //northern region info
  const northernCases =
    ytData?.total_cases + ntData?.total_cases + nuData?.total_cases;
  const northernFatalities =
    ytData?.total_fatalities +
    ntData?.total_fatalities +
    nuData?.total_fatalities;
  const northernRecoveries =
    ytData?.total_recoveries +
    ntData?.total_recoveries +
    nuData?.total_recoveries;
  const northernHospitalizations =
    ytData?.total_hospitalizations +
    ntData?.total_hospitalizations +
    nuData?.total_hospitalizations;
  const northernVaccinated =
    ytData?.total_vaccinations +
    ntData?.total_vaccinations +
    nuData?.total_vaccinations;

  //pacific region info
  const pacificCases = bcData?.total_cases;
  const pacificFatalities = bcData?.total_fatalities;
  const pacificRecoveries = bcData?.total_recoveries;
  const pacificHospitalizations = bcData?.total_hospitalizations;
  const pacificVaccinated = bcData?.total_vaccinations;

  //atlantic region info
  const atlanticCases =
    nlData?.total_cases +
    peData?.total_cases +
    nsData?.total_cases +
    nbData?.total_cases;
  const atlanticFatalities =
    nlData?.total_fatalities +
    peData?.total_fatalities +
    nsData?.total_fatalities +
    nbData?.total_fatalities;
  const atlanticRecoveries =
    nlData?.total_recoveries +
    peData?.total_recoveries +
    nsData?.total_recoveries +
    nbData?.total_recoveries;
  const atlanticHospitalizations =
    nlData?.total_hospitalizations +
    peData?.total_hospitalizations +
    nsData?.total_hospitalizations +
    nbData?.total_hospitalizations;
  const atlanticVaccinated =
    nlData?.total_vaccinations +
    peData?.total_vaccinations +
    nsData?.total_vaccinations +
    nbData?.total_vaccinations;

  return (
    basicData && (
      <section className="ui card ">
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
                {
                  label: "Vaccinations",
                  data: [
                    centralVaccinated,
                    prairieVaccinated,
                    pacificVaccinated,
                    atlanticVaccinated,
                    northernVaccinated,
                  ],
                  backgroundColor: "rgba(20, 20, 20,0.354)",
                  borderColor: "rgba(20, 20, 20, 1)",
                  borderWidth: 2,
                  hidden: true,
                },
              ],
            }}
            options={{
              width: "100%",
              height: "50vh",
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
      </section>
    )
  );
}

export default DoughChart;
