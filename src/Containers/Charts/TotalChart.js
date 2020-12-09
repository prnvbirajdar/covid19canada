import React from "react";
import { Line } from "react-chartjs-2";

function TotalCases({ report }) {
  const date = report.map((d) => d.date);
  const total = report.map((t) => (t.total_cases === null ? 0 : t.total_cases));
  const recoveries = report.map((t) =>
    t.total_recoveries === null ? 0 : t.total_recoveries
  );
  const fatalities = report.map((t) =>
    t.total_fatalities === null ? 0 : t.total_fatalities
  );
  const hospitalizations = report.map((t) =>
    t.total_hospitalizations === null ? 0 : t.total_hospitalizations
  );

  return report === [] ||
    total === [] ||
    recoveries === [] ||
    fatalities === [] ||
    hospitalizations === [] ? null : (
    <div className="map__container">
      <div className="ui card ">
        <div className="content">
          <div className="header">Cumulative Count</div>
        </div>
        <div className="content">
          <Line
            height={200}
            width={300}
            data={{
              labels: date,
              datasets: [
                {
                  label: "Cases",
                  data: total,
                  backgroundColor: "rgba(39, 39, 223, 0.35)",
                  borderWidth: 2,
                  borderColor: "blue",
                  pointRadius: 0,
                },
                {
                  label: "Deaths",
                  data: fatalities,
                  backgroundColor: "rgba(222, 79, 79, 0.35)",
                  borderWidth: 2,
                  borderColor: "red",
                  pointRadius: 0,
                  hidden: true,
                },
                {
                  label: "Recoveries ",
                  data: recoveries,
                  backgroundColor: "rgba(36, 219, 36, 0.35)",
                  borderWidth: 2,
                  borderColor: "green",
                  pointRadius: 0,
                  hidden: true,
                },
                {
                  label: "Hospitalizations",
                  data: hospitalizations,
                  backgroundColor: "rgba(230, 166, 47,0.354)",
                  borderWidth: 2,
                  borderColor: "orange",
                  pointRadius: 0,
                  hidden: true,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              title: {
                display: false,
                text: "Cumulative Cases",
              },
              scales: {
                xAxes: [
                  {
                    type: "time",
                    time: {
                      displayFormats: {
                        month: "MM YY",
                      },
                    },
                    ticks: {
                      beginAtZero: true,
                      maxTicksLimit: 8,
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      maxTicksLimit: 7,
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

export default TotalCases;
