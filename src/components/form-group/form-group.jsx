import React from "react";

export default function FormGroup({
  label,
  name,
  placeholder,
  required,
  value,
  onChangeFnc,
}) {
  return (
    <div className="form-group">
      <input
        id={label}
        value={value}
        name={name}
        onChange={onChangeFnc}
        placeholder={placeholder}
        required={required}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
