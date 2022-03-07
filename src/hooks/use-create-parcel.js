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
    handleInvoice: function (e) {
      setInvoice(e.target.value);
    },

    handleCollection: function (e) {
      setCollection(e.target.value);
    },

    handleCustomerName: function (e) {
      setCustomerName(e.target.value);
    },

    handleCustomerMobile: function (e) {
      setCustomerMobile(e.target.value);
    },

    handleDeliveryDivision: function (e) {
      setDeliveryDivision(e.target.value);
    },

    handleDeliveryDistrict: function (e) {
      setDeliveryDistrict(e.target.value);
    },

    handleDeliveryUpazila: function (e) {
      setDeliveryUpazila(e.target.value);
    },

    handleDeliveryArea: function (e) {
      setDeliveryArea(e.target.value);
    },

    handleDeliveryStreet: function (e) {
      setDeliveryStreet(e.target.value);
    },

    handleDeliveryHouse: function (e) {
      setDeliveryHouse(e.target.value);
    },

    handleProductPrice: function (e) {
      setProductPrice(e.target.value);
    },

    handleProductWeight: function (e) {
      setProductWeight(e.target.value);
    },

    handleProductType: function (e) {
      setProductType(e.target.value);
    },

    handleAcceptTerms: function (e) {
      setAcceptTerms(e.target.value);
    },

    updateShopId: function (e) {
      setShopId(e.target.value);
    },
  };
}
