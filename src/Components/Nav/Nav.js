import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav({ provinces }) {
  return (
    <Menu className="nav">
      <Menu.Item>
        <Link aria-label="logo" to="/">
          <i
            className="fas fa-shield-virus"
            style={{ fontSize: "3rem", color: "white" }}
          ></i>
        </Link>
      </Menu.Item>

      <Dropdown
        text="Select Province"
        aria-label="dropdown"
        className="link item dropdown"
        style={{
          paddingRight: "5rem",
          color: "white",
          fontWeight: "700",
          fontSize: "1.1rem",
          backgroundColor: "#131313",
          borderRadius: "5px",
        }}
      >
        <Dropdown.Menu aria-label="province dropdown menu" aria-expanded="true">
          {provinces.map((province) => {
            return (
              <Link
                aria-expanded="true"
                aria-label="province button"
                key={province.Code}
                value={province.Name}
                to={`/province/${province.Code}`}
                onClick={window.scrollTo(0, 0)}
              >
                <Dropdown.Item
                  aria-label="province dropdown item"
                  aria-expanded="true"
                >
                  <p
                    style={{ color: "black" }}
                    aria-label="province name"
                    aria-expanded="true"
                  >
                    <b>{province.Name}</b>
                  </p>
                </Dropdown.Item>
              </Link>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}

export default Nav;
