import React from 'react';
import { FloatingLabel, FormControl, FormSelect } from 'react-bootstrap';
import { v4 } from 'uuid';

const FormGroup = ({
  select,
  label,
  name,
  type,
  required,
  options,
  value,
  onChange,
  className,
  disabled,
}) => {
  return !select ? (
    <FloatingLabel label={label}>
      <FormControl
        type={type ? type : 'text'}
        id={name}
        name={name}
        placeholder={label}
        required={required}
        className={className}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </FloatingLabel>
  ) : (
    <FloatingLabel label={label} className={className}>
      <FormSelect
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={v4()} value={option.value}>
            {option.label}
          </option>
        ))}
      </FormSelect>
    </FloatingLabel>
  );
};

export default FormGroup;
