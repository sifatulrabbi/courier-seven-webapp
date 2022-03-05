import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { dashboardData } from '../assets';

const UsersDashboard = () => {
  return (
    <Container className='container-lg p-3'>
      <Row>
        {dashboardData.map((data) => (
          <Col key={v4()} sm='12' md='6' lg='3' className='my-2'>
            <Card className='border-0 shadow-sm bg-white'>
              <Card.Body>
                <Card.Subtitle>{data.header}</Card.Subtitle>
                <div className='mt-2'>
                  <span className='display-5 fw-bold'>{data.value}</span>
                  <small>{data.ext}</small>
                </div>
              </Card.Body>
              <Card.Footer>
                <Link to={data.link.path}>{data.link.name}</Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UsersDashboard;
