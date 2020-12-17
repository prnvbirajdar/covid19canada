import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

function RegionsDropdown({ provinces, match }) {
  const selectedProv = provinces.find(
    (prov) => prov.Code === match.params.code
  );

  console.log(selectedProv);

  const healthRegions = selectedProv.healthRegions;

  return selectedProv === [] ? null : (
    <Dropdown
      placeholder="Select Region"
      className="link item dropdown"
      style={{ paddingRight: "5rem", color: "#141414" }}
    >
      <Dropdown.Menu>
        {healthRegions.map((region) => {
          return (
            <Dropdown.Item key={region.hr_uid} value={region.engname}>
              <Link
                to={`/regions/${region.hr_uid}`}
                onclick={window.scrollTo(0, 0)}
              >
                <p style={{ color: "black" }}>
                  <b>{region.engname}</b>
                </p>
              </Link>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default RegionsDropdown;
