import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

function RadioField(props) {
  const { label, name, options, onChange, defaultValue } = props;
  return (
    <FormControl fullWidth style={{ marginBottom: 15 }}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        row
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {options.map((option, idx) => (
          <FormControlLabel
            key={idx}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioField;
