import React from "react";
import "./header.css";

function Header({ data }) {
  const casesColor = { color: "#145688" };
  const deathsColor = { color: "#db2828" };
  const recoveredColor = { color: "#0d7926" };
  const activeColor = { color: "#73268d" };

  return data === undefined ? null : (
    <div
      class="ui five column centered grid doubling stackable container"
      id="grid"
    >
      <div className="ui column small statistic header__div header__div--cases" id="grid__column">
        <div className="label" style={casesColor}>
          Cases
        </div>
        <div className="value" style={casesColor}>
          {data.total_cases}
        </div>
        <p className="today--style" style={casesColor}>
          {data.change_cases} today
        </p>
      </div>
      <div className="ui column small statistic header__div header__div--deaths">
        <div className="label" style={deathsColor}>
          Deaths
        </div>
        <div className="value" style={deathsColor}>
          {data.total_fatalities}
        </div>
        <p className="today--style" style={deathsColor}>
          {data.change_fatalities} today
        </p>
      </div>
      <div className="ui column small statistic header__div header__div--recoveries">
        <div className="label" style={recoveredColor}>
          Recoveries
        </div>
        <div className="value" style={recoveredColor}>
          {data.total_recoveries}
        </div>
        <p className="today--style" style={recoveredColor}>
          {data.change_recoveries} today
        </p>
      </div>
      <div className="ui column small statistic header__div header__div--active">
        <div className="label" style={activeColor}>
          Active
        </div>
        <div className="value" style={activeColor}>
          {data.total_cases - data.total_recoveries - data.total_fatalities}
        </div>
        <p className="today--style" style={activeColor}>
          {data.change_cases - data.change_recoveries - data.change_fatalities}{" "}
          today
        </p>
      </div>
    </div>
  );
}

export default Header;

// const myStyle = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-evenly",
//   padding: "2rem 0",
// };

// <div style={myStyle} class="ui four column stackable">
//         <div className="ui small statistic column">
//           <div className="label" style={casesColor}>
//             Cases
//           </div>
//           <div className="value" style={casesColor}>
//             {data.total_cases}
//           </div>
//           <p className="today--style" style={casesColor}>
//             {data.change_cases} today
//           </p>
//         </div>
//         <div className="ui small statistic column">
//           <div className="label" style={deathsColor}>
//             Deaths
//           </div>
//           <div className="value" style={deathsColor}>
//             {data.total_fatalities}
//           </div>
//           <p className="today--style" style={deathsColor}>
//             {data.change_fatalities} today
//           </p>
//         </div>
//         <div className="ui small statistic column">
//           <div className="label" style={recoveredColor}>
//             Recoveries
//           </div>
//           <div className="value" style={recoveredColor}>
//             {data.total_recoveries}
//           </div>
//           <p className="today--style" style={recoveredColor}>
//             {data.change_recoveries} today
//           </p>
//         </div>

//         <div className="ui small statistic column">
//           <div className="label" style={activeColor}>
//             Active
//           </div>
//           <div className="value" style={activeColor}>
//             {data.total_cases - data.total_recoveries - data.total_fatalities}
//           </div>
//           <p className="today--style" style={activeColor}>
//             {data.change_cases -
//               data.change_recoveries -
//               data.change_fatalities}{" "}
//             today
//           </p>
//         </div>
//       </div>
