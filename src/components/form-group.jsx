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
}) => {
  return !select ? (
    <FloatingLabel label={label}>
      <FormControl
        type={type ? type : "text"}
        id={id}
        name={name}
        placeholder={label}
        required={required}
      />
    </FloatingLabel>
  ) : (
    <FloatingLabel label={label}>
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
