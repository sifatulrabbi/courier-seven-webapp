import React from "react";
import PropTypes from "prop-types";

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

FormGroup.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string ? PropTypes.string : PropTypes.number,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChangeFnc: PropTypes.func,
};

FormGroup.defaultProps = {
  label: "",
  placeholder: "",
  required: false,
  value: "",
  onChangeFnc: (e) => e,
};
