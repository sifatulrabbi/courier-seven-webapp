import React from "react";

export function usePriceCalculator() {
  const [productWeight, setProductWeight] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  const [pickupDistrict, setPickupDistrict] = React.useState("");
  const [deliveryDistrict, setDeliveryDistrict] = React.useState("");
  const [deliveryArea, setDeliveryArea] = React.useState("");
  const [pickupArea, setPickupArea] = React.useState("");
  const [result, setResult] = React.useState({});
  const [errors, setErrors] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);

  React.useEffect(() => {
    setResult({
      product: { price: 0, weight: 0 },
      pickup: "",
      delivery: "",
      total: 0,
    });
  }, []);

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

    setErrors([]);
    if (!pickupArea || !pickupDistrict || !deliveryArea || !deliveryDistrict) {
      const errors = [];
      errors.push("Enter pickup location");
      errors.push("Enter delivery location");

      setErrors(errors);
      return;
    }

    setResult({
      product: {
        price: productPrice,
        weight: productWeight,
      },
      pickup: `${pickupDistrict} > ${pickupArea}`,
      delivery: `${deliveryDistrict} > ${deliveryArea}`,
      total: productPrice,
    });

    setShowResult(true);
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
    result,
    errors,
    showResult,
    setShowResult,
    handleProductWeightChange,
    handleProductPriceChange,
    handlePickupDistrictChange,
    handleDeliveryDistrictChange,
    handlePickupAreaChange,
    handleDeliveryAreaChange,
    handleSubmit,
  };
}
