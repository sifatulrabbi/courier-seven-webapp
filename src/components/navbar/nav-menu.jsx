import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

const NavMenu = ({ links, showMenu, setShowMenu, transparent }) => {
  return (
    <div
      className={`justify-content-end ${
        transparent ? 'transparent' : 'white'
      } ${showMenu ? 'active' : 'hide'} navbar-nav-menu`}
    >
      <Nav className='d-flex align-items-center justify-content-center'>
        {links.map((item) => (
          <Link
            key={v4()}
            className={`nav-link text-dark p-2 px-3 ${
              transparent ? 'text-white' : 'text-dark'
            } menu-item`}
            to={item.path}
            onClick={() => setShowMenu(false)}
          >
            {item.name}
          </Link>
        ))}
      </Nav>
    </div>
  );
};

export default NavMenu;
