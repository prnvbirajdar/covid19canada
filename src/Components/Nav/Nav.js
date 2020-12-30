import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav({ provinces }) {
  return (
    <Menu className="nav">
      <Menu.Item>
        <Link to="/">
          <i
            class="fas fa-shield-virus"
            style={{ fontSize: "3rem", color: "white" }}
          ></i>
        </Link>
      </Menu.Item>

      <Dropdown
        placeholder="Select Province"
        className="link item dropdown"
        style={{
          paddingRight: "5rem",
          color: "white",
          fontWeight: "700",
          fontSize: "1.05rem",
        }}
      >
        <Dropdown.Menu>
          {provinces.map((province) => {
            return (
              <Dropdown.Item key={province.Code} value={province.Name}>
                <Link
                  to={`/province/${province.Code}`}
                  onclick={window.scrollTo(0, 0)}
                >
                  <p style={{ color: "black" }}>
                    <b>{province.Name}</b>
                  </p>
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
