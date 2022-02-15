import React from "react";
import { Link } from "react-router-dom";
import { FaEquals, FaTimes } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { brandLogoFull } from "../assets";
import { Navbar as BNavbar, Nav, Button } from "react-bootstrap";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Pricing",
    link: "#pricing",
  },
  {
    name: "Tracking",
    link: "/users/track",
  },
  {
    name: <Button className="btn-secondary w-100">Sign Up</Button>,
    link: "/sign-up",
  },
  {
    name: <Button className="btn-light w-100">Login</Button>,
    link: "/login",
  },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleMenu(e) {
    setShowMenu((prev) => !prev);
  }

  return (
    <BNavbar
      bg="primary"
      fixed="top"
      expand="lg"
      className="navbar-dark shadow text-white"
      style={{ minHeight: 60 }}
    >
      <div className="container">
        <BNavbar.Brand>
          <Nav.Link
            to="/"
            className="text-white h5"
            style={{ fontWeight: 900 }}
          >
            Courier 007
          </Nav.Link>
        </BNavbar.Brand>
        <BNavbar.Toggle aria-controls="navbar" className="toggler">
          <button className="btn shadow-0 p-0 icon-btn" onClick={toggleMenu}>
            {showMenu ? <FaTimes /> : <FaEquals />}
          </button>
        </BNavbar.Toggle>
        <BNavbar.Collapse id="navbar" className="justify-content-end">
          <Nav className="d-flex align-items-start align-items-lg-center">
            {navItems.map((item) => (
              <Nav.Link className="text-light p-2" href={item.link}>
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </BNavbar.Collapse>
      </div>
    </BNavbar>
  );
}
