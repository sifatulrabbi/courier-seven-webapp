import React from "react";
import Button from "../button/button";
import Dropdown from "../dropdown/dropdown";
import { locations } from "../../assets/locations";
import { usePriceCalculator } from "../../hooks";

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
    handleSubmit,
    handleProductPriceChange,
    handleProductWeightChange,
    handleDeliveryDistrictChange,
    handlePickupDistrictChange,
    handlePickupAreaChange,
    handleDeliveryAreaChange,
  } = usePriceCalculator();

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

  React.useEffect(() => {
    setDeliverAreas([]);
    setPickupAreas([]);
  }, []);

  return (
    <div className="calculator-wrapper">
      <form
        className="price-calculator"
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
    </div>
  );
}
