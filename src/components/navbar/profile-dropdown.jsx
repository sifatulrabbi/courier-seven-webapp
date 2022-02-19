import React from "react";
import { v4 } from "uuid";
import { Dropdown } from "react-bootstrap";

const ProfileDropdown = ({ links }) => {
  return (
    <Dropdown className="navbar-dropdown d-none d-lg-block">
      <Dropdown.Toggle
        type="button"
        id="navProfileDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        className="bg-white border-0 text-dark"
      >
        Profile
      </Dropdown.Toggle>
      <Dropdown.Menu aria-labelledby="navProfileDropdown">
        {links.map((link) => (
          <Dropdown.Item key={v4()} href={link.link}>
            {link.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
