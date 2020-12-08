import React from "react";

function Header({ data }) {
  const myStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "2rem 0",
  };

  return data === undefined ? null : (
    <React.Fragment>
      <div style={myStyle} class="ui four column stackable">
        <div className="ui small statistic column">
          <div className="label" style={{ color: "#145688" }}>
            Cases
          </div>
          <div className="value" style={{ color: "#145688" }}>
            {data.total_cases}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              color: "#145688",
              fontWeight: "bold",
            }}
          >
            {data.change_cases} today
          </p>
        </div>
        <div className="ui small statistic column">
          <div className="label" style={{ color: "#db2828" }}>
            Deaths
          </div>
          <div className="value" style={{ color: "#db2828" }}>
            {data.total_fatalities}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              color: "#db2828",
              fontWeight: "bold",
            }}
          >
            {data.change_fatalities} today
          </p>
        </div>
        <div className="ui small statistic column">
          <div className="label" style={{ color: " #0d7926" }}>
            Recoveries
          </div>
          <div className="value" style={{ color: " #0d7926" }}>
            {data.total_recoveries}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              color: " #0d7926",
              fontWeight: "bold",
            }}
          >
            {data.change_recoveries} today
          </p>
        </div>

        <div className="ui small statistic column">
          <div className="label" style={{ color: "#73268d" }}>
            Active
          </div>
          <div className="value" style={{ color: "#73268d" }}>
            {data.total_cases - data.total_recoveries - data.total_fatalities}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              color: "#73268d",
              fontWeight: "bold",
            }}
          >
            {data.change_cases -
              data.change_recoveries -
              data.change_fatalities}{" "}
            today
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
