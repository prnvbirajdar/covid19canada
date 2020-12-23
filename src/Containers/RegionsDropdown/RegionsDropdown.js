import React, { useState, useEffect, Fragment } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

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

  console.log(regions);


  // console.log(prov);


  const regionOptions = regions.map((region) => ({
    key: region.hr_uid,
    text: region.engname,
    value: region.hr_uid,
  }));

  return (
    <React.Fragment>
      <Dropdown placeholder="Select Region" selection options={regionOptions} />

      <p>option: {regionOptions.text}</p>
    </React.Fragment>
  );
}

export default RegionsDropdown;

// <Link
//         to={`/regions/${regionOptions.value}`}
//         onclick={window.scrollTo(0, 0)}
//       />

// selectedProv === [] ? null : (
//   <Dropdown
//     placeholder="Select Region"
//     className="link item dropdown"
//     style={{ paddingRight: "5rem", color: "#141414" }}
//   >
//     <Dropdown.Menu>
//       {prov.healthRegions.map((region) => {
//         return (
//           <Dropdown.Item key={region.hr_uid} value={region.engname}>
// <Link
//   to={`/regions/${region.hr_uid}`}
//   onclick={window.scrollTo(0, 0)}
// >
//               <p style={{ color: "black" }}>
//                 <b>{region.engname}</b>
//               </p>
//             </Link>
//           </Dropdown.Item>
//         );
//       })}
//     </Dropdown.Menu>
//   </Dropdown>
// );
