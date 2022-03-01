import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { dashboardData } from '../assets';

const UsersDashboard = () => {
  return (
    <Container className='container-lg p-0'>
      <Row className='p-0'>
        {dashboardData.map(({ header, value, ext, link }) => (
          <Col key={v4()} sm='12' md='4' lg='3' className='p-4'>
            <Card className='shadow-sm border-0 bg-gray'>
              <Card.Header className='bg-gray border-0'>
                <span className='h6'>{header}</span>
              </Card.Header>
              <Card.Body>
                <Card.Title className='display-4 fw-bold'>
                  {value}
                  <small className='fs-5 fw-normal px-2'>{ext}</small>
                </Card.Title>
              </Card.Body>
              <Card.Footer className='bg-gray border-0'>
                <Link to={link.path}>{link.name}</Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UsersDashboard;
