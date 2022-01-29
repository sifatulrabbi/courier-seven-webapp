import React from "react";
import Button from "../button/button";

export default function TrackingForm() {
  const [parcelId, setParcelId] = React.useState("");

  function handleChange(e) {
    setParcelId(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form action="submit" onSubmit={handleSubmit} className="tracking-form">
      <input
        type="text"
        name="parcel-id"
        id="parcel-id"
        required
        placeholder="Enter your parcel ID"
        value={parcelId}
        onChange={handleChange}
      />
      <Button label="Track now" type="submit" />
    </form>
  );
}
