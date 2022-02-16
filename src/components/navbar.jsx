import React from "react";
import { FaEquals, FaTimes } from "react-icons/fa";
import { v4 } from "uuid";
import { brand } from "../assets";
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
    name: <Button className="btn-light w-100">Sign Up</Button>,
    link: "/sign-up",
  },
  {
    name: <Button className="btn-primary w-100">Login</Button>,
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
      bg="white"
      fixed="top"
      expand="lg"
      className="shadow"
      style={{ minHeight: 60 }}
    >
      <div className="container">
        <BNavbar.Brand className="p-0">
          <Nav.Link to="/" className="h5 m-0 text-bolder p-0">
            <img src={brand} alt="Courier 007" height="50px" />
            Courier 007
          </Nav.Link>
        </BNavbar.Brand>
        <BNavbar.Toggle aria-controls="navbar" className="toggler">
          <span className="btn shadow-0 p-0 icon-btn" onClick={toggleMenu}>
            {showMenu ? <FaTimes /> : <FaEquals />}
          </span>
        </BNavbar.Toggle>
        <BNavbar.Collapse id="navbar" className="justify-content-end">
          <Nav className="d-flex align-items-start align-items-lg-center">
            {navItems.map((item) => (
              <Nav.Link
                key={v4()}
                className="text-dark p-2 px-3"
                href={item.link}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </BNavbar.Collapse>
      </div>
    </BNavbar>
  );
}
