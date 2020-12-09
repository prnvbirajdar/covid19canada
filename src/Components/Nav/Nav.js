import { imageOverlay } from "leaflet";
import React, { useState } from "react";
import { Menu, Dropdown, MenuItem } from "semantic-ui-react";
import "./nav.css";
import { Link } from "react-router-dom";
// import {provinces} from '../Api/Api'

function Nav({ provinces }) {
  const [data] = useState(provinces);

  // const [value, setValue] = useState('')

  const dropdownOptions = provinces.map((province) => ({
    key: province.Code,
    text: province.Name,
    value: province.Code,
  }));

  return (
    <Menu className="nav">
      <Menu.Item>
        <Link to="/">
          <i class="fas fa-shield-virus" style={{ fontSize: "3rem" }}></i>
        </Link>
      </Menu.Item>

      <Dropdown
        placeholder="Select Province"
        className="link item dropdown"
        style={{ paddingRight: "5rem" }}
      >
        <Dropdown.Menu>
          {data.map((province) => {
            return (
              <Dropdown.Item key={province.Code} value={province.Code}>
                <Link to={`/province/${province.Code}`}>
                  <p>{province.Name}</p>
                </Link>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}

export default Nav;
