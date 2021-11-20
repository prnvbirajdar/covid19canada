import React from "react";
import "./header.css";

function Header({ data }) {
  //setting font color
  const casesColor = { color: "#145688" };
  const deathsColor = { color: "#db2828" };
  const recoveredColor = { color: "#0d7926" };
  const activeColor = { color: "#73268d" };
  const vaccinatedColor = { color: "#141414" };

  const formatCases = (num) =>
    num ? num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") : "0";

  return data === undefined ? null : (
    <main
      className="ui doubling five column centered grid stackable container"
      id="grid"
      style={{
        marginTop: "1rem",
      }}
    >
      <div
        className="ui column small statistic header__div header__div--cases"
        id="grid__column"
      >
        <div className="label" style={casesColor}>
          Cases
        </div>
        <div className="value" style={casesColor}>
          <p>
            <b>{formatCases(data.total_cases)}</b>
          </p>
          {/*converts num to string and adds commas*/}
        </div>
        <p className="today--style" style={casesColor}>
          {formatCases(data.change_cases)} today
        </p>
      </div>
      <div className="ui column small statistic header__div header__div--deaths">
        <div className="label" style={deathsColor}>
          Deaths
        </div>
        <div className="value" style={deathsColor}>
          <p>
            <b>{formatCases(data.total_fatalities)}</b>
          </p>
        </div>
        <p className="today--style" style={deathsColor}>
          {formatCases(data.change_fatalities)} today
        </p>
      </div>
      <div className="ui column small statistic header__div header__div--recoveries">
        <div className="label" style={recoveredColor}>
          Recoveries
        </div>
        <div className="value" style={recoveredColor}>
          <p>
            <b>{formatCases(data.total_recoveries)}</b>
          </p>{" "}
        </div>
        <p className="today--style" style={recoveredColor}>
          {formatCases(data.change_recoveries)} today
        </p>
      </div>
      <div className="ui column small statistic header__div header__div--active">
        <div className="label" style={activeColor}>
          Active
        </div>
        <div className="value" style={activeColor}>
          <p>
            <b>
              {" "}
              {formatCases(
                data.total_cases - data.total_recoveries - data.total_fatalities
              )}{" "}
            </b>
          </p>
        </div>
        <p className="today--style" style={activeColor}>
          {formatCases(
            data.change_cases - data.change_recoveries - data.change_fatalities
          )}{" "}
          today
        </p>
      </div>

      {data.total_vaccinations === null ? (
        <div></div>
      ) : (
        <div className="ui column small statistic header__div header__div--vaccinations">
          <div className="label" style={vaccinatedColor}>
            Vaccinations
          </div>
          <div className="value" style={vaccinatedColor}>
            <p>
              <b>{formatCases(data.total_vaccinations)}</b>
            </p>{" "}
          </div>
          <p className="today--style" style={vaccinatedColor}>
            {formatCases(data.change_vaccinations)} today
          </p>
        </div>
      )}
    </main>
  );
}

export default Header;
