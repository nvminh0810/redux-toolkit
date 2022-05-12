import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import AuthForm from "../components/AuthForm";

const useStyles = makeStyles({
  root: {
    width: 480,
    padding: 40,
    backgroundColor: "white",
    borderRadius: 20,
    boxShadow: "1px 1px 5px #e0e0e0",
  },
  authOptions: {
    width: "100%",
  },
});

function LoginPage() {
  const classes = useStyles();

  const handleFormSubmit = (formValues) => {};

  return (
    <Box className={classes.root}>
      <AuthForm onSubmit={handleFormSubmit} />
    </Box>
  );
}

export default LoginPage;
