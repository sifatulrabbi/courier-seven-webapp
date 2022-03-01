import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import FormGroup from '../form-group';
import { v4 } from 'uuid';
import { calculatorData } from '../../assets';

const CalculatorForm = () => {
  return (
    <Container fluid className='bg-white p-3 rounded shadow'>
      <Form action='submit'>
        <Row className='g-3 justify-content-center'>
          {calculatorData.map((data) => (
            <Col key={v4()} sm='12' md='6'>
              <FormGroup
                select={data.select}
                name={data.name}
                id={data.id}
                type={data.type}
                required={data.required}
                options={data.options}
                label={data.label}
              />
            </Col>
          ))}
          <Col sm='12' md='6'>
            <Button type='submit' className='w-100'>
              Calculate
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CalculatorForm;
