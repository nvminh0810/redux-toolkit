import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function SelectField(props) {
  const { label, name, options, onChange, defaultValue } = props;

  return (
    <FormControl fullWidth style={{ marginBottom: 15 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        label={label}
        onChange={onChange}
        value={defaultValue}
      >
        {options.map((option, idx) => (
          <MenuItem key={idx} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;
