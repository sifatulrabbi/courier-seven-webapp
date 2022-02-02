import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaEquals, FaTimes } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import BrandLogo from "../brand-logo/brand-logo";
import { usePageLinks } from "../../contexts";

function NavMenu({ toggleMenu }) {
  const { links } = usePageLinks();

  return (
    <ul className="navbar-links-list">
      {links.map((data) => (
        <li key={uuid()} className="navbar-links-list-item">
          {data.link.includes("#") ? (
            <HashLink to={data.link} replace className="link">
              {data.name}
            </HashLink>
          ) : (
            <Link
              to={data.link}
              className="link"
              onClick={() => toggleMenu(false)}
            >
              {data.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleMenu(e) {
    setShowMenu((prev) => !prev);
  }

  function closeMenu(e) {
    setShowMenu(false);
  }

  return (
    <nav className="navbar">
      <BrandLogo />
      <div className="desktop-menu">
        <NavMenu toggleMenu={closeMenu} />
      </div>
      <button type="button" className="menu-btn" onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaEquals />}
      </button>
      <aside className={`mobile-menu ${showMenu ? "show" : "hide"}`}>
        <NavMenu toggleMenu={closeMenu} />
      </aside>
    </nav>
  );
}
