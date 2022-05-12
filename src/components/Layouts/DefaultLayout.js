import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Header from "../Common/Header";
import Sidebar from "../Sidebar";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
  },
  sidebar: {
    flex: 1,
  },
  main: {
    flex: 6,
  },
  header: {
    minHeight: 92,
    padding: "0 42px",
  },
  mainContent: {
    width: "70%",
    margin: "auto",
  },
});

function DefaultLayout({ children }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>
      <Box className={classes.main}>
        <Box className={classes.header}>
          <Header />
        </Box>
        <Box className={classes.mainContent}>{children}</Box>
      </Box>
    </Box>
  );
}

export default DefaultLayout;
