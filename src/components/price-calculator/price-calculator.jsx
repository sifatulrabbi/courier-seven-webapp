import React from "react";
import Button from "../button/button";
import Dropdown from "../dropdown/dropdown";

const list = [
  { id: "dhaka", name: "Dhaka" },
  { id: "khulna", name: "Khulna" },
  { id: "rajshahi", name: "Rajshahi" },
];

export default function PriceCalculator() {
  const [productWeight, setProductWeight] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");
  const [division, setDivision] = React.useState("");

  function handleProductWeight(e) {
    setProductWeight(e.currentTarget.value);
  }

  function handleProductPrice(e) {
    setProductPrice(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

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
              <label className="form-label" htmlFor="product-price">
                Product price
              </label>
              <input
                type="number"
                id="product-price"
                placeholder="Enter product weight (KG)"
                value={productWeight}
                onChange={handleProductWeight}
              />
            </div>
            <div className="form-control">
              <label className="form-label" htmlFor="product-price">
                Product price
              </label>
              <input
                type="number"
                id="product-price"
                placeholder="Enter product price (BDT)"
                value={productPrice}
                onChange={handleProductPrice}
              />
            </div>
          </div>
          <div className="form-group">
            <h3 className="form-title">Pick up location</h3>
            <Dropdown title="Division" list={list} updateValue={setDivision} />
            <Dropdown title="Division" list={list} updateValue={setDivision} />
            <Dropdown title="Division" list={list} updateValue={setDivision} />
          </div>
          <div className="form-group">
            <h3 className="form-title">Delivery location</h3>
            <Dropdown title="Division" list={list} updateValue={setDivision} />
            <Dropdown title="Division" list={list} updateValue={setDivision} />
            <Dropdown title="Division" list={list} updateValue={setDivision} />
          </div>
        </div>
        <Button type="submit" label="Calculate" />
      </form>
    </div>
  );
}
