import React from "react";
import Button from "../button/button";

export default function PriceCalculator() {
  const [productWeight, setProductWeight] = React.useState("");
  const [productPrice, setProductPrice] = React.useState("");

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
              <label htmlFor="product-price">Product price</label>
              <input
                type="number"
                id="product-price"
                placeholder="Enter product weight (KG)"
                value={productWeight}
                onChange={handleProductWeight}
              />
            </div>
            <div className="form-control">
              <label htmlFor="product-price">Product price</label>
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
            <div className="form-control">
              <label htmlFor="">label</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="">label</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="">label</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-group">
            <h3 className="form-title">Delivery location</h3>
            <div className="form-control">
              <label htmlFor="">label</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="">label</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label htmlFor="">label</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <Button type="submit" label="Calculate" />
      </form>
    </div>
  );
}
