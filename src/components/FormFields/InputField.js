import { TextField } from "@mui/material";
import React from "react";

function InputField(props) {
  const { label, name, value, onChange } = props;

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
      size="small"
      variant="outlined"
      style={{ marginBottom: 15 }}
    />
  );
}

export default InputField;
