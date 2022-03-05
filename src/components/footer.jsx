import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { brandLight, siteLinks } from '../assets';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  function copyMobile() {
    navigator.clipboard.writeText('01882970400');
  }

  return (
    <Container fluid className='bg-linear py-5 text-white'>
      <Container className='container-lg h-100'>
        <Row className='g-4 mb-3'>
          <Col md='5' lg='5' className='text-center text-md-start mb-3'>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <img src={brandLight} alt='Courier 007' height='45px' />
              <span className='text-white fw-bolder h5'>Courier 007</span>
            </Link>
          </Col>
          <Col
            md='2'
            lg='2'
            className='text-center text-md-start mb-3 text-white'
          >
            <Nav className='flex-column'>
              <h6 className='fw-bold'>Site links</h6>
              {siteLinks.navLinks.map((link) => (
                <Link key={v4()} to={link.path} className='p-1 link-light'>
                  <small>{link.name}</small>
                </Link>
              ))}
            </Nav>
          </Col>
          <Col
            md='3'
            className='d-flex flex-column align-items-center align-items-md-start mb-3'
          >
            <h6 className='fw-bold'>Contact us</h6>
            <small className='text-light mb-3'>
              Some house, Dhanmondi, Dhaka - 1205
            </small>

            <OverlayTrigger
              placement='top'
              overlay={<Tooltip id='copy-number-tooltip'>Copy number</Tooltip>}
            >
              <Button
                variant='white'
                className='btn p-0 text-start text-light'
                onClick={copyMobile}
                style={{ width: 'max-content' }}
              >
                <small>Call: 01882970400</small>
              </Button>
            </OverlayTrigger>
          </Col>
          <Col md='2' lg='2' className='d-flex flex-column align-items-center'>
            <Link
              to='/login'
              className='w-100 mb-3'
              style={{ maxWidth: '120px' }}
            >
              <Button variant='light' className='w-100'>
                Login
              </Button>
            </Link>
            <Link
              to='/register'
              className='w-100'
              style={{ maxWidth: '120px' }}
            >
              <Button variant='secondary' className='w-100'>
                Register
              </Button>
            </Link>
          </Col>
        </Row>
        <div className='w-100 divider' style={{ height: 1 }} />
        <Container
          fluid
          className='pt-2   d-flex flex-column flex-md-row align-items-center'
          style={{ justifyContent: 'space-between', gridGap: '2rem' }}
        >
          <small className='text-white'>
            &copy; {new Date().getFullYear()} Courier 007, Bangladesh
          </small>
          <Nav>
            <Nav.Link href='/' target='_blank' className='p-0 px-3 text-white'>
              <FaFacebook style={{ fontSize: '1.3rem' }} />
            </Nav.Link>
            <Nav.Link href='/' target='_blank' className='p-0 px-3 text-white'>
              <FaInstagram style={{ fontSize: '1.3rem' }} />
            </Nav.Link>
            <Nav.Link href='/' target='_blank' className='p-0 px-3 text-white'>
              <FaEnvelope style={{ fontSize: '1.3rem' }} />
            </Nav.Link>
          </Nav>
        </Container>
      </Container>
    </Container>
  );
};

export default Footer;
