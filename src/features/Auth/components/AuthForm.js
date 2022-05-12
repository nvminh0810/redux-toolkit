import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import InputField from "components/FormFields/InputField";
import AuthOptions from "./AuthOptions";
import AuthForgotPassword from "./AuthForgotPassword";
import { object, string } from "yup";

const useStyles = makeStyles({
  root: {},
  authOptions: {
    width: "100%",
    marginBottom: 15,
  },
  btnSubmit: {
    marginTop: "15px !important",
    fontWeight: "700 !important",
  },
});

function AuthForm({ onSubmit }) {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const checkValidFields = (formValues) => {
    const { email, password } = formValues;
    const errors = {};

    if (!email) {
      errors.email = "Email is not valid";
    }
    if (!password) {
      errors.password = "Password is not valid";
    }

    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return false;
    }
    return true;
  };

  const checkLengthField = (formValues) => {
    const { email, password } = formValues;
    const errors = {};

    if (email.length < 3 || email.length > 8) {
      errors.email = "Email must be from 3 to 8 character";
    }
    if (password.length < 3 || password.length > 8) {
      errors.password = "Password must be from 3 to 8 character";
    }

    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;

    const isValidFields = checkValidFields(formValues);
    if (isValidFields) {
      checkLengthField(formValues);
    }

    onSubmit(formValues);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography sx={{ marginBottom: 5 }} variant="body1">
        Enter your detailts below.
      </Typography>

      <Box clasrsName={classes.authOptions}>
        <AuthOptions />
      </Box>

      <InputField
        name="email"
        label="Email Addess"
        placeholder="Email Address"
        size="medium"
        onChange={handleFieldChange}
        error={errors.email}
      />
      <InputField
        name="password"
        label="Password"
        placeholder="Password"
        size="medium"
        onChange={handleFieldChange}
        error={errors.password}
      />

      <AuthForgotPassword />

      <Button
        className={classes.btnSubmit}
        variant="contained"
        fullWidth
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}

export default AuthForm;
