import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { brand } from '../../assets';

const NavMenu = ({ links, showMenu, setShowMenu }) => {
  return (
    <div
      className={`justify-content-end bg-white ${
        showMenu ? 'active' : 'hide'
      } nav-menu`}
    >
      <Nav className='d-flex align-items-center justify-content-center'>
        {links.map((item) => (
          <Link
            key={v4()}
            className='nav-link p-2 px-3 text-dark rounded'
            to={item.path}
            onClick={() => setShowMenu(false)}
          >
            {item.name}
          </Link>
        ))}
        <img src={brand} alt='Courier Seven BD' height='50px' width='50px' />
      </Nav>
    </div>
  );
};

export default NavMenu;
