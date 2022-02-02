import React from "react";
import Button from "../button/button";
import Dropdown from "../dropdown/dropdown";

export default function CreateParcelForm() {
  return (
    <form className="page-form create-parcel-form" action="submit">
      <div className="form-control">
        <label htmlFor="customer-name" className="form-label">
          Customer name
        </label>
        <input
          type="text"
          name="customer-name"
          id="customer-name"
          required
          placeholder="Enter customer name"
        />
      </div>
      <div className="form-control">
        <label htmlFor="product-weight" className="form-label">
          Product weight
        </label>
        <div className="input-group">
          <input
            type="number"
            name="product-weight"
            id="product-weight"
            required
            placeholder="e.g 100 gm"
          />
          <div className="right">gm</div>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="collection-price" className="form-label">
          Collection price
        </label>
        <div className="input-group">
          <input
            type="number"
            name="collection-price"
            id="collection-price"
            required
            placeholder="e.g 160 BDT"
          />
          <div className="right">BDT</div>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="product-price" className="form-label">
          Product price
        </label>
        <div className="input-group">
          <input
            type="number"
            name="product-price"
            id="product-price"
            required
            placeholder="e.g 100 BDT"
          />
          <div className="right">BDT</div>
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="invoice-id" className="form-label">
          Invoice ID (optional)
        </label>
        <input
          type="text"
          name="invoice-od"
          id="invoice-id"
          placeholder="Enter your invoice"
        />
      </div>
      <div className="form-wrapper">
        <span className="form-group-title">Customer address</span>
        <Dropdown label="District" title="hello" items={[0, 1]} />
        <Dropdown label="Area" title="hello" items={[0, 1]} />
        <div className="form-control">
          <label htmlFor="customer-street" className="form-label">
            Street
          </label>
          <input
            type="text"
            name="customer-street"
            id="customer-street"
            required
            placeholder="Customer's street name, number"
          />
        </div>
        <div className="form-control">
          <label htmlFor="customer-house" className="form-label">
            House
          </label>
          <input
            type="text"
            name="customer-house"
            id="customer-house"
            required
            placeholder="Customer's house name, number"
          />
        </div>
      </div>
      <div className="form-wrapper">
        <span className="form-group-title">Pickup address</span>
        <Dropdown label="District" title="hello" items={[0, 1]} />
        <Dropdown label="Area" title="hello" items={[0, 1]} />
        <div className="form-control">
          <label htmlFor="pickup-street" className="form-label">
            Street
          </label>
          <input
            type="text"
            name="pickup-street"
            id="pickup-street"
            required
            placeholder="Pickup street name, number"
          />
        </div>
        <div className="form-control">
          <label htmlFor="pickup-house" className="form-label">
            House
          </label>
          <input
            type="text"
            name="pickup-house"
            id="pickup-house"
            required
            placeholder="Pickup house name, number"
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="notes" className="form-label">
          Special notes (optional)
        </label>
        <textarea type="text"></textarea>
      </div>
      <Button label="Create parcel" type="submit" big />
    </form>
  );
}
