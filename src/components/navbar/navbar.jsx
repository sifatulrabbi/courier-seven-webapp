import React from 'react';
import { FaBars, FaEquals, FaTimes } from 'react-icons/fa';
import { brand, brandLight } from '../../assets';
import { Navbar as BNavbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavLinks } from '../../contexts';
import NavMenu from './nav-menu';

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [transparent, setTransparent] = React.useState(true);
  const { links } = useNavLinks();

  function toggleMenu(e, value) {
    if (value !== undefined) {
      setShowMenu(value);
    } else {
      setShowMenu((prev) => !prev);
    }
  }

  function detectScroll() {
    window.addEventListener('scroll', () => {
      const value = window.document.documentElement.scrollTop < 60;
      setTransparent(value);
    });
  }

  React.useEffect(() => {
    detectScroll();
  }, []);

  return (
    <BNavbar
      bg={transparent ? 'transparent' : 'white'}
      fixed='top'
      expand='lg'
      style={{ minHeight: 60, maxWidth: '100vw' }}
      className={transparent ? 'py-3' : 'shadow-sm p-0'}
    >
      <Container>
        <BNavbar.Brand className='p-0'>
          <Link
            to='/#'
            className={`h5 m-0 text-bolder p-0 ${
              transparent ? 'text-white' : 'text-primary'
            }`}
          >
            <img
              src={transparent ? brandLight : brand}
              alt='Courier Seven BD'
              height='50px'
            />
            Courier 007
          </Link>
        </BNavbar.Brand>
        <Button
          variant='white'
          className={`shadow-0 p-0 icon-btn ${
            transparent ? 'white' : ''
          } justify-self-end d-block d-lg-none`}
          onClick={toggleMenu}
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </Button>
        <NavMenu
          links={links}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          transparent={transparent}
        />
      </Container>
    </BNavbar>
  );
};

export default Navbar;
