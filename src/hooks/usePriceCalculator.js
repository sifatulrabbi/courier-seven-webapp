import React from "react";

export default function usePriceCalculator() {
  const [productWeight, setProductWeight] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  const [pickupLocation, setPickupLocation] = React.useState("");
  const [deliveryLocation, setDeliveryLocation] = React.useState("");

  function handleProductWeightChange(e) {
    setProductWeight(e.currentTarget.value);
  }

  function handleProductPriceChange(e) {
    setProductPrice(e.currentTarget.value);
  }

  function handlePickupLocationChange(e) {
    setPickupLocation(e.currentTarget.value);
  }

  function handleDeliveryLocationChange(e) {
    setDeliveryLocation(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      productPrice,
      productWeight,
      pickupLocation,
      deliveryLocation,
    });

    setProductPrice("");
    setProductWeight("");
    setDeliveryLocation("");
    setPickupLocation("");
  }

  return {
    productPrice,
    productWeight,
    pickupLocation,
    deliveryLocation,
    handleProductWeightChange,
    handleProductPriceChange,
    handlePickupLocationChange,
    handleDeliveryLocationChange,
    handleSubmit,
  };
}
