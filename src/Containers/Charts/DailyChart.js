import React from "react";
import { Line } from "react-chartjs-2";

function DailyCases({ report, selectedProvince }) {
  const date = report.map((d) => d.date);
  const total = report.map((t) =>
    t.change_cases === null ? 0 : t.change_cases
  );
  const recoveries = report.map((t) =>
    t.change_recoveries === null ? 0 : t.change_recoveries
  );
  const fatalities = report.map((t) =>
    t.change_fatalities === null ? 0 : t.change_fatalities
  );
  const hospitalizations = report.map((t) =>
    t.change_hospitalizations === null ? 0 : t.change_hospitalizations
  );

  return report === [] ||
    total === [] ||
    recoveries === [] ||
    fatalities === [] ||
    hospitalizations === [] ? null : (
      <div className="ui card ">
        <div className="content">
          <div className="header">
            Daily Count for {selectedProvince ? selectedProvince : "Canada"}
          </div>
        </div>
        <div className="content">
          <Line
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
                  backgroundColor: "rgba(230, 166, 47, 0.35)",
                  borderWidth: 2,
                  borderColor: "orange",
                  pointRadius: 0,
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
                text: "Cumulative Cases",
              },
              scales: {
                xAxes: [
                  {
                    type: "time",
                    time: {
                      displayFormats: {
                        month: "MMM YY",
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
                      min: 0,
                      suggestedMin: 0,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 11,
                  usePointStyle: true,
                  padding: 15,
                },
              },
            }}
          />
        </div>
      </div>
  );
}

export default DailyCases;
