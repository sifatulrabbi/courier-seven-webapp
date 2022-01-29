import React from "react";

export default function FormGroup({
  label,
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
        name={label}
        onChange={onChangeFnc}
        placeholder={placeholder}
        required={required}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
