import React from "react";
import { v4 as uuid } from "uuid";

export default function Dropdown({ label, value, items, updateValue }) {
  const [show, setShow] = React.useState(false);

  function toggleShow(e, value) {
    if (value) {
      setShow(value);
    } else {
      setShow((prev) => !prev);
    }
  }

  function handleValueChange(e, data) {
    toggleShow(e, false);
    updateValue(data);
  }

  return (
    <div className="dropdown">
      <span className="form-label">{label}</span>
      <button type="button" className="dropdown-title" onClick={toggleShow}>
        {value ? value : "Select one"}
      </button>
      <ul className={`dropdown-list ${show ? "show" : "hide"}`}>
        {items.map((item) => (
          <li
            key={uuid()}
            className="dropdown-list-item"
            onClick={(e) => handleValueChange(e, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
