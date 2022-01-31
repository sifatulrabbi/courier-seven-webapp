import React from "react";
import { Link } from "react-router-dom";
import { FaEquals, FaTimes } from "react-icons/fa";
import { siteLinks } from "../../assets";
import { v4 as uuid } from "uuid";
import { scrollableLinks } from "../../utils";
import BrandLogo from "../brand-logo/brand-logo";

function NavMenu({ toggleMenu }) {
  return (
    <ul className="navbar-links-list">
      {siteLinks.map((data) => (
        <li key={uuid()} className="navbar-links-list-item">
          {data.link ? (
            <Link to={data.link} className="link" onClick={toggleMenu}>
              {data.name}
            </Link>
          ) : (
            <button
              className="link"
              onClick={function () {
                scrollableLinks(data.id);
              }}
            >
              {data.name}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleMenu(e, value) {
    if (value) {
      setShowMenu(value);
    } else {
      setShowMenu((prev) => !prev);
    }
  }

  return (
    <nav className="navbar">
      <BrandLogo />
      <div className="desktop-menu">
        <NavMenu toggleMenu={toggleMenu} />
      </div>
      <button type="button" className="menu-btn" onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaEquals />}
      </button>
      <aside className={`mobile-menu ${showMenu ? "show" : "hide"}`}>
        <NavMenu toggleMenu={toggleMenu} />
      </aside>
    </nav>
  );
}
