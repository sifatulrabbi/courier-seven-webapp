import React from "react";

export function usePriceCalculator() {
  const [productWeight, setProductWeight] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  const [pickupDistrict, setPickupDistrict] = React.useState("");
  const [deliveryDistrict, setDeliveryDistrict] = React.useState("");
  const [deliveryArea, setDeliveryArea] = React.useState("");
  const [pickupArea, setPickupArea] = React.useState("");

  function handleProductWeightChange(e) {
    setProductWeight(e.currentTarget.value);
  }

  function handleProductPriceChange(e) {
    setProductPrice(e.currentTarget.value);
  }

  function handlePickupDistrictChange(value) {
    setPickupDistrict(value);
  }

  function handleDeliveryDistrictChange(value) {
    setDeliveryDistrict(value);
  }

  function handlePickupAreaChange(value) {
    setPickupArea(value);
  }

  function handleDeliveryAreaChange(value) {
    setDeliveryArea(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      productPrice,
      productWeight,
      pickup: {
        district: pickupDistrict,
        area: pickupArea,
      },
      delivery: {
        district: deliveryDistrict,
        area: pickupArea,
      },
    });

    setProductPrice("");
    setProductWeight("");
    setPickupDistrict("");
    setPickupArea("");
    setDeliveryDistrict("");
    setDeliveryArea("");
  }

  return {
    productPrice,
    productWeight,
    pickupDistrict,
    deliveryDistrict,
    pickupArea,
    deliveryArea,
    handleProductWeightChange,
    handleProductPriceChange,
    handlePickupDistrictChange,
    handleDeliveryDistrictChange,
    handlePickupAreaChange,
    handleDeliveryAreaChange,
    handleSubmit,
  };
}
