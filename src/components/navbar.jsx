import React from "react";
import { FaEquals, FaTimes } from "react-icons/fa";
import { v4 } from "uuid";
import { brand } from "../assets";
import {
  Navbar as BNavbar,
  Nav,
  Dropdown,
  // Accordion,
  // ListGroup,
  // ListGroupItem,
} from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
// import AccordionBody from "react-bootstrap/esm/AccordionBody";

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

const ProfileDropdown = () => {
  return (
    <Dropdown className="navbar-dropdown">
      <Dropdown.Toggle
        type="button"
        id="navProfileDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        className="bg-white border-0 text-dark"
      >
        <FaUserCircle style={{ fontSize: "2rem" }} />
      </Dropdown.Toggle>
      <Dropdown.Menu aria-labelledby="navProfileDropdown">
        {navProfileLinks.map((link) => (
          <Dropdown.Item key={v4()} href={link.link}>
            {link.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

// const ProfileAccordion = () => {
//   return (
//     <Accordion id="navProfileAccordion">
//       <Accordion.Item>
//         <Accordion.Header id="headingOne">Profile</Accordion.Header>
//         <Accordion.Collapse
//           id="collapseOne"
//           aria-labelledby="headingOne"
//           data-bs-parent="#navProfileAccordion"
//         >
//           <AccordionBody>
//             <ListGroup>
//               {navProfileLinks.map((link) => (
//                 <ListGroupItem>{link.name}</ListGroupItem>
//               ))}
//             </ListGroup>
//           </AccordionBody>
//         </Accordion.Collapse>
//       </Accordion.Item>
//     </Accordion>
//   );
// };

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
      style={{ minHeight: 60 }}
    >
      <div className="container">
        <BNavbar.Brand className="p-0">
          <Nav.Link href="/" className="h5 m-0 text-bolder p-0">
            <img src={brand} alt="Courier Seven BD" height="50px" />
            Courier Seven BD
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
            <ProfileDropdown />
          </Nav>
        </div>
      </div>
    </BNavbar>
  );
}
