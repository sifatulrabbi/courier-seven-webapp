import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

const NavMenu = ({ links, showMenu }) => {
  return (
    <div
      className={`justify-content-end navbar-nav-menu bg-white ${
        showMenu ? 'active' : 'hide'
      }`}
    >
      <Nav className='d-flex align-items-center justify-content-center'>
        {links.map((item) => (
          <Link
            key={v4()}
            className='nav-link text-dark p-2 px-3'
            to={item.path}
          >
            {item.name}
          </Link>
        ))}
      </Nav>
    </div>
  );
};

export default NavMenu;
