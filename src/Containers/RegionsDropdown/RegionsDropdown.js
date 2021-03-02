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
    <section className="regions__dropdown-section">
      <div className="regions__dropdown-div">
        <Dropdown
          text="Select Region"
          selection
          options={regionOptions}
          className="regions__dropdown"
          style={{
            marginLeft: "2em",
            marginTop: "1em",
            backgroundColor: " rgba(243, 244, 246)",
            color: "black",
            fontWeight: "700",
            fontSize: "1.05rem",
          }}
        >
          <Dropdown.Menu>
            {regions.map((region) => {
              return (
                <Dropdown.Item key={region.hr_uid} value={region.engname}>
                  <Link
                    to={{
                      pathname: `/regions/${region.hr_uid}`,
                      state: region.engname,
                    }}
                    onClick={window.scrollTo(0, 0)}
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
      </div>
    </section>
  );
}

export default RegionsDropdown;
