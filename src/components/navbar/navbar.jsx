import React from "react";
import { Link } from "react-router-dom";
import { FaEquals, FaTimes } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { brandLogoFull } from "../../assets";
import { Navbar as BNavbar, Nav, Button } from "react-bootstrap";

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
        <Link to="/">
          {/* <img
            src={brandLogoFull}
            alt="Courier 007"
            style={{ height: 50 }}
            className="img-fluid"
          /> */}
          <span className="text-white h5" style={{ fontWeight: 900 }}>
            Courier 007
          </span>
        </Link>
        <BNavbar.Toggle aria-controls="navbar" className="toggler">
          <button className="btn shadow-0 p-0 icon-btn" onClick={toggleMenu}>
            {showMenu ? <FaTimes /> : <FaEquals />}
          </button>
        </BNavbar.Toggle>
        <BNavbar.Collapse id="navbar" className="justify-content-end">
          <Nav className="d-flex align-items-center">
            <Nav.Link className="text-light p-3" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-light p-3" href="#pricing">
              Pricing
            </Nav.Link>
            <Nav.Link className="text-light p-3" href="/users/profile">
              Tracking
            </Nav.Link>
            <Nav.Link className="text-light p-2">
              <Button className="btn-secondary w-100">Sign Up</Button>
            </Nav.Link>
            <Nav.Link className="p-2">
              <Button className="btn-light w-100">Login</Button>
            </Nav.Link>
          </Nav>
        </BNavbar.Collapse>
      </div>
    </BNavbar>
  );
}
