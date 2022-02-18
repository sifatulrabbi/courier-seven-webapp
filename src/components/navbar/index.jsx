import React from "react";
import { FaEquals, FaTimes } from "react-icons/fa";
import { v4 } from "uuid";
import { brand } from "../../assets";
import { Navbar as BNavbar, Nav } from "react-bootstrap";
import ProfileDropdown from "./profile-dropdown";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Pricing", link: "#pricing" },
  { name: "Tracking", link: "/users/track" },
];

const navProfileLinks = [
  { name: "Dashboard", link: "/users/profile" },
  { name: "Create parcel", link: "/users/create-parcel" },
  { name: "Payments", link: "/users/payments" },
  { name: "Logout", link: "/users/logout" },
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
      className="shadow-sm"
      style={{ minHeight: 60, maxWidth: "100vw" }}
    >
      <div className="container">
        <BNavbar.Brand className="p-0">
          <Nav.Link href="/" className="h5 m-0 text-bolder p-0">
            <img src={brand} alt="Courier Seven BD" height="50px" />
            Courier 007
          </Nav.Link>
        </BNavbar.Brand>
        <button
          className="btn shadow-0 p-0 icon-btn justify-self-end d-block d-lg-none"
          onClick={toggleMenu}
        >
          {showMenu ? <FaTimes /> : <FaEquals />}
        </button>
        <div
          className={`justify-content-end navbar-nav-menu bg-white ${
            showMenu ? "active" : "hide"
          }`}
        >
          <Nav className="container-sm d-flex align-items-start align-items-lg-center">
            {navItems.map((item) => (
              <Nav.Link
                key={v4()}
                className="nav-link text-dark p-2 px-3 w-100"
                href={item.link}
              >
                {item.name}
              </Nav.Link>
            ))}
            <ProfileDropdown links={navProfileLinks} />
          </Nav>
        </div>
      </div>
    </BNavbar>
  );
}
