import React from "react";

export default function Button({ label, secondary, onClickFnc, big }) {
  return (
    <button
      type="button"
      className={`btn ${secondary ? "secondary" : "primary"} ${
        big ? "big" : "normal"
      }`}
      onClick={onClickFnc}
    >
      <span>{label}</span>
    </button>
  );
}
