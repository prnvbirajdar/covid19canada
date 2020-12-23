import React, { useState, useEffect, Fragment } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";

function RegionsDropdown({ provinces, match }) {
  //const [prov, setProv] = useState(null);

  const [regions, setRegions] = useState([]);

  const selectedProv = provinces.find(
    (prov) => prov.Code === match.params.code
  );

  // console.log(provinces);
  // console.log(match.params.code);

  // console.log(selectedProv);

  useEffect(() => {
    setRegions(selectedProv.healthRegions);
  }, [selectedProv.healthRegions]);

  // console.log(prov);

  return (
    <React.Fragment>
      <Dropdown
        text="Select Region"
        className="link item dropdown"
        style={{
          padding: "1rem 3rem 1rem 0.25rem",
          border: "1px solid rgba(20, 20, 20, 0.411)",
          borderRadius: "5px",
          backgroundColor: "rgba(20, 20, 20, 0.1)",
        }}
      >
        <Dropdown.Menu>
          {regions.map((region) => {
            return (
              <Dropdown.Item key={region.hr_uid} value={region.engname}>
                <Link
                  to={`/province/${region.hr_uid}`}
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

  // <Dropdown
  //   placeholder="Select Region"
  //   selection
  //   options={regionOptions}
  //   onChange={handledropdown}
  // />;

  // const regionOptions = regions.map((region) => ({
  //   key: region.hr_uid,
  //   text: region.engname,
  //   value: region.hr_uid,
  // }));

  // const handledropdown = (event, data) => {
  //   return (
  //     <Redirect to={`/regions/${data.value}`} onclick={window.scrollTo(0, 0)} />
  //   );
  // };
