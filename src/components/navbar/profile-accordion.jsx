import React from 'react';
import { Accordion, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

const ProfileAccordion = ({ links, callback }) => {
  function handleClick(e) {
    callback(e);
  }

  return (
    <Accordion className='w-100 rounded-0 border-0 d-lg-none'>
      <Accordion.Item eventKey='1' className='rounded-0 border-0'>
        <Accordion.Header className='rounded-0 border-bottom'>
          Account
        </Accordion.Header>
        <Accordion.Body className='rounded-0 p-0'>
          <ListGroup
            className='border-0 rounded-0'
            style={{ paddingLeft: '2rem' }}
          >
            {links.map((link) => (
              <ListGroupItem
                key={v4()}
                className='border-0 border-bottom'
                onClick={handleClick}
              >
                <Link to={link.path} className='text-secondary w-100 d-block'>
                  {link.name}
                </Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProfileAccordion;
