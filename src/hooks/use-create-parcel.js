import React from "react";
import { sortAreas } from "../utils";

export function useCreateParcel() {
  const [customerName, setCustomerName] = React.useState("");
  const [collectionAmount, setCollectionAmount] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  const [productWeight, setProductWeight] = React.useState("");
  const [invoiceId, setInvoiceId] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [terms, setTerms] = React.useState("");
  // customer address
  const [customerDistrict, setCustomerDistrict] = React.useState("");
  const [customerArea, setCustomerArea] = React.useState("");
  const [customerStreet, setCustomerStreet] = React.useState("");
  const [customerHouse, setCustomerHouse] = React.useState("");
  // pickup address
  const [pickupDistrict, setPickupDistrict] = React.useState("");
  const [pickupArea, setPickupArea] = React.useState("");
  const [pickupStreet, setPickupStreet] = React.useState("");
  const [pickupHouse, setPickupHouse] = React.useState("");
  // area lists
  const [customerAreas, setCustomerAreas] = React.useState([]);
  const [pickupAreas, setPickupAreas] = React.useState([]);

  function handleCustomerName(e) {
    setCustomerName(e.currentTarget.value);
  }

  function handleCollectionAmount(e) {
    setCollectionAmount(e.currentTarget.value);
  }

  function handleProductPrice(e) {
    setProductPrice(e.currentTarget.value);
  }

  function handleProductWeight(e) {
    setProductWeight(e.currentTarget.value);
  }

  function handleInvoiceId(e) {
    setInvoiceId(e.currentTarget.value);
  }

  function handleCustomerDistrict(value) {
    setCustomerAreas(sortAreas(value));
    setCustomerDistrict(value);
  }

  function handleCustomerArea(value) {
    setCustomerArea(value);
  }

  function handleCustomerStreet(e) {
    setCustomerStreet(e.currentTarget.value);
  }

  function handleCustomerHouse(e) {
    setCustomerHouse(e.currentTarget.value);
  }

  function handlePickupDistrict(value) {
    setPickupAreas(sortAreas(value));
    setPickupDistrict(value);
  }

  function handlePickupArea(value) {
    setPickupArea(value);
  }

  function handlePickupStreet(e) {
    setPickupStreet(e.currentTarget.value);
  }

  function handlePickupHouse(e) {
    setPickupHouse(e.currentTarget.value);
  }

  function handleNotes(e) {
    setNotes(e.currentTarget.value);
  }

  function handleTerms(e) {
    setTerms(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return {
    customerName,
    collectionAmount,
    productPrice,
    productWeight,
    invoiceId,
    customerDistrict,
    customerArea,
    customerStreet,
    customerHouse,
    pickupDistrict,
    pickupArea,
    pickupStreet,
    pickupHouse,
    notes,
    terms,
    customerAreas,
    pickupAreas,
    handleCustomerName,
    handleCollectionAmount,
    handleProductPrice,
    handleProductWeight,
    handleInvoiceId,
    handleCustomerDistrict,
    handleCustomerArea,
    handleCustomerStreet,
    handleCustomerHouse,
    handlePickupDistrict,
    handlePickupArea,
    handlePickupStreet,
    handlePickupHouse,
    handleTerms,
    handleNotes,
    handleSubmit,
  };
}
