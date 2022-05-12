import { Checkbox } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

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
  forgotPass: {
    fontWeight: 600,
    color: "rgb(32, 101, 209)",
    fontSize: 14,
    textDecoration: "none",
  },
});

function AuthForgotPassword() {
  const classes = useStyles();

  return (
    <Box
      sx={{
        ":hover": { textDecoration: "underline" },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Checkbox />
      <a className={classes.forgotPass} href="#">
        Forgot password?
      </a>
    </Box>
  );
}

export default AuthForgotPassword;
