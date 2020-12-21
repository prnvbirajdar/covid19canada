import React, { useState, useEffect } from "react";
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

  // //   const healthRegions = prov.healthRegions;

  // console.log(prov);

  // console.log(prov.healthRegions);

  const regionOptions = regions.map((region) => ({
    key: region.hr_uid,
    text: region.engname,
    value: region.hr_uid,
  }));

  return (
    <Dropdown
      placeholder="Select Region"
      search
      selection
      options={regionOptions}
    />
  );
}

export default RegionsDropdown;

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
//             <Link
//               to={`/regions/${region.hr_uid}`}
//               onclick={window.scrollTo(0, 0)}
//             >
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
