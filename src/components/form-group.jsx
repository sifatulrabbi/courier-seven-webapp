import React from "react";
import { FloatingLabel, FormControl, FormSelect } from "react-bootstrap";
import { v4 } from "uuid";

const FormGroup = ({
  select,
  label,
  name,
  id,
  type,
  required,
  options,
  value,
  onChangeValue,
  className,
}) => {
  return !select ? (
    <FloatingLabel label={label}>
      <FormControl
        type={type ? type : "text"}
        id={id}
        name={name}
        placeholder={label}
        required={required}
        className={className}
      />
    </FloatingLabel>
  ) : (
    <FloatingLabel label={label} className={className}>
      <FormSelect id={id} name={name} required={required}>
        {options.map((option) => (
          <option key={v4()} value={option}>
            {option}
          </option>
        ))}
      </FormSelect>
    </FloatingLabel>
  );
};

export default FormGroup;
