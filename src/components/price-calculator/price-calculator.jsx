import React from "react";
import Button from "../button/button";
import Dropdown from "../dropdown/dropdown";
import { locations } from "../../assets/locations";
import { usePriceCalculator } from "../../hooks";
import { v4 as uuid } from "uuid";

const districtsList = [];
locations.forEach((location) => {
  districtsList.push(location.district);
});

export default function PriceCalculator() {
  const [pickupAreas, setPickupAreas] = React.useState([]);
  const [deliveryAreas, setDeliverAreas] = React.useState([]);
  const {
    productWeight,
    productPrice,
    pickupDistrict,
    deliveryDistrict,
    pickupArea,
    deliveryArea,
    result,
    errors,
    showResult,
    setShowResult,
    handleSubmit,
    handleProductPriceChange,
    handleProductWeightChange,
    handleDeliveryDistrictChange,
    handlePickupDistrictChange,
    handlePickupAreaChange,
    handleDeliveryAreaChange,
  } = usePriceCalculator();

  React.useEffect(() => {
    setDeliverAreas([]);
    setPickupAreas([]);
  }, []);

  function updatePickupAreas(district) {
    handlePickupDistrictChange(district);

    const obj = locations.filter((location) => location.district === district);
    setPickupAreas(obj[0].areas);
  }

  function updateDeliveryAreas(district) {
    handleDeliveryDistrictChange(district);

    const obj = locations.filter((location) => location.district === district);
    setDeliverAreas(obj[0].areas);
  }

  return (
    <div className="calculator-wrapper">
      {errors && (
        <div className="errors">
          {errors.map((err) => (
            <span key={uuid()}>{err}</span>
          ))}
        </div>
      )}
      <form
        className={`price-calculator ${showResult ? "hide" : "show"}`}
        action="submit"
        onSubmit={handleSubmit}
      >
        <div className="wrapper">
          <div className="form-group">
            <h3 className="form-title">Product details</h3>
            <div className="form-control">
              <label className="form-label" htmlFor="product-weight">
                Weight
              </label>
              <input
                required
                type="number"
                id="product-price"
                placeholder="Enter product weight (KG)"
                value={productWeight}
                onChange={handleProductWeightChange}
              />
            </div>
            <div className="form-control">
              <label className="form-label" htmlFor="product-price">
                Price
              </label>
              <input
                required
                type="number"
                id="product-price"
                placeholder="Enter product price (BDT)"
                value={productPrice}
                onChange={handleProductPriceChange}
              />
            </div>
          </div>
          <div className="form-group">
            <h3 className="form-title">Pick up location</h3>
            <Dropdown
              label="District"
              value={pickupDistrict}
              updateValue={updatePickupAreas}
              items={districtsList}
            />
            <Dropdown
              label="Area"
              value={pickupArea}
              items={pickupAreas}
              updateValue={handlePickupAreaChange}
            />
          </div>
          <div className="form-group">
            <h3 className="form-title">Delivery location</h3>
            <Dropdown
              label="District"
              value={deliveryDistrict}
              items={districtsList}
              updateValue={updateDeliveryAreas}
            />
            <Dropdown
              label="Area"
              value={deliveryArea}
              items={deliveryAreas}
              updateValue={handleDeliveryAreaChange}
            />
          </div>
        </div>
        <Button type="submit" label="Calculate" />
      </form>
      {showResult && (
        <div className="result-container">
          <div className="top">
            <span className="title">Total:</span>
            <span className="total">
              <span className="colored">{result.total}</span> BDT
            </span>
          </div>
          <div className="info">
            <div>
              <strong>Product price: </strong>
              {result.product.price} BDT
            </div>
            <div>
              <strong>Product weight: </strong>
              {result.product.weight} KG
            </div>
            <div>
              <strong>Pickup Location: </strong>
              {result.pickup}
            </div>
            <div>
              <strong>Delivery Location: </strong>
              {result.delivery}
            </div>
          </div>
          <div className="bottom">
            <Button
              label="Recalculate"
              onClickFnc={function () {
                setShowResult(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
