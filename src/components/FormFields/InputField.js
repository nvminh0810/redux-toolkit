import { TextField } from "@mui/material";
import React from "react";

function InputField(props) {
  const { label, name, value, onChange, onBlur, size = "small", error } = props;

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      helperText={error}
      fullWidth
      size={size}
      variant="outlined"
      style={{ marginBottom: 15, marginTop: 15 }}
    />
  );
}

export default InputField;
