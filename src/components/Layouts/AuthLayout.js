import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import LoginImg from "assets/img/login.png";
import RegisterImg from "assets/img/register.png";

const useStyles = makeStyles({
  root: {
    padding: 20,
    display: "flex",
    backgroundColor: "rgb(249 250 251)",
    minHeight: "100vh",
    boxSizing: "border-box",
    justifyContent: "space-between",
  },
  sidebar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: 400,
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "1px 1px 5px #e0e0e0",
  },
  sidebarContent: {},
  title: {
    fontSize: "25px !important",
    fontWeight: "700 !important",
    marginBottom: "30px !important",
    marginLeft: "40px !important",
  },
  authPage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  authForm: {},
});

function AuthLayout({ children }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.sidebar}>
        <Box className={classes.sidebarContent}>
          <Typography className={classes.title}>Hi, Welcome Back</Typography>
          <Box>
            <img style={{ maxWidth: "100%" }} alt="Login" src={LoginImg} />
          </Box>
        </Box>
      </Box>
      <Box className={classes.authPage}>
        <Box className={classes.authForm}>{children}</Box>
      </Box>
    </Box>
  );
}

export default AuthLayout;
