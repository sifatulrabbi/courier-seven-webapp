import React from 'react';

export function useCreateParcel() {
  const [invoice, setInvoice] = React.useState('');
  const [collection, setCollection] = React.useState('');
  const [customerName, setCustomerName] = React.useState('');
  const [customerMobile, setCustomerMobile] = React.useState('');
  const [deliveryDivision, setDeliveryDivision] = React.useState('');
  const [deliveryUpazila, setDeliveryUpazila] = React.useState('');
  const [deliveryDistrict, setDeliveryDistrict] = React.useState('');
  const [deliveryArea, setDeliveryArea] = React.useState('');
  const [deliveryStreet, setDeliveryStreet] = React.useState('');
  const [deliveryHouse, setDeliveryHouse] = React.useState('');
  const [productPrice, setProductPrice] = React.useState('');
  const [productWeight, setProductWeight] = React.useState('');
  const [productType, setProductType] = React.useState('');
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [shopId, setShopId] = React.useState('');

  const handlers = {};

  handlers.handleInvoice = function (e) {
    setInvoice(e.target.value);
  };

  handlers.handleCollection = function (e) {
    setCollection(e.target.value);
  };

  handlers.handleCustomerName = function (e) {
    setCustomerName(e.target.value);
  };

  handlers.handleCustomerMobile = function (e) {
    setCustomerMobile(e.target.value);
  };

  handlers.handleDeliveryDivision = function (e) {
    setDeliveryDivision(e.target.value);
  };

  handlers.handleDeliveryDistrict = function (e) {
    setDeliveryDistrict(e.target.value);
  };

  handlers.handleDeliveryUpazila = function (e) {
    setDeliveryUpazila(e.target.value);
  };

  handlers.handleDeliveryArea = function (e) {
    setDeliveryArea(e.target.value);
  };

  handlers.handleDeliveryStreet = function (e) {
    setDeliveryStreet(e.target.value);
  };

  handlers.handleDeliveryHouse = function (e) {
    setDeliveryHouse(e.target.value);
  };

  handlers.handleProductPrice = function (e) {
    setProductPrice(e.target.value);
  };

  handlers.handleProductWeight = function (e) {
    setProductWeight(e.target.value);
  };

  handlers.handleProductType = function (e) {
    setProductType(e.target.value);
  };

  handlers.handleAcceptTerms = function (e) {
    setAcceptTerms(e.target.value);
  };

  handlers.updateShopId = function (e) {
    setShopId(e.target.value);
  };

  handlers.handleSubmit = function (e) {
    e.preventDefault();
  };

  return {
    invoice,
    collection,
    customerName,
    customerMobile,
    deliveryDivision,
    deliveryUpazila,
    deliveryDistrict,
    deliveryArea,
    deliveryStreet,
    deliveryHouse,
    productPrice,
    productWeight,
    productType,
    acceptTerms,
    shopId,
    ...handlers,
  };
}
