import React from "react";
import { v4 as uuid } from "uuid";

export default function Dropdown({ title, list, updateValue }) {
  const [name, setName] = React.useState(title);
  const [show, setShow] = React.useState(false);
  const [value, setValue] = React.useState("");

  function toggleShow(e, value) {
    if (value) {
      setShow(value);
    } else {
      setShow((prev) => !prev);
    }
  }

  function handleValueChange(e, data) {
    toggleShow(e, false);
    setName(data.name);
    setValue(data.id);
    updateValue(value);
  }

  return (
    <div className="dropdown">
      <span className="form-label">{title}</span>
      <button className="dropdown-title" onClick={toggleShow}>
        {name}
      </button>
      <ul className={`dropdown-list ${show ? "show" : "hide"}`}>
        {list.map((data) => (
          <li
            key={uuid()}
            className="dropdown-list-item"
            onClick={(e) => handleValueChange(e, data)}
          >
            {data.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
