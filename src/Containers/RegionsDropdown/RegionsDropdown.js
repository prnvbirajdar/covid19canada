import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

function RegionsDropdown({ provinces, match }) {
  const [regions, setRegions] = useState([]);

  const selectedProv = provinces.find(
    (prov) => prov.Code === match.params.code
  );

  useEffect(() => {
    if (selectedProv) {
      setRegions(selectedProv.healthRegions);
    }
  }, [selectedProv]);

  const regionOptions = regions.map((region) => ({
    key: region.hr_uid,
    text: region.engname,
    value: region.hr_uid,
  }));

  return selectedProv === null || undefined ? null : (
    <React.Fragment>
      <Dropdown placeholder="Select Region" selection options={regionOptions}>
        <Dropdown.Menu>
          {regions.map((region) => {
            return (
              <Dropdown.Item key={region.hr_uid} value={region.engname}>
                <Link
                  to={{
                    pathname: `/regions/${region.hr_uid}`,
                    state: region.engname,
                  }}
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
    </React.Fragment>
  );
}

export default RegionsDropdown;
