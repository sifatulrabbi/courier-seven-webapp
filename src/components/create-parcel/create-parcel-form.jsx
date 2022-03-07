import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import FormGroup from '../form-group';
import { useCreateParcel } from '../../hooks';
import { Link } from 'react-router-dom';

const WrappedForm = (props) => {
  return (
    <Col sm='12' lg='6'>
      <FormGroup props={props} />
    </Col>
  );
};

const CreateParcelForm = () => {
  const hook = useCreateParcel();

  return (
    <Form
      action='submit'
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <Row>
        <WrappedForm
          type='text'
          label='Customer Name'
          name='customer_name'
          placeholder='e.g. John Doe'
          value={hook.customerName}
          onChange={hook.handleCustomerName}
        />
        <WrappedForm
          type='number'
          label='Customer mobile'
          name='customer_mobile'
          placeholder='01XXXXXXXXX'
          value={hook.invoice}
          onChange={hook.handleInvoice}
        />
        <WrappedForm
          type='number'
          label='Collection amount'
          name='collection_amount'
          placeholder='e.g. 100 TK'
          value={hook.collection}
          onChange={hook.handleCollection}
        />
        <WrappedForm
          type='number'
          label='Product price'
          name='product_price'
          placeholder='e.g. 100 TK'
          value={hook.productPrice}
          onChange={hook.handleProductPrice}
        />
        <WrappedForm
          type='number'
          label='Product Weight (gm)'
          name='product_weight'
          placeholder='e.g. 100'
          value={hook.productWeight}
          onChange={hook.handleProductWeight}
        />
        <WrappedForm
          type='select'
          label='Product Type'
          name='product_type'
          placeholder='e.g. Solid'
          value={hook.productType}
          onChange={hook.handleProductType}
        />
        <WrappedForm
          type='text'
          label='Delivery Division'
          name='delivery_division'
          placeholder='Delivery Division'
          value={hook.deliveryDivision}
          onChange={hook.handleDeliveryDivision}
        />
        <WrappedForm
          type='text'
          label='Delivery District'
          name='delivery_district'
          placeholder='Delivery District'
          value={hook.deliveryDistrict}
          onChange={hook.handleDeliveryDistrict}
        />
        <WrappedForm
          type='text'
          label='Delivery Upazila'
          name='delivery_upazila'
          placeholder='Delivery Upazila'
          value={hook.deliveryUpazila}
          onChange={hook.handleDeliveryUpazila}
        />
        <WrappedForm
          type='text'
          label='Delivery Street'
          name='delivery_street'
          placeholder='Delivery Street'
          value={hook.deliveryArea}
          onChange={hook.handleDeliveryArea}
        />
        <WrappedForm
          type='text'
          label='Delivery House'
          name='delivery_house'
          placeholder='Delivery House'
          value={hook.deliveryStreet}
          onChange={hook.handleDeliveryStreet}
        />
      </Row>
      <Button type='submit'>Create</Button>
      <div className='p-3 bg-light d-flex flex-column'>
        <p>
          Sending illegal products is completely prohibited. To learn more read
          our{' '}
          <Link to='#' className='text-center'>
            terms and service
          </Link>
        </p>
        <Form.Check
          type='checkbox'
          id='terms-policy'
          label='I accept'
          required
          value={hook.acceptTerms}
          onChange={hook.handleAcceptTerms}
        />
      </div>
    </Form>
  );
};

export default CreateParcelForm;
